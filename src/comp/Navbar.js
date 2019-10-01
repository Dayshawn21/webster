import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Webster Workout</h1>

			<ul>
				<li>
					<Link to="/"> Home</Link>
				</li>
				<li>
					<Link to="/"> About</Link>
				</li>
				<li>
					<Link to="/"> Services</Link>
				</li>
				<li>
					<Link to="/"> Contact </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
