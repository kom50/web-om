import React, { useState, useEffect } from 'react';
import myPic from './images/om.jpg';
import Dialog from './Dialog';
import './css/style.css';
import './css/Project-style.css';

import { projectDetails } from './projectData.js';
import BackButton from './BackButton';

const Project = () => {
	const [isDialogBoxOpen, setDialogBoxOpen] = useState(false);
	const [data, setData] = useState(projectDetails[0]);
	const [arr, setArray] = useState(['HTML', 'React Js', 'Java']);

	//
	const handleClick = (event) => {
		console.log('Click event');
		setDialogBoxOpen(true);
		setData(projectDetails[event.target.parentElement.id]);
	};

	const scrollUpdate = () => {
		let header = document.querySelector('.header');
		if (document.documentElement.scrollTop > 20) {
			header.style.cssText = 'box-shadow: 0 4px 30px rgb(76, 75, 75);';
		} else {
			document.querySelector('.header').style.cssText = 'box-shadow: 0';
			header.style.cssText = 'box-shadow: 0';
		}
		// for header My Project Text add on header panel or remove
		let ele = document.querySelector('.std');
		let langsPanel = document.querySelector('.langs');

		if (document.documentElement.scrollTop > 192) {
			ele.style.cssText = 'top : 25px';
			header.appendChild(ele);
			langsPanel.style.cssText = 'top : 160px';
		} else {
			ele.style.cssText = 'top : 105px';
			langsPanel.style.cssText = 'top : 120px';
			langsPanel.before(ele);
		}
		// console.log(document.documentElement.scrollTop);
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
						console.log('close', data);
						setDialogBoxOpen(false);
					}}
				/>
			)}
			<div className="container-fluid project ">
				<div className="header">
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
					<div
						onClick={chooseHandle}
						id="HTML"
						className="items active">
						HTML
					</div>
					<div
						onClick={chooseHandle}
						id="React Js"
						className="items active">
						React Js
					</div>
					<div
						onClick={chooseHandle}
						id="Java"
						className="items active">
						Java
					</div>
				</div>
				<div className="container1 ">
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
		<div className="card" id={props.index}>
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

/* 
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div
							className="card-footer bg-info"
							onClick={handleClick}>
							See More Details
						</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div
							className="card-footer bg-info"
							onClick={handleClick}>
							See More Details
						</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div className="card-footer">See More Defails</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div className="card-footer">See More Defails</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div className="card-footer">See More Defails</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div className="card-footer">See More Defails</div>
					</div>
					<div className="card">
						<div className="card-header">Snake Game</div>
						<div className="card-body">
							<div className="card-title">Snake Game </div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
								<li>Item 4</li>
							</ul>
						</div>
						<div className="card-footer">See More Defails</div>
					</div> */
