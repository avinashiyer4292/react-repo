import React from 'react';
import ReactDOM from 'react-dom';
import App from './counter-redux-example/CounterApp';
import User from './components/pages/User';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);


ReactDOM.render(

			// <Router>
			// 	<div className='container'>
			// 		<NavBar />
			// 		<Route path="/" component={App} />
			// 		<Route path="/user" component={User} />
			// 	</div>
			// </Router>
		<Provider store={store}>
			<App />
		</Provider>
	, document.getElementById('root'));
registerServiceWorker();
