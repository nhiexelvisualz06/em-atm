
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nhiexelvisualz06.github.io/em-atm/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/em-atm"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/enter-pin"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/main-menu"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/select-account"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/balance"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/withdraw"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/transaction-completed"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/transaction-processing"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/no-transaction"
  },
  {
    "renderMode": 2,
    "route": "/em-atm/withdraw-exit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5073, hash: '69d55cd3957476263c5e982423c336959ad383c2b48e587c9110c631a2a1126c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: 'dbf2bfb73b164ef09b7e1aab71bb98d0e724f367c9e36a362ac36e3cbf09881f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9293, hash: 'f3f92fd7a4424aafd0d336cc49fe1b328a13fd92e68d1aec227673982dbc4cbe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enter-pin/index.html': {size: 16393, hash: '2d7fdd9dbb2e9d46934c5db2eb16bc34df3468e6406171262532b05cc5f914f5', text: () => import('./assets-chunks/enter-pin_index_html.mjs').then(m => m.default)},
    'transaction-processing/index.html': {size: 8027, hash: '6ba7407288d3882224ec910d70197695e2a1b263499474330e2d2b487c920931', text: () => import('./assets-chunks/transaction-processing_index_html.mjs').then(m => m.default)},
    'balance/index.html': {size: 12141, hash: '65c590368468ec8ae04c084b3d2f0718e79915af7870e2a953b01a8ee14b5927', text: () => import('./assets-chunks/balance_index_html.mjs').then(m => m.default)},
    'select-account/index.html': {size: 10674, hash: 'ec6b468e40fb77000c6a59482148edf1f0a07f24451ad3fb3650598092c1b95e', text: () => import('./assets-chunks/select-account_index_html.mjs').then(m => m.default)},
    'withdraw-exit/index.html': {size: 9797, hash: '322e1a6f71a3c7da26ffc1cf99f29d078dc7169d55733e9078f6feef8d599e44', text: () => import('./assets-chunks/withdraw-exit_index_html.mjs').then(m => m.default)},
    'transaction-completed/index.html': {size: 11173, hash: 'eca30a75159617bdedcf78a48722ffbe8ac3a4d46c75e28d130352a84c4e6446', text: () => import('./assets-chunks/transaction-completed_index_html.mjs').then(m => m.default)},
    'no-transaction/index.html': {size: 10008, hash: '6e32885b692fbd02b8e0b4146c550dd7a3d16b7dbf8214857a407bc50994b9d9', text: () => import('./assets-chunks/no-transaction_index_html.mjs').then(m => m.default)},
    'main-menu/index.html': {size: 10915, hash: '5a06f5824f1ee0ceac408f43303ef9bffc5f17295bedd886afb6e7a4453a9078', text: () => import('./assets-chunks/main-menu_index_html.mjs').then(m => m.default)},
    'withdraw/index.html': {size: 16966, hash: '1be6fc223c8b23f509d1c3e3e4d94b48935ab028d6347cb79c4b5547e7bf98b7', text: () => import('./assets-chunks/withdraw_index_html.mjs').then(m => m.default)},
    'styles-UEITD4YB.css': {size: 230982, hash: 'AHZDBHacfwQ', text: () => import('./assets-chunks/styles-UEITD4YB_css.mjs').then(m => m.default)}
  },
};
