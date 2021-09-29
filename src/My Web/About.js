import React from 'react';
import myPic from './images/om.jpg';
import BackButton from './BackButton';
import './css/About.css';

const About = () => {
	const text = () => {
		let label = document.querySelector('.text');
		let d = 'I am a computer science student.'.split('');

		for (var i = 0; i < d.length; i++) {
			(function (j) {
				setTimeout(function delay() {
					label.textContent += d[j];
				}, j * 100);
			})(i);
		}
	};

	React.useEffect(() => {
		// text();
	}, []);

	return (
		<div className="about-page">
			<div className="container-fluid about">
				<BackButton />
				<div className="about-info">
					<div className="img">
						<div className="img-container">
							<div className="back">
								<h2>Om prakash </h2>
							</div>
							<img src={myPic} alt="om" />
						</div>
					</div>
					<div className="info">
						<p>I am a computer science student.</p>
					</div>
				</div>
				<div className="skills-info">
					<p className="text"></p>
					<ul>
						<li className="skill">
							<h5>Web Development</h5>
							<p className="course">
								HTML5, CSS, CSS3, JavaScript, React Js
							</p>
						</li>
						<li className="skill"></li>
						<li className="skill"></li>
						<li className="skill"></li>
						<li className="skill"></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
