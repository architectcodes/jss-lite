const test = require('ava');

const jssLite = require('.');

test(
  'Works with one simple block',
  assert => assert.is(
    jssLite({
      '.my-button': {
        width: '50px',
        'background-color': '#3F51B5',
      },
    }),

`.my-button {
  width: 50px;
  background-color: #3F51B5;
}
`
  )
);

test(
  'Works with multiple blocks',
  assert => assert.is(
    jssLite({
      '.my-button': {
        width: '50px',
        'background-color': '#3F51B5',
      },
      '.wider-button': {
        width: '500px',
      },
    }),

`.my-button {
  width: 50px;
  background-color: #3F51B5;
}

.wider-button {
  width: 500px;
}
`
  )
);

test(
  'Works with nested blocks',
  assert => assert.is(
    jssLite({
      '@media screen and (min-width: 80em)': {
        '.my-button': {
          width: '100%',
        },
      },
    }),

`@media screen and (min-width: 80em) {
  .my-button {
    width: 100%;
  }
}
`
  )
);

test(
  'Supports multiple property fallbacks',
  assert => assert.is(
    jssLite({
      '.drag-me': [{
        cursor: 'pointer',
      }, {
        cursor: '-webkit-grab',
      }, {
        cursor: 'grab',
      }],
    }),
`.drag-me {
  cursor: pointer;
  cursor: -webkit-grab;
  cursor: grab;
}
`
  )
);

test(
  'Supports multiple blocks with the same pseudo-selector',
  assert => assert.is(
    jssLite([{
      a: {
        1: '1',
      },
    }, {
      a: {
        2: '2',
      },
    }]),
`a {
  1: 1;
}

a {
  2: 2;
}
`
  )
);
