const { depth } = require('..')
const t = require('tap')

const cyclic = {
  _name: 'a',
  children: [
    { _name: 'b', children: [{ _name: 'c', children: [] }] },
    { _name: 'd', children: [{ _name: 'e', children: [] }] },
  ],
}
cyclic.children[0].children.push(cyclic.children[1])
cyclic.children[1].children.push(cyclic.children[0])
cyclic.children[0].children.push(cyclic)

const acyclic = {
  _name: 'a',
  children: [
    { _name: 'b', children: [{ _name: 'c' }] },
    { _name: 'd', children: [{ _name: 'e' }] },
  ],
}

const runTest = tree => t => {
  const visit = n => [n._name.toUpperCase()]
  const leave = (n, kids) => {
    n.push(...kids)
    return n
  }
  const getChildren = n => n.children

  const opt = { tree, visit, leave, getChildren }

  t.matchSnapshot(depth(opt), 'fully sync')
  t.matchSnapshot(depth({
    ...opt,
    filter: node => node._name !== 'd',
  }), 'with filter')
  t.resolveMatchSnapshot(depth({
    ...opt,
    getChildren: async n => getChildren(n),
  }), 'async getChildren')
  t.resolveMatchSnapshot(depth({
    ...opt,
    visit: async n => visit(n),
  }), 'async visit')
  t.resolveMatchSnapshot(depth({
    ...opt,
    leave: async (n, kids) => leave(n, kids),
  }), 'async leave')

  t.matchSnapshot(depth({
    ...opt,
    visit: n => {
      n._name = n._name.toUpperCase()
      return n
    },
    leave: null,
  }), 'no leave')
  t.matchSnapshot(depth({
    ...opt,
    leave: (n, kids) => [n._name].concat(...kids),
    visit: null,
  }), 'no visit')
  t.end()
}

t.test('cyclic', runTest(cyclic))
t.test('acyclic', runTest(acyclic))
