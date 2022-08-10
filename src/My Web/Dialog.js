import React from 'react';
import styles from './css/Dialog.module.css';
import { GrFormClose } from 'react-icons/gr';

const Dialog = (props) => {
	const {
		description: desc,
		title,
		live_link,
		source_code_link: source_link,
		features,
		tech_stuff,
	} = props.data;

	return (
		<div className={styles.dialog}>
			<div className={styles.dialog_header}>
				<span onClick={props.closeHandler} className={styles.dialog_close}>
					<GrFormClose />
				</span>
				<div className={styles.dialog_title}> {title}</div>
			</div>
			<div className={styles.dialog_body}>
				<p className={styles.dialog_text}>{desc}</p>
				<ul>
					<li>
						<span className={styles.heading}>Live URL : </span>
						<a className={styles.a} href={live_link} target="_black">
							{live_link}
						</a>
					</li>
					<li>
						<span className={styles.heading}>Source Code Link : </span>
						<a className={styles.a} href={source_link} target="_black">
							{source_link}
						</a>
					</li>
				</ul>
				{features.length !== 0 && (
					<ul>
						<span className={styles.heading}>Features</span>
						{features.map((feature, index) => {
							return <li key={index}>{feature}</li>;
						})}
					</ul>
				)}
				<br />
				{tech_stuff.length !== 0 && (
					<ul>
						<span className={styles.heading}>Tech Stuff : </span>
						{tech_stuff.map((tech, index) => {
							return <li key={index}>{tech}</li>;
						})}
					</ul>
				)}
			</div>
			<div className={styles.dialog_footer}>Happy Coding (^ . ^)</div>
		</div>
	);
};

export default Dialog;
