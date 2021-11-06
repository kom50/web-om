import React from 'react';
import myPic from './images/om.jpg';
import './css/Home.css';
const Home = () => {
	return (
		<div className="row home mx-auto">
			<div className=" col-12  mx-auto ">
				<div className="img-container">
					<div className="img">
						<img className=" img-fluid" src={myPic} alt="" />
						<div className="back">
							<p> Om prakash</p>
						</div>
					</div>
				</div>
				<div className="main_div">
					<ul>
						<li className="item">Project</li>
						<li className="item">About Me & Skills</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
