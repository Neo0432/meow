const template = ({componentName, imports, interfaces, props, jsx}, {tpl}) => {
  const exportName = /^\d/.test(componentName)
    ? `Svg${componentName}`
    : componentName;

  return tpl`
    ${imports}
    ${interfaces};

    export const ${exportName} = (${props}) => (
      ${jsx}
    );
  `;
};
module.exports = template;
