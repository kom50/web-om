import React from 'react';
import myPic from './images/om.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container-fluid">
			<div className="img-container">
				<div className="back">
					<h2>Om prakash </h2>
				</div>
				<img src={myPic} alt="om" />
			</div>
			<h2 className="std">Student | Developer</h2>
			<div className="main">
				<div className="content">
					<div className="items item1">
						<Link to="/project"> Projects </Link>
					</div>
					<div className="items item2">
						<Link to="/about"> About & Skills </Link>
					</div>
					<div className="items item3"></div>
					<div className="items item4"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
