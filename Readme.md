[![Travis – build status
](https://img.shields.io/travis/tomekwi/css-in-js/master.svg?style=flat-square
)](https://travis-ci.org/tomekwi/css-in-js
) [![David – status of dependencies
](https://img.shields.io/david/tomekwi/css-in-js.svg?style=flat-square
)](https://david-dm.org/tomekwi/css-in-js
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)




# css-in-js

**Write stylesheets in JS.  
Works with any stack.**

There are many ways of writing styles as JS ([Free Style](https://github.com/blakeembrey/free-style), [restyle](https://github.com/WebReflection/restyle) and [babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js) – just to name a few). But none of them has the option to compile to a good old interoperable CSS stylesheet, or the new and shiny [CSS module](https://github.com/css-modules/css-modules). I wanted an easy way to take advantage of JS goodness when writing stylesheets – a way compatible with any tech stack.




<a                                                 id="/installation"></a>&nbsp;

## Installation

```sh
npm install [--save] css-in-js
```




<a                                                        id="/usage"></a>&nbsp;

## Usage

```js
const cssInJs = require('css-in-js');

const indigo = '#3F51B5';

▸ cssInJs({
    '.my-button': {
      'width': '50px',
      'background-color': indigo,
    },

    '@media screen and (min-width: 80em)': {
      '.my-button': {
        'width': '100%',
      },
    },
  });
◂ `
  .my-button {
    width: 50px;
    background-color: #3F51B5;
  }

  @media screen and (min-width: 80em) {
    .my-button {
      width: 100%;
    }
  }
  `
```




<a                                                      id="/credits"></a>&nbsp;

## Credits

css-in-js is heavily inspired by the great [elm-css](https://github.com/rtfeldman/elm-css) by [Richard Feldman](https://github.com/rtfeldman). The name is inspired by the disrupting React talk [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) by [Christopher Chedeau](https://github.com/vjeux).




<a                                                      id="/license"></a>&nbsp;

## License

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
