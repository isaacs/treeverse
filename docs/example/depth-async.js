// upper case all the nodes, filter out the f branch
const { depth } = require('../')

const tree =
['a',
  [
    ['b', [['c'], ['d']]],
    ['e', [['f', ['g']]]],
    ['h', [['i', ['j', ['k']]]]],
  ],
]

depth({
  tree,
  leave (node, kids) {
    return new Promise(res => setTimeout(() => {
      console.log('leave', node)
      res([node[0].toUpperCase(), kids])
    }, 200))
  },
  filter (node) {
    return node[0] !== 'f'
  },
  getChildren (node) {
    return new Promise(res => setTimeout(() => {
      res(node[1])
    }, 200))
  },
}).then(res => console.log(JSON.stringify(res, 0, 2)))
