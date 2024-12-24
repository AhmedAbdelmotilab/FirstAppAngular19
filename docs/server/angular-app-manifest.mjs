
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FirstAppAngular19/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5954, hash: '71156d34545bdcb4a6ecd86232ef52077c1cacf523dbed4045420f1c15e98a17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1097, hash: '256edf67c5e2f05c22e20eec9b0a400f7f62759794f18e13919db219cbc789a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
