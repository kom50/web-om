import React from 'react';
import { Link } from 'react-router-dom';
// import { RiArrowGoBackFill } from 'react-icons/ri';
import { MdArrowBack } from 'react-icons/md';

import { createUseStyles } from 'react-jss';
// hooks react jss
const useStyles = createUseStyles({
	back_button: {
		color: 'white',
		fontSize: '35px',
		transition: 'all 0.5s linear',
		'&:hover': {
			color: 'red',
		},
	},
});
const BackButton = () => {
	const styles = useStyles();
	return (
		<div className="back-btn">
			<Link to="/">
				<MdArrowBack className={styles.back_button} />
			</Link>
		</div>
	);
};

export default BackButton;
