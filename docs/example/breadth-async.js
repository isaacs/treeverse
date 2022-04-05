// Note that just returning a new node from the visit function
// is not appropriate here, because a breadth-first traversal
// is not appropriate for map/reduce.  If you want to mutate a
// tree with a breadth-first traversal, it must be mutated
// in place.  If you wish to do so without altering the structure
// of the original tree, then the tree can be cloned at the outset
// and getChildNodes can return newly created objects which you
// add in their subsequent visit call.  See examples/deps.js for
// an example of this.

const { breadth } = require('../')

const tree =
['a',
  [
    ['b', [['c'], ['d']]],
    ['e', [['f', ['g']]]],
  ],
]

breadth({
  tree,
  visit (node) {
    console.log('visit', node[0])
    return new Promise(res => setTimeout(() => {
      node[0] = node[0].toUpperCase()
      res()
    }, 100))
  },
  filter (node) {
    return node[0] !== 'f'
  },
  getChildren (node) {
    return node[1] || []
  },
}).then(() => console.log(JSON.stringify(tree, 0, 2)))
