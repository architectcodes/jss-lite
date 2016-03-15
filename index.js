module.exports = (input) => {
  const selectors = Object.keys(input);

  const render = (selector) => {
    const styleObject = input[selector];
    return `${selector} {
${
  Object.keys(styleObject).map(
    property => `  ${property}: ${styleObject[property]};\n`
  ).join('')
}}
`;
  };

  return selectors.map(render).join('\n');
};
