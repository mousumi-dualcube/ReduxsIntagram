import React from 'react'

class Comment extends React.Component{

	constructor(props){
		super(props);		
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const post_id = this.props.params
		const author = this.refs.author.value
		const comment = this.refs.comment.value
		this.props.addComment(post_id, author, comment)
		this.refs.commentForm.reset()
	}

	render() {
		return (
			<div className="comments">
		        {this.props.postComments.map((comment, i) => {
		        	return (
						<div className="comment" key={i}>
							<p>
							  <strong>{comment.user}</strong>
							  {comment.text}
							</p>
						</div>
	    			)
		        })}
		        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
		          <input type="text" ref="author" placeholder="author"/>
		          &nbsp;&nbsp;&nbsp;
		          <input type="text" ref="comment" placeholder="comment"/>
		          &nbsp;&nbsp;&nbsp;
		          <input type="submit" value="submit" />
		        </form>
		    </div>		
		)
	}
}

export default Comment;