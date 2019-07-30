/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/breadth.js TAP acyclic > async getChildren 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP acyclic > async visit 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP acyclic > fully sync 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP acyclic > no-op 1`] = `
Object {
  "_name": "a",
  "children": Array [
    Object {
      "_name": "b",
      "children": Array [
        Object {
          "_name": "c",
        },
      ],
    },
    Object {
      "_name": "d",
      "children": Array [
        Object {
          "_name": "e",
        },
      ],
    },
  ],
}
`

exports[`test/breadth.js TAP acyclic > with filter 1`] = `
Array [
  "a",
  "b",
  "c",
]
`

exports[`test/breadth.js TAP cyclic > async getChildren 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP cyclic > async visit 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP cyclic > fully sync 1`] = `
Array [
  "a",
  "b",
  "d",
  "c",
  "e",
]
`

exports[`test/breadth.js TAP cyclic > no-op 1`] = `
&ref_2 Object {
  "_name": "a",
  "children": Array [
    &ref_1 Object {
      "_name": "b",
      "children": Array [
        Object {
          "_name": "c",
          "children": Array [],
        },
        Object {
          "_name": "d",
          "children": Array [
            Object {
              "_name": "e",
              "children": Array [],
            },
            <*ref_1>,
          ],
        },
        <*ref_2>,
      ],
    },
    &ref_3 Object {
      "_name": "d",
      "children": Array [
        Object {
          "_name": "e",
          "children": Array [],
        },
        Object {
          "_name": "b",
          "children": Array [
            Object {
              "_name": "c",
              "children": Array [],
            },
            <*ref_3>,
            <*ref_2>,
          ],
        },
      ],
    },
  ],
}
`

exports[`test/breadth.js TAP cyclic > with filter 1`] = `
Array [
  "a",
  "b",
  "c",
]
`
