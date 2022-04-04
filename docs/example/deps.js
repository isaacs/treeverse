// A dummy implementation of npm's "maximally naive deduplication"
// installation algorithm.  Note that the tree doesn't actually
// "exist" in any kind of fully realized form until the walk
// is completed.  The getChildren method maps the node's dependencies
// to nodes, and the visit finds an optimal place in the tree
// for that node.

const { breadth } = require('../')

// our registry of package versions and dependencies.
const manifests = {
  a1: { name: 'a', version: '1', deps: ['b1', 'c2'] },
  b1: { name: 'b', version: '1', deps: ['c1', 'd2'] },
  c1: { name: 'c', version: '1', deps: ['d1', 'e1'] },
  c2: { name: 'c', version: '2', deps: ['d1', 'e1'] },
  d1: { name: 'd', version: '1', deps: [] },
  d2: { name: 'd', version: '2', deps: [] },
  e1: { name: 'e', version: '1', deps: [] },
}

// starting tree, just a single dep
const tree = { deps: ['a1'] }

const res = breadth({
  tree,
  visit (node) {
    // find the location highest in the tree where this node can live.
    // obviously for the root, we just leave it where it is, but still
    // clone the object so that we're not messing with the real one.
    // We could also just `return node` if in-place mutation was the goal.
    // Note that, because we're returning a different tree where the
    // mutation actually happens, it's important to capture the result.
    if (node === tree) {
      return { name: 'root', deps: [...node.deps], children: [] }
    }

    const rb = node.requiredBy
    let loc = rb.parent
    let prev = rb
    while (loc) {
      const cur = loc.children.filter(c => c.name === node.name)[0]
      if (cur) {
        if (cur.version === node.version) {
          // already there!
          return node
        } else {
          break
        }
      } else {
        const locDep = loc.deps.filter(n => n.charAt(0) === node.name)[0]
        if (locDep && locDep !== node.name + node.version) {
          // wants something different
          break
        }
      }
      prev = loc
      loc = loc.parent
    }

    // install it in the latest location that didn't have a conflict.
    delete node.requiredBy
    node.parent = prev
    node.children = []
    prev.children.push(node)

    // return the node so that we can call getChildren() on the result.
    return node
  },

  // in this case we care about the RESULT of the visit, not the original,
  // because we're building up a new tree separate from the original.
  getChildren (_, node) {
    return node.deps.map(p => ({ requiredBy: node, ...manifests[p] }))
  },
})

const { format } = require('tcompare')
console.log(format(res))
