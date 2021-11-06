import React from 'react';
import { Link } from 'react-router-dom';
// import { RiArrowGoBackFill } from 'react-icons/ri';
import { IoReturnUpBack } from 'react-icons/io5';
// import { MdArrowBack } from 'react-icons/md';

import { createUseStyles } from 'react-jss';
// hooks react jss
const useStyles = createUseStyles({
	back_button: {
		color: 'white',
		fontSize: '35px',
		marginLeft: '10px',
		transition: 'all 0.1s linear',
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
				<IoReturnUpBack className={styles.back_button} />
			</Link>
		</div>
	);
};

export default BackButton;
