const { breadth } = require('..')

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

breadth({
  tree: cyclic,
  visit: node => console.log(node._name),
  getChildren: node => node.children,
})
