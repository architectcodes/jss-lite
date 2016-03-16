const test = require('ava');

const cssInJs = require('.');

test(
  'Works with one simple block',
  assert => assert.is(
    cssInJs({
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
    cssInJs({
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
    cssInJs({
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
    cssInJs({
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
