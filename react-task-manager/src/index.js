import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container/Container.js';
import *  as registerServiceWorker from './serviceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker.register();