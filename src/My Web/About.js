import React from 'react';
import myPic from './images/om.jpg';
import BackButton from './BackButton';
import './css/About.css';

const skills = [
	{
		title: 'Programming Languages',
		course: 'C, C++, Java, JavaScript',
	},
	{
		title: 'Frontend Development',
		course: 'HTML, CSS, BootStrap, jQuery, React.js',
	},
	{
		title: 'Backend Development',
		course: 'Node.js,',
	},
	{
		title: 'Database',
		course: 'Basic Oracle SQL',
	},
	{
		title: 'Cloud',
		course: 'Basic Firebase real-time database',
	},
	{
		title: 'Others',
		course: 'Basic Git & Github',
	},
];

const About = () => {
	// const text = () => {
	// 	let label = document.querySelector('.text');
	// 	let d = 'I am a computer science student.'.split('');

	// 	for (var i = 0; i < d.length; i++) {
	// 		(function (j) {
	// 			setTimeout(function delay() {
	// 				label.textContent += d[j];
	// 			}, j * 100);
	// 		})(i);
	// 	}
	// };

	const scrollHandler = () => {
		if (document.documentElement.scrollTop > 20) {
			if (document.querySelector('.about .back-btn'))
				document.querySelector('.about .back-btn').style.cssText =
					'box-shadow: 0px 10px 15px rgba(59, 57, 57, 0.5)';
		} else {
			if (document.querySelector('.about .back-btn'))
				document.querySelector('.about .back-btn').style.cssText =
					'box-shadow: 0';
		}
	};

	React.useEffect(() => {
		// text();
		window.addEventListener('scroll', scrollHandler);
		//
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<div className="about-page">
			<div className="container-fluid about">
				<BackButton />
				<div className="about-info">
					<h4 className="about_text text"> About </h4>
					<div className="img">
						<div className="img-container">
							<div className="back">
								<h2>Om prakash </h2>
							</div>
							<img src={myPic} alt="om" />
						</div>
					</div>
					<div className="info">
						<p>
							I am a Computer science student. I am from Bihar.
							And i had started my computer career in 2017 from
							BCA. And i learned Computer concept and programming
							languages. My first programming language was C. And
							my favourite programming language is JavaScript and
							React js library.
						</p>
					</div>
				</div>
				<div className="skills-info">
					<h3 className="text">Skills</h3>

					<ul>
						{skills.map((skill, index) => {
							return (
								<Skill
									key={index}
									title={skill.title}
									course={skill.course}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

const Skill = (props) => {
	return (
		<li className="skill">
			<h5 className="skill_title">{props.title}</h5>
			<p className="course">{props.course}</p>
		</li>
	);
};

export default About;
