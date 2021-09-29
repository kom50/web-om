import React from 'react';
import styles from './css/Dialog.module.css';
// import './css/Dialog.css';

const Dialog = (props) => {
	const {
		description: desc,
		title,
		live_link,
		source_code_link: source_link,
		features,
	} = props.data;

	return (
		<div className={styles.dialog}>
			<span onClick={props.closeHandler} className={styles.dialog_close}>
				&times;{' '}
			</span>
			<div className={styles.dialog_header}> {title}</div>
			<div className={styles.dialog_body}>
				<p className={styles.dialog_text}>{desc}</p>
				<ul>
					<li>
						<span className={styles.heading}>Live URL : </span>
						<a
							className={styles.a}
							href={live_link}
							target="_black">
							{live_link}
						</a>
					</li>
					<li>
						<span className={styles.heading}>
							Source Code Link :{' '}
						</span>
						<a
							className={styles.a}
							href={source_link}
							target="_black">
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
			</div>
			<div className={styles.dialog_footer}>Happy Coding (^ . ^)</div>
		</div>
		// <div className="card">
		// 	<div className="card-header"></div>
		// 	<div className="card-body"></div>da
		// 	<div className="card-header"></div>
		// </div>
	);
};

export default Dialog;
