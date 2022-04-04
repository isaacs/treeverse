// upper case all the nodes, filter out the f branch,
// then flatten the whole thing
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
  visit (node) {
    return [node[0].toUpperCase(), node[1]]
  },
  leave (node, kids) {
    // kids is a list of arrays, because that's what visit/leave return
    return [node[0]].concat(...kids)
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
