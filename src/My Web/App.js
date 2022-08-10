import React from 'react';
import Project from './Project';
import About from './About';
import Home from './Home';
import './css/style.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

// Portfolio web
const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/project" component={Project} exact />
				<Route path="/about" component={About} exact />
			</Switch>
		</HashRouter>
	);
};

export default App;
