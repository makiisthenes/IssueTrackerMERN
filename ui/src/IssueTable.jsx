/* globals React */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/preferstateless-function": "off" */
import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Link, withRouter } from 'react-router-dom';


const IssueRow = withRouter( ({issue, rowStyle, location: { search }}) => {
			/* const issue = props.issue; */
			/* const rowStyle = props.rowStyle; */
			// console.log("search object for issue row")
			// console.log(search)
			const selectLocation = { pathname: `/issues/${issue.id}`, search };
			return(
					<tr>
						<td style={rowStyle}>{issue.id}</td>
						<td style={rowStyle}>{issue.status}</td> 
						<td style={rowStyle}>{issue.owner}</td>
						<td style={rowStyle}>{<ReactTimeAgo date={issue.created} locale="en" timeStyle="twitter" />}</td>
						<td style={rowStyle}>{issue.effort}</td>
						<td style={rowStyle}>{issue.due ? issue.due.toDateString() : ""}</td>
						<td style={rowStyle}>{issue.title}</td>
						<td style={rowStyle}>
							<Link to={`/edit/${issue.id}`}>Edit</Link>
							{' | '}
							<Link to={selectLocation}>Read More</Link>
						</td>
					</tr>
				)
			})

export default function IssueTable(props){
	const rowStyle =  {border: "1px solid silver", padding:4};
	{/*const issueRows = this.issues.map(issue => <IssueRow rowStyle={rowStyle} issue={issue}>{issue.title}</IssueRow>)*/}
	const issueRows = props.issues.map(issue => <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue}></IssueRow>)
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
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{/* 
					<IssueRow rowStyle={rowStyle} issue={issue}>This issue is really recent, I need to finish my work set today.</IssueRow>
					<IssueRow rowStyle={rowStyle} issue={issue}>This is an issue from this morning, I need to complete the setup work.</IssueRow>
					*/}
					{issueRows}
				</tbody>
			</table>
		)
}
