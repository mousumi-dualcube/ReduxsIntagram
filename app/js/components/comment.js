import React from 'react'

class Comment extends React.Component{

	constructor(props){
		super(props);		
	}

	handleSubmit = (e) => {
		e.preventDefault();
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
		          <input type="text" ref="comment" placeholder="comment"/>
		          <input type="submit" hidden />
		        </form>
		    </div>		
		)
	}
}

export default Comment;