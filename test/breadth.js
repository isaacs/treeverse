const {breadth} = require('../')
const t = require('tap')
const {format} = require('tcompare')

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
  const acc = []
  const accum = acc => n => {
    acc.push(n._name)
    return [n._name.toUpperCase()]
  }
  const getChildren = n => n.children
  const opt = { tree, getChildren }

  {
    const acc = []
    const visit = accum(acc)
    breadth({ ...opt, visit })
    t.matchSnapshot(acc, 'fully sync')
  }

  {
    const acc = []
    const visit = accum(acc)
    breadth({
      ...opt,
      visit,
      filter: node => node._name !== 'd',
    })
    t.matchSnapshot(acc, 'with filter')
  }

  {
    const acc = []
    const visit = accum(acc)
    t.resolveMatchSnapshot(breadth({
      ...opt,
      visit,
      getChildren: async n => getChildren(n),
    }).then(() => acc), 'async getChildren')
  }

  {
    const acc = []
    const visit = accum(acc)
    t.resolveMatchSnapshot(breadth({
      ...opt,
      visit: async n => visit(n),
    }).then(() => acc), 'async visit')
  }

  t.matchSnapshot(breadth({
    ...opt,
    visit: null,
  }), 'no-op')

  t.end()
}

t.test('cyclic', runTest(cyclic))
t.test('acyclic', runTest(acyclic))
