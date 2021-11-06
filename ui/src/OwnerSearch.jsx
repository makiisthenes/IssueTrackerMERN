import React from 'react';
import graphQLFetch from "./graphQLFetch.js";
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';


class OwnerSearch extends React.Component{
	constructor(){
		super();
		this.state = { ownerList : [] }
		this.loadData = this.loadData.bind(this);
	}
	
	componentDidMount(){
		// console.log("Owner Search component did mount.")
		this.loadData();
	}
	
	
	async loadData(){
		console.log("Loading owner data")
		const query = "query{ ownerList }";
		const vars = {};
		const data = await graphQLFetch(query, vars);
		if (data){
			this.setState({ownerList: data.ownerList})
		}else{
			this.setState({ownerList: []})
		}
		
		
	}
	
	componentDidUpdate(){
		/* Don't want to do this due to fact that, too many requests will be made to server... */
		// this.loadData();
		
	}
	
	render(){
		// console.log("Owner Search component render.")
		const { ownerList } = this.state;
		// console.log("OwnerList contents:: ", ownerList);
		const owner_options = ownerList.map((owner, index) => <option key={index} value={owner}>{owner}</option>);
		// console.log("Owner Options: ", owner_options)
		const params = new URLSearchParams();
		;
											
											
		return(
			<React.Fragment>
				<label>Owner of Issue: </label>
				<input placeholder={params.get("ownerSearch") ? params.get("ownerSearch") : "Select Owner Name" } onChange={this.props.onclick_func} onFocus={this.loadData} type="text" className="" list="owners_data"/>
				<datalist id="owners_data">
					{ owner_options }
				</datalist>
			</React.Fragment>
		)
	}
}

export default withRouter(OwnerSearch); // Allows ownersearch to have history, location, match objects.