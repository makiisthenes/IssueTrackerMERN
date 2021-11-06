import React from 'react';
import graphQLFetch from './graphQLFetch.js';


export default class IssueDetail extends React.Component{
	constructor(){
		super();
		this.state = { issue : {} }
	}
	
	componentDidMount(){
		this.loadData();
		// This will load when we mount the component, when route calls on this component, initiates the object.
	}
	
	componentDidUpdate(prevProps){
		// componentDidUpdate does have a param given from lifecycle function, which is prevProps.
		const { match : {params: { id }}} = this.props;
		const { match : {params: {id: prevID}}} = prevProps;
		if (prevID !== id){
			this.loadData();
		}
	}
	
	
	async loadData(){
		const { match : {params: {id}}} = this.props;
		const query = `query issue($id: Int!){ issue(id: $id){ id title description }}`
		const data = await graphQLFetch(query, {id})
		if (data){
			this.setState({issue: data.issue})
		}else{
			this.setState({issue: {}})
		}
	}
	
	
	render(){
		const {issue : {title, description}} = this.state
		return(
			<React.Fragment>
				<h2>{title}</h2>
				<pre>{description}</pre>
			</React.Fragment>
		)
	}
	
}