import React from 'react';
import NavBar from './NavBar.jsx';
import Contents from './Contents.jsx';


export default function Page(){
	return(
		<React.Fragment>
			<NavBar />
			<Contents />
		</React.Fragment>
	);
}