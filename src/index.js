import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './components/pages/User';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import routes from './routes.js';
import NavBar from './components/uicomponents/NavBar';

ReactDOM.render(

			// <Router>
			// 	<div className='container'>
			// 		<NavBar />
			// 		<Route path="/" component={App} />
			// 		<Route path="/user" component={User} />
			// 	</div>
			// </Router>
		<App />
	, document.getElementById('root'));
registerServiceWorker();
