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
