import React from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Main extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		return (
			<div>
				<h1>
	          		<Link to="/">Reduxstagram</Link>
	        	</h1>
		        <h1>
		          <Link to="/single">Single</Link>
		        </h1>
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		posts : state.posts,
		comments : state.comments
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App;