exports.decorateConfig = config => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .splitpane_pane > .term_fit {
        filter: blur(1px);
        opacity: 0.3;
      }
      
      .splitpane_pane > .term_fit:hover,
      .splitpane_pane > .term_fit.term_active {
        filter: none;
        opacity: 1;
      }
      
      .splitpane_divider {
        background-color: rgba(0, 0, 0, 0.2) !important;
      }
    `
  });
}
