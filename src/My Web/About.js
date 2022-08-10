import React from 'react';
import myPic from './images/om.jpg';
import BackButton from './BackButton';
import './css/About.css';

const skills = [
	{
		title: 'Programming Languages',
		course: 'C, C++, Java, JavaScript, TypeScript',
	},
	{
		title: 'Frontend Development',
		course: 'HTML, CSS, BootStrap, jQuery, React.js, Material UI, Vue.js, NuxtJS 3',
	},
	{
		title: 'Backend Development',
		course: 'Node.js, ExpressJs',
	},
	{
		title: 'Database',
		course: 'Basic Oracle SQL, MongoDB',
	},
	{
		title: 'Cloud',
		course: 'Basic Firebase real-time database,vFirebase Authentication, and FireStore etc.',
	},
	{
		title: 'Others',
		course: 'Git & Github',
	},
	{
		title: '',
		course: '',
	},
];

const About = () => {
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
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<div className="about-page">
			<div className="container-fluid about">
				<BackButton />
				<div className="about-info" data-aos="fade-down">
					<h4 className="about_text text"> About </h4>
					<div className="img" data-aos="flip-down">
						<div className="img-container">
							<div className="back">
								<h2>Om prakash </h2>
							</div>
							<img src={myPic} alt="om" />
						</div>
					</div>
					<div className="info">
						<p data-aos="zoom-in" data-aos-duration="2000">
							I am a Computer science student. I am from Bihar. And i had
							started my computer career in 2017 from BCA. And i learned
							Computer concept and programming languages. My first programming
							language was C. And my favorite programming language is
							JavaScript and React js library.
						</p>
					</div>
				</div>
				<div className="skills-info" data-aos="fade-up">
					<h3 className="text">Skills</h3>

					<ul>
						{skills.map((skill, index) => {
							return (
								<Skill key={index} title={skill.title} course={skill.course} />
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
		<li className="skill" data-aos="fade-up">
			<h5 className="skill_title">{props.title}</h5>
			<p className="course">{props.course}</p>
		</li>
	);
};

export default About;
