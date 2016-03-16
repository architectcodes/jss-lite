[![Travis – build status
](https://img.shields.io/travis/tomekwi/jss-lite/master.svg?style=flat-square
)](https://travis-ci.org/tomekwi/jss-lite
) [![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/jss-lite.svg?style=flat-square
)](https://coveralls.io/r/tomekwi/jss-lite
) [![David – status of dependencies
](https://img.shields.io/david/tomekwi/jss-lite.svg?style=flat-square
)](https://david-dm.org/tomekwi/jss-lite
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)




# jss-lite

**Write stylesheets in JS.  
Works with any stack.**

There are many ways of writing styles as JS ([Free Style](https://github.com/blakeembrey/free-style), [restyle](https://github.com/WebReflection/restyle) and [babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js) – just to name a few). But none of them except [jss](https://github.com/jsstyles/jss) has the option to compile to a good old interoperable CSS stylesheet, or the new and shiny [CSS module](https://github.com/css-modules/css-modules). I wanted an easy way to take advantage of JS goodness when writing stylesheets – a way compatible with any tech stack.

I wrote this library before I learned about [jss](https://github.com/jsstyles/jss) (it was called css-in-js back then). It turns out that they do exactly the same thing – and much more. In turn, jss-lite offers an extremely simple, pure functional API without implicit state. We have less features than jss – but that means less developer overhead and better performance.




<a                                                 id="/installation"></a>&nbsp;

## Installation

```sh
npm install [--save] jss-lite
```




<a                                                        id="/usage"></a>&nbsp;

## Usage

```js
const cssInJs = require('jss-lite');

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




<a                                                       id="/syntax"></a>&nbsp;

## Syntax

Any JS object is translated recursively to a CSS tree. To ensure two-way compatibility, we only support [git.io/orthodox](https://git.io/orthodox) style objects.

<a                                                   id="/syntax/fallbacks"></a>

### Fallbacks

When using fancy things which need a CSS fallback, you might want to set the same property more than once:

```css
.drag-me {
  cursor: pointer;
  cursor: -webkit-grab;
  cursor: grab;
}
```

To cover these cases, we allow passing an array of style objects:

```js
▸ cssInJs({
    '.drag-me': [{
      cursor: 'pointer',
    }, {
      cursor: '-webkit-grab',
    }, {
      cursor: 'grab',
    }],
  });
◂ `
  .drag-me {
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
  }
  `
```




<a                                                      id="/credits"></a>&nbsp;

## Credits

jss-lite is heavily inspired by the great [elm-css](https://github.com/rtfeldman/elm-css) by [Richard Feldman](https://github.com/rtfeldman). The original name (css-in-js) comes from the disrupting React talk [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) by [Christopher Chedeau](https://github.com/vjeux). The current name (jss-lite) is of course derived from our big brother [jss](https://github.com/jsstyles/jss).




<a                                                      id="/license"></a>&nbsp;

## License

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
