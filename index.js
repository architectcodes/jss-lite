const indentString = require('indent-string');

const renderObject = (input) => {
  const selectors = Object.keys(input);

  const render = (selector) => {
    const style = input[selector];
    const stylesArray = (Array.isArray(style) ?
      style :
      [style]
    );

    return `${selector} {
${
  stylesArray.map((styleObject) => (
    Object.keys(styleObject).map(
      (property) => (typeof styleObject[property] === 'string' ?
        `  ${property}: ${styleObject[property]};\n` :
        indentString(renderObject(styleObject), '  ')
      )
    ).join('')
  )).join('')
}}
`;
  };

  return selectors.map(render).join('\n');
};

module.exports = (jssStylesheet) => {
  const stylesheets = (Array.isArray(jssStylesheet) ?
    jssStylesheet :
    [jssStylesheet]
  );

  return stylesheets.map(renderObject).join('\n');
};
