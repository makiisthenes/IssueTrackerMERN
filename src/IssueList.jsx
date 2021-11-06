/* globals React */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/preferstateless-function": "off" */
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import PropTypes from 'prop-types';
import graphQLFetch from './graphQLFetch.js';
import IssueFilter from './IssueFilter.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueTable from './IssueTable.jsx';
import IssueDetail from './IssueDetail.jsx';

/* Polyfill for older browser support */
import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';



const graph_api_url = "http://localhost:3000/graphql";


IssueAdd.propTypes = {
	createIssue: PropTypes.func.isRequired,
};


export default class IssueList extends React.Component{
	constructor(){
		super();
		this.state = {issues: []};
		{/* setTimeout(()=>{this.createIssue(sampleIssue)}, 2000); */}
		{/* setTimeout(()=>{this.createIssue(sampleIssue1)}, 3000); */}
		this.createIssue = this.createIssue.bind(this)
	}
	
	componentDidMount(){
		this.loadData();
	}
	
	componentDidUpdate(prevProps){
		const { location: { search: currentSearch }} = this.props;
		const { location: { search: prevSearch }} = prevProps;
		if (prevSearch !== currentSearch) this.loadData();
	}
	
	
	render(){
		const { match } = this.props
		return (
			<React.Fragment>
				<h2>
				<ReactTypingEffect
        		text={["Issue Tracker, made with MERN by Maki.    .    . "]}
      			/>
				</h2>
				{/* <h2>Issue Tracker by Maki</h2> */}
				<IssueFilter />
				<hr />
				<IssueTable issues={this.state.issues}/>
				<hr />
				<IssueAdd createIssue={this.createIssue}/> {/* The reasoning for the binding is discussed on Page 71. */}
				<hr />
				<Route path={`${match.path}/:id`} component={ IssueDetail } />
				
			</React.Fragment>
		)
	}
	
	
	
	async loadData(){
		const { location: {search }} = this.props;
		{/* Problem is I don't know how router passes props to this. Maybe because it is in the parent component of Component.jsx.*/}
		const params = new URLSearchParams(search)
		console.log(`Load data debug ${params}`)
		const vars = {}
		
		{/* Parsing params from url placing it into vars object */}
		
		// Parsing status
		if (params.get("status")) vars.status = params.get("status");
		
		// Parsing effortMin
		const effortMin = parseInt(params.get('effortMin'), 10);
		if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
		
		// Parsing effortMax
		const effortMax = parseInt(params.get('effortMax'), 10);
		if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
		
		// Parsing ownerSearch name.
		if (params.get("ownerSearch")) vars.ownerSearch = params.get("ownerSearch");
		console.log("effortMin", effortMin)
	  	console.log("effortMax", effortMax)

		
		const query = 
		`query issueList(
			$status: StatusType
			$ownerSearch: String
			$effortMin: Int
			$effortMax: Int
			
		){
		issueList(
			status:$status
			ownerSearch: $ownerSearch
			effortMin: $effortMin
			effortMax: $effortMax
			
		)
			{
				id 
				title
				status
				owner
				created
				effort
				due
			}}`;
		const data = await graphQLFetch(query, vars)
		if (data){
    		this.setState({ issues: data.issueList });
		}
	}
	
	async createIssue(issue){
		{/* issue.created = new Date();*/}
		{ /*const query = 
		`
			mutation{
					issueAdd(issue:{
							title: "${issue.title}"
							status:"${issue.status}"
							owner: "${issue.owner}"
							due: "${issue.due.toISOString()}"
						  }){
							id
						  }
						}
					`;
		*/}
		const query = `mutation issueAdd($issue: IssueInputs!) {issueAdd(issue: $issue) {id}}`;
		const data = await graphQLFetch(query, {issue})
		if (data){
			this.loadData();
		}
		
		{/* 
		const shallowCopyIssue = this.state.issues.slice();
		shallowCopyIssue.push(issue);
		console.log(shallowCopyIssue) 
		this.setState({issues: shallowCopyIssue});
		*/ }
	}
}