const { depth } = require('../')

const tree =
['a',
  [
    ['b', [['c'], ['d']]],
    ['e', [['f', ['g']]]],
  ],
]

const res = depth({
  tree,
  leave (node, kids) {
    console.log('leave', node)
    return [node[0].toUpperCase(), kids]
  },
  filter (node) {
    return node[0] !== 'f'
  },
  getChildren (node) {
    return node[1]
  },
})

console.log(JSON.stringify(res, 0, 2))
