/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/depth.js TAP acyclic > async getChildren 1`] = `
Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
  ],
  Array [
    "D",
    Array [
      "E",
    ],
  ],
]
`

exports[`test/depth.js TAP acyclic > async leave 1`] = `
Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
  ],
  Array [
    "D",
    Array [
      "E",
    ],
  ],
]
`

exports[`test/depth.js TAP acyclic > async visit 1`] = `
Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
  ],
  Array [
    "D",
    Array [
      "E",
    ],
  ],
]
`

exports[`test/depth.js TAP acyclic > fully sync 1`] = `
Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
  ],
  Array [
    "D",
    Array [
      "E",
    ],
  ],
]
`

exports[`test/depth.js TAP acyclic > no leave 1`] = `
Object {
  "_name": "A",
  "children": Array [
    Object {
      "_name": "B",
      "children": Array [
        Object {
          "_name": "C",
        },
      ],
    },
    Object {
      "_name": "D",
      "children": Array [
        Object {
          "_name": "E",
        },
      ],
    },
  ],
}
`

exports[`test/depth.js TAP acyclic > no visit 1`] = `
Array [
  "A",
  "B",
  "C",
  "D",
  "E",
]
`

exports[`test/depth.js TAP acyclic > with filter 1`] = `
Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
  ],
]
`

exports[`test/depth.js TAP cyclic > async getChildren 1`] = `
&ref_2 Array [
  "A",
  &ref_1 Array [
    "B",
    Array [
      "C",
    ],
    Array [
      "D",
      Array [
        "E",
      ],
      <*ref_1>,
    ],
    <*ref_2>,
  ],
  &ref_3 Array [
    "D",
    Array [
      "E",
    ],
    Array [
      "B",
      Array [
        "C",
      ],
      <*ref_3>,
      <*ref_2>,
    ],
  ],
]
`

exports[`test/depth.js TAP cyclic > async leave 1`] = `
&ref_2 Array [
  "A",
  &ref_1 Array [
    "B",
    Array [
      "C",
    ],
    Array [
      "D",
      Array [
        "E",
      ],
      <*ref_1>,
    ],
    <*ref_2>,
  ],
  &ref_3 Array [
    "D",
    Array [
      "E",
    ],
    Array [
      "B",
      Array [
        "C",
      ],
      <*ref_3>,
      <*ref_2>,
    ],
  ],
]
`

exports[`test/depth.js TAP cyclic > async visit 1`] = `
&ref_2 Array [
  "A",
  &ref_1 Array [
    "B",
    Array [
      "C",
    ],
    Array [
      "D",
      Array [
        "E",
      ],
      <*ref_1>,
    ],
    <*ref_2>,
  ],
  &ref_3 Array [
    "D",
    Array [
      "E",
    ],
    Array [
      "B",
      Array [
        "C",
      ],
      <*ref_3>,
      <*ref_2>,
    ],
  ],
]
`

exports[`test/depth.js TAP cyclic > fully sync 1`] = `
&ref_2 Array [
  "A",
  &ref_1 Array [
    "B",
    Array [
      "C",
    ],
    Array [
      "D",
      Array [
        "E",
      ],
      <*ref_1>,
    ],
    <*ref_2>,
  ],
  &ref_3 Array [
    "D",
    Array [
      "E",
    ],
    Array [
      "B",
      Array [
        "C",
      ],
      <*ref_3>,
      <*ref_2>,
    ],
  ],
]
`

exports[`test/depth.js TAP cyclic > no leave 1`] = `
&ref_2 Object {
  "_name": "A",
  "children": Array [
    &ref_1 Object {
      "_name": "B",
      "children": Array [
        Object {
          "_name": "C",
          "children": Array [],
        },
        Object {
          "_name": "D",
          "children": Array [
            Object {
              "_name": "E",
              "children": Array [],
            },
            <*ref_1>,
          ],
        },
        <*ref_2>,
      ],
    },
    &ref_3 Object {
      "_name": "D",
      "children": Array [
        Object {
          "_name": "E",
          "children": Array [],
        },
        Object {
          "_name": "B",
          "children": Array [
            Object {
              "_name": "C",
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

exports[`test/depth.js TAP cyclic > no visit 1`] = `
Array [
  "A",
  "B",
  "C",
  "D",
  "E",
  &ref_1 Object {
    "_name": "B",
    "children": Array [
      Object {
        "_name": "C",
        "children": Array [],
      },
      Object {
        "_name": "D",
        "children": Array [
          Object {
            "_name": "E",
            "children": Array [],
          },
          <*ref_1>,
        ],
      },
      Object {
        "_name": "A",
        "children": Array [
          <*ref_1>,
          Object {
            "_name": "D",
            "children": Array [
              Object {
                "_name": "E",
                "children": Array [],
              },
              <*ref_1>,
            ],
          },
        ],
      },
    ],
  },
  &ref_2 Object {
    "_name": "A",
    "children": Array [
      &ref_1 Object {
        "_name": "B",
        "children": Array [
          Object {
            "_name": "C",
            "children": Array [],
          },
          Object {
            "_name": "D",
            "children": Array [
              Object {
                "_name": "E",
                "children": Array [],
              },
              <*ref_1>,
            ],
          },
          <*ref_2>,
        ],
      },
      &ref_3 Object {
        "_name": "D",
        "children": Array [
          Object {
            "_name": "E",
            "children": Array [],
          },
          Object {
            "_name": "B",
            "children": Array [
              Object {
                "_name": "C",
                "children": Array [],
              },
              <*ref_3>,
              <*ref_2>,
            ],
          },
        ],
      },
    ],
  },
  "D",
  "E",
  &ref_1 Object {
    "_name": "B",
    "children": Array [
      Object {
        "_name": "C",
        "children": Array [],
      },
      Object {
        "_name": "D",
        "children": Array [
          Object {
            "_name": "E",
            "children": Array [],
          },
          <*ref_1>,
        ],
      },
      Object {
        "_name": "A",
        "children": Array [
          <*ref_1>,
          Object {
            "_name": "D",
            "children": Array [
              Object {
                "_name": "E",
                "children": Array [],
              },
              <*ref_1>,
            ],
          },
        ],
      },
    ],
  },
]
`

exports[`test/depth.js TAP cyclic > with filter 1`] = `
&ref_1 Array [
  "A",
  Array [
    "B",
    Array [
      "C",
    ],
    <*ref_1>,
  ],
]
`
