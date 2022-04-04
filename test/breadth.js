const { breadth } = require('../')
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

const deep = {
  _name: 'root',
  children: [],
}
for (let walker = deep, i = 0; i < 10000; i++) {
  walker.children.push({ _name: `${i}`, children: [] })
  walker = walker.children[0]
}

const runTest = tree => t => {
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
      filter: node => node._name !== 'd' && node._name !== '10',
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

  {
    const acc = []
    const visit = accum(acc)
    t.resolveMatchSnapshot(breadth({
      ...opt,
      getChildren: async n => getChildren(n),
      visit: async n => visit(n),
    }).then(() => acc), 'async getChildren and visit')
  }

  {
    const acc = []
    const visit = accum(acc)
    t.resolveMatchSnapshot(breadth({
      ...opt,
      getChildren: n => {
        const c = getChildren(n)
        return Math.random() < 0.5 ? Promise.resolve(c) : c
      },
      visit: n => {
        const res = visit(n)
        return Math.random() < 0.5 ? Promise.resolve(res) : res
      },
    }).then(() => acc), 'maybe sync getChildren and visit')
  }

  t.equal(breadth({
    ...opt,
    visit: null,
  }), tree, 'no-op')

  t.end()
}

t.test('cyclic', runTest(cyclic))
t.test('acyclic', runTest(acyclic))
t.test('deep stack', runTest(deep))
