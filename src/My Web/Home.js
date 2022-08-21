import React, { useEffect, useState } from 'react';
import myPic from './images/om.jpg';
import { Link } from 'react-router-dom';
import './css/pwaInstall.css'

const Home = () => {
	const [isShow, setShow] = useState(false)
	const [installEvent, setInstallEvent] = useState({})

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault()
			console.log('object', event);
			setInstallEvent(event)
			setShow(true)
		})
	}, [])

	function dismissPrompt() {
		setShow(false)
	}
	function installHandler() {
		installEvent.prompt();
		installEvent.userChoice.then((choice) => {
			dismissPrompt()
			if (choice.outcome === 'accepted') {
				console.log('App installing')
			} else {
				console.log('App not install')
			}
		})


	}
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
			{isShow && <div className="install">
				<button onClick={dismissPrompt}>Not now</button>
				<button onClick={installHandler}>Install App</button>
			</div>}
		</div>
	);
};

export default Home;
