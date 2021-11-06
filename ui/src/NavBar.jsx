import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
	return(
		<nav>
			<NavLink exact to="/">Home</NavLink>
			{'  |  '}
			<NavLink to="/issues">Issue List</NavLink>
			{/* <a href="/#/issues">Issue List</a> */}
			{'  |  '}
			<NavLink to="/report">Report</NavLink>
			{/* <a href="/#/report">Report</a> */}
			{/* <Link to="/report">Report via Link Component</Link> */}
		</nav>
	)
}