import React from 'react';
import { withRouter } from 'react-router-dom';


class IssueEdit extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return `Placeholder for edit page ${this.props.id}`;
	}
}

{/*

import React from 'react';

export default class IssueEdit extends React.Component{-
	constructor({ match }){
		super();
		this.match = match
	}
	render(){
		const { id } = this.match.params;
		const { location: { search }} = this.props;
		console.log(this.props)
		return(
			<h2>{`This is a placeholder for issue edit ${id}`}</h2>
		);
	}
}
*/}

// export default withRouter(IssueEdit);
export default IssueEdit;