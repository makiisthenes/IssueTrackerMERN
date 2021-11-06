/* globals React */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/preferstateless-function": "off" */
import React from 'react';


export default class IssueAdd extends React.Component{
	constructor(){
		super();
		{/*setTimeout(()=>{
			this.props.createIssue(sampleIssue);
		}, 2000)*/}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render(){
		return(
			<form name="issueAdd" onSubmit={this.handleSubmit}>
				<input type="text" name="title" placeholder="Title" required></input>
				<input type="text" name="owner" placeholder="Owner"></input>
				<select type="text" name="status" placeholder="Status">
					<option value="New">New</option>
					<option value="Assigned">Assigned</option>
					<option value="Fixed">Fixed</option>
					<option value="Closed">Closed</option>
				</select><br />
				<textarea placeholder="Enter description"></textarea><br/>
				<button>Add New Issue</button>
			
			</form>
		)
	}
	handleSubmit(e){
		{/* Handle sumbit of form send. */}
		e.preventDefault();
		const form = document.forms.issueAdd;
		const issue = {
			owner: form.owner.value.replace(' ', ''),
			title: form.title.value,
			due: new Date(new Date().getTime() + 1000*60*30*24*10),
			status: (form.status.value == "" || form.status.value == null) ? "New"  : form.status.value,
			description: form.getElementsByTagName("textarea")[0].value,
		};
		console.log(`form status value: ${JSON.stringify(issue)}`)
		this.props.createIssue(issue);
		form.reset();
	}
	
};