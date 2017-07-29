import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import {
  registerServiceWorker,
} from './utils';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
