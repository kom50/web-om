import React from 'react';
import Project from './Project';
import About from './About';
import Home from './Home';
import './css/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/project" component={Project} exact />
				<Route path="/about" component={About} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
