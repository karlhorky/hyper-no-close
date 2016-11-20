exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tabs_nav .tab_icon {
        display: none;
      }
    `
  });
}
