import React from 'react'
import { Link } from 'react-router'

class PhotoGrid extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		return (
			 <div className="photo-grid">
        		{
        			this.props.posts.map((post, i) => {
        				return (
        					<div  key={i} i={i} className="grid-photo-wrap">
				          		<Link to={`/single/${post.code}`}>
				            		<img src={post.display_src} alt={post.caption} className="grid-photo" />
				          		</Link>
				          	</div>
				        )
        			})
        		}
      		</div>
		);
	}
}

export default PhotoGrid;