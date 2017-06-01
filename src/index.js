import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router} from 'react-router';
import routes from './routes.js';
import {createBrowserHistory} from 'history/createBrowserHistory';
import {createHashHistory} from 'history/createHashHistory';

const browserHistory = createBrowserHistory;
var hashHistory   = createHashHistory;

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('root'));
registerServiceWorker();
