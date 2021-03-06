import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
	render(){
		return(
			<div>
				<h1>All Posts</h1>
				{this.props.posts.map((post) => (
					<div key={post.id}>
					<div>
						{post.editing ? <EditComponent post={post} key={post.id} /> : <Post key={post.id} postt={post} />}
						<button onClick={() => this.props.dispatch({type:'EDIT_POST', id:post.id})}>Edit</button>
					</div>
					<button onClick={() => this.props.dispatch({type:'EDIT_POST', id:post.id})}>Edit</button>
					</div>
				))}


			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps)(AllPost);