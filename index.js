const indentString = require('indent-string');

const renderObject = (input) => {
  const selectors = Object.keys(input);

  const render = (selector) => {
    const styleObject = input[selector];
    return `${selector} {
${
  Object.keys(styleObject).map(
    (property) => (typeof styleObject[property] === 'string' ?
      `  ${property}: ${styleObject[property]};\n` :
      indentString(renderObject(styleObject), '  ')
    )
  ).join('')
}}
`;
  };

  return selectors.map(render).join('\n');
};

module.exports = renderObject;
