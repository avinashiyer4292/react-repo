import React from 'react';
import {Route} from 'react-router';

import App from './App';
import About from './components/pages/About';
import User from './components/pages/User';
export default (
		<Route name='homepage' component ={App}>
			<Route path='/' name='Home' component={App} />
			<Route path='/user' name='User' component={User} />

		</Route>

	);