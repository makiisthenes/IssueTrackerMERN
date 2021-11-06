/* globals React */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/preferstateless-function": "off" */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import OwnerSearch from './OwnerSearch.jsx';

/* Polyfill for older browser support */
import URLSearchParams from 'url-search-params';



class IssueFilter extends React.Component{
	constructor( { location: { search }}){
		console.log("New Constructed IssueFilter Component.")
		super();
		const params = new URLSearchParams(search)
		this.state = {
			status: params.get("status") || "",
			ownerSearch: params.get("ownerSearch") || "",
			effortMin: params.get("effortMin") || "",
			effortMax: params.get("effortMax") || "",
			changed: false,
		};
		this.applyFilter = this.applyFilter.bind(this); // Binds to class rather than dom window object.
		this.onChangeStatus = this.onChangeStatus.bind(this); // Need to bind to this because current wrapped around withRouter. 
		this.showOriginalFilter = this.showOriginalFilter.bind(this);
		this.onChangeOwner = this.onChangeOwner.bind(this);
		this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
		this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
	};
	
	
	componentDidUpdate(prevProps){
		console.log("IssueFilter component has updated")
		const { location: { search: prevSearch } } = prevProps;
		const { location: { search } } = this.props;
		if (prevSearch !== search) {
		  this.showOriginalFilter();
    	}
	}
		
	showOriginalFilter() {
		const { location: { search } } = this.props;
		const params = new URLSearchParams(search);
		this.setState({
		  status: params.get('status') || '',
		  ownerSearch: params.get('ownerSearch') || '',
		  changed: false,
		});
  	}
	
	
	render(){
		console.log("Rendered IssueFilter component.")
		const { status, changed, effortMin, effortMax } = this.state;
		console.log("Status state:: ", status);
		return(
			<React.Fragment>
				{/*
				<Link to="/issues">All Issues</Link>
				{' | '}
				{/*<a href=""></a>}
				{/* <Link to="/issues?status=New">New Issues</Link> }
				<Link to={{pathname:"/issues", search:"?status=New"}}>New Issues</Link>
				{' | '}
				{/*<a href=""></a>}
				<Link to="/issues?status=Assigned">Assigned Issues</Link>
				{' | '}
				{/*<a href=""></a>}
				<Link to="/issues?status=Fixed">Fixed Issues</Link>
				{' | '}
				{/*<a href=""></a>}
				<Link to="/issues?status=Closed">Closed Issues</Link>
				*/}
				Status: {' '}
				<select value={ status } onChange={this.onChangeStatus}>
					<option value="">All</option>
					<option value="New">New</option>
					<option value="Assigned">Assigned</option>
					<option value="Fixed">Fixed</option>
					<option value="Closed">Closed</option>
				</select>
				{' '}
				<button type="button" onClick={this.applyFilter}>Apply</button>	
				{' '}
				<button type="button" onClick={this.showOriginalFilter} disabled={!changed}>Reset</button>
				<br/>
				{' '}
				<OwnerSearch onclick_func = {this.onChangeOwner}/>
				{/* <p>Just a quick recap, when we load this link via the Link component,<br /> which is Reacts version of anchor tag but better, we are sending a request to get component located in IssueList.jsx, due to the react router in Page, Contents and Component main jsx files. We have sorted all schema file and resolver functions, however the only problem right now, is that, the resolver function doesnt know how to obtain the url params to make it useful and filter out the items in the collection.<br />
				Before Page 243.</p> */}
				<br/>
				Effort between: {' '} <input placeholder="From" size={5} value={ effortMin } onChange={ this.onChangeEffortMin } />{' - '}
				<input placeholder="To" size={5} value={ effortMax } onChange={ this.onChangeEffortMax } />
			</React.Fragment>
		)
	}
	
	applyFilter(){
		// console.log("We do we need to bind this to the componentes constructor? Ans: Due to the fact when accessing this.state, we are actually accessing the doms event object, usually the window object.")
		const { status, ownerSearch, effortMin, effortMax } = this.state;
		const { history } = this.props;
		const params = new URLSearchParams();
		if (status) params.set('status', status);
		if (effortMin) params.set('effortMin', effortMin);
		if (effortMax) params.set('effortMax', effortMax);
		if (ownerSearch) params.set('ownerSearch', ownerSearch);
		
		const search = params.toString() ? `?${params.toString()}` : "";
		history.push({
			pathname: '/issues',
			// search: status ? `?status=${status}` : '',  // tertenary expression.
			search
		});
		//console.log(this.props)
		
	}
	
	onChangeStatus(e){
		this.setState( {status: e.target.value,
					   changed: true})
		console.log(`IssueFilter.jsx in onChangeStatus -> ${status}`);
	}
	
	onChangeOwner(e){
		// console.log("Changed owner select.")
		this.setState( {
			ownerSearch: e.target.value,
			changed: true
		})
		
	}
	
	onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: e.target.value, changed: true });
    }
  }

  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: e.target.value, changed: true });
    }
  }
	
	
};




export default withRouter(IssueFilter);  // withRouter used, so react gives this component access to history, location and match objects via component props.