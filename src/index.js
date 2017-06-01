import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './components/pages/User';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import routes from './routes.js';

ReactDOM.render(

			<Router>
				<div>
					<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
						  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <a className="navbar-brand" href="#">Navbar</a>

						  <div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav mr-auto">
						      <li className="nav-item active">
						        <a className="nav-link" href="/">Home</a>
						      </li>
						      <li className="nav-item">
						        <a className="nav-link" href="/user">User</a>
						      </li>
						    </ul>
						    <form className="form-inline my-2 my-lg-0">
						      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
						      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						    </form>
						  </div>
						</nav>
					<Route path="/" component={App} />
					<Route path="/user" component={User} />
				</div>
			</Router>

	, document.getElementById('root'));
registerServiceWorker();
