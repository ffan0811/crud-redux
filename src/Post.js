import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {
	render(){
		return(
			<div>
				<h2>{this.props.postt.title}</h2>
				<p>{this.props.postt.message}</p>
				
				<button onClick={() => this.props.dispatch({type:'DELETE_POST', id:this.props.postt.id})}>Delete</button>
			</div>
		)
	}
}

export default connect()(Post);