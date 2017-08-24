import React from 'react'
import Comment from './comment'
class Single extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code == postId)
		const post = this.props.posts[i]
		const postComments = this.props.comments[postId] || []
		return (
			<div className="single_photo">
				<div>
					<img src={post.display_src} alt={post.caption} className="grid-photo" />
				</div>
				<div>
					<p>{post.caption}</p>
				</div>
				<div>{post.likes} likes</div>
				<div>
					<Comment postComments={postComments} {...this.props} />
				</div>	
			</div>
		);
	}
}

export default Single;