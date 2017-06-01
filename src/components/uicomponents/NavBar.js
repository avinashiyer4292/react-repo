import React from 'react';


const NavBar = () => <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
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
						</nav>;

export default NavBar;