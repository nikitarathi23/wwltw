import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'components/app';

function run() {
  ReactDOM.render(
    <App title='WWLTW Email Generator'/>,
    document.getElementById('app')
  );
}

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}
