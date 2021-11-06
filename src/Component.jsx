import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import Page from './Page.jsx';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { BrowserRouter as Router } from 'react-router-dom'; 
{/* Next time use BrowserRouter with link component and without hash. */}





TimeAgo.addDefaultLocale(en)  
//This is giving me an error, because it is called multiple times when rerendering, HMR, I do need to put it in a class where it is only instantiated once only.
TimeAgo.addLocale(en)


//  What Im actually going to render from the classes inheriting from React Components.
var element = (
	<Router>
		<Page />
	</Router>
);
ReactDOM.render(element, document.getElementById("root1")); 
if (module.hot) {
  module.hot.accept();
}


























































{/* Ignore all of this below. */ }


{/* import Typing from 'react-typing-animation';*/}
{/*
const initialIssues = [
	{
		id:1, status:'New', owner:'Maki', effort:5, created: new Date('2021-09-03'), due: undefined, title:"Homework for Operating System worksheet on Qmplus."
	},
	{
		id:2, status:'New', owner:'Maki', effort:3, created: new Date('2021-08-30'), due: new Date('2021-09-06'), title:"Prepare speech letter for celebration ceremony next week."
	}
];
*/}
const sampleIssue = {
	status:"New",
	owner: "Pieta",
	effort: 4,
	title: "Completion date should be optional"
};
const sampleIssue1 = {
	status:"New",
	owner: "Maki1",
	effort: 4,
	title: "Testing out timing of functions in render func"
};
// const issues = [];
class MyComponent extends React.Component{
	render(){
		const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
		const helloContinents = Array.from(continents, c => `Hello ${c}!`); 
		const message = helloContinents.join(" ");
		
		return (
			<div id="">{message}<h2>Welcome to React using Classes.</h2></div>	
		)
	}
}
{
	/*
	render(){
		const rowStyle = this.props.rowStyle;
		const issue = this.props.issue;
		return(
			<tr>
				<td style={rowStyle}>{issue.id}</td>
				<td style={rowStyle}>{issue.status}</td> 
				<td style={rowStyle}>{issue.owner}</td>
				<td style={rowStyle}>{issue.created.toDateString()}</td>
				<td style={rowStyle}>{issue.effort}</td>
				<td style={rowStyle}>{issue.due ? issue.due.toDateString() : 'No Due Date'}</td>
				<td style={rowStyle}>{issue.title}</td>
			</tr>
		)
	}
};
	*/
}
{ /*
class IssueTable extends React.Component{
	render(){
		const rowStyle = {border: "1px solid silver", padding:4};
		const issueRows = this.props.issues.map(issue => <IssueRow rowStyle={rowStyle} issue={issue}></IssueRow>)
		return(
			<table style={{border: "solid 2.5px black"}}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Owner</th>
						<th>Created</th>
						<th>Effort</th>
						<th>Due Date</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{issueRows}
				</tbody>
			</table>
		)
	}
};
*/ }