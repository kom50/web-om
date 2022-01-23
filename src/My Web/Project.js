import React, { useState, useEffect } from 'react';
import myPic from './images/om.jpg';
import Dialog from './Dialog';
import './css/style.css';
import './css/Project-style.css';

import { projectDetails } from './projectData.js';
import BackButton from './BackButton';

let myHeader = null;

const Project = () => {
	const [isDialogBoxOpen, setDialogBoxOpen] = useState(false);
	const [data, setData] = useState(projectDetails[0]);
	const [arr, setArray] = useState(['HTML', 'React Js', 'MERN Stack', 'Java']);

	//
	const handleClick = (event) => {
		console.log('Click event');
		setDialogBoxOpen(true);
		setData(projectDetails[event.target.parentElement.id]);
	};

	const scrollUpdate = () => {
		if (myHeader) {
			if (document.documentElement.scrollTop > 20) {
				myHeader.style.cssText = 'box-shadow: 0 4px 30px rgb(76, 75, 75);';
			} else {
				myHeader.style.cssText = 'box-shadow: 0';
			}
			// for header My Project Text add on header panel or remove
			let ele = document.querySelector('.std');
			let langsPanel = document.querySelector('.langs');

			if (document.documentElement.scrollTop > 192) {
				ele.style.cssText = 'top : 15px';
				myHeader.style.cssText =
					'box-shadow: 0 4px 30px rgb(76, 75, 75); height : 160px; flex-direction: column; align-items: center;';
				langsPanel.style.cssText = 'top : 20px;';
				myHeader.appendChild(ele);
				myHeader.appendChild(langsPanel);
				// langsPanel.style.cssText = 'top : 160px';
			} else {
				ele.style.cssText = 'top : 105px';
				myHeader.style.cssText = 'height : 60px; ';
				langsPanel.style.cssText = 'top : 120px';
				document.querySelector('.container1').before(langsPanel);
				langsPanel.before(ele);
			}
		}
	};

	useEffect(() => {
		console.log('use effect');
		window.addEventListener('scroll', scrollUpdate, true);
		// Clean up
		return () => {
			window.removeEventListener('scroll', scrollUpdate);
		};
	}, []);

	useEffect(() => {
		console.log('array updated effect function', arr);
	}, [arr]);

	// language
	const chooseHandle = (event) => {
		console.log(event.target);
		let selected = 0;
		const ch = event.target.parentElement.children;
		for (let i = 0; i < ch.length; i++) {
			if (ch[i].classList.value.includes('active')) {
				selected++;
			}
		}
		console.log(selected);
		// at least one language is selected, and if the target element is not have a active class then below condition is true
		if (selected > 1 || !event.target.classList.value.includes('active'))
			var b = event.target.classList.toggle('active');
		console.log(b);

		arr.length = 0; // remove all data from array
		for (let i = 0; i < ch.length; i++) {
			if (ch[i].classList.value.includes('active')) {
				setArray((arr) => [...arr, ch[i].id]);
			}
		}
		console.log(arr);
	};

	return (
		<>
			{isDialogBoxOpen && (
				<Dialog
					data={data}
					closeHandler={() => {
						setDialogBoxOpen(false);
					}}
				/>
			)}
			<div className="container-fluid project ">
				<div className="header" ref={(ele) => (myHeader = ele)}>
					<BackButton />
				</div>
				<div className="img-container">
					<div className="back">
						<h2>Om prakash </h2>
					</div>
					<img src={myPic} alt="om" />
				</div>
				<h2 className="std">My Projects</h2>
				<div className="langs">
					<div onClick={chooseHandle} id="HTML" className="items active">
						HTML
					</div>
					<div onClick={chooseHandle} id="React Js" className="items active">
						React.js
					</div>
					<div onClick={chooseHandle} id="MERN Stack" className="items active">
						MERN
					</div>
					<div onClick={chooseHandle} id="Java" className="items active">
						Java
					</div>
				</div>
				<div className="container1  project_container row mx-auto">
					{/* {arr.forEach((item) => {
						console.log('object ---- ', item);
						projectDetails
							.filter((project) => project.title.includes(item))
							.map((project, index) => {
								console.log('object project ---- ', project);
								return (
									<Card
										key={index}
										index={index}
										project={project}
										handler={handleClick}
									/>
								);
							});
					})} */}
					{projectDetails.map((project, index) => {
						for (let i = 0; i < arr.length; i++) {
							if (project.title.includes(arr[i])) {
								return (
									<Card
										key={index}
										index={index}
										project={project}
										handler={handleClick}
									/>
								);
							}
						}
					})}
				</div>
			</div>
		</>
	);
};

const Card = (props) => {
	const project = props.project;
	return (
		<div
			className="card"
			id={props.index}
			data-aos={props.index % 2 === 0 ? 'flip-right' : 'flip-left'}>
			<div className="card-body">
				<h4 className="card-title">{project.title} </h4>
				<p className="card-text"> {project.description}</p>
			</div>
			<div className="card-footer" onClick={props.handler}>
				More Details
			</div>
		</div>
	);
};
export default Project;
