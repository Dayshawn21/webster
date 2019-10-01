import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './comp/Navbar';
import Home from './Pages/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
