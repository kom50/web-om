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
			<h2 className="std" data-aos="flip-left">
				Front End Developer | Student
			</h2>
			<div className="main">
				<div className="content">
					<div className="items item1" data-aos="fade-right">
						<Link to="/project"> Projects </Link>
					</div>
					<div className="items item2" data-aos="fade-left">
						<Link to="/about"> About & Skills </Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
