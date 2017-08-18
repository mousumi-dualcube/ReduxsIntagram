import React from 'react'
import { Link } from 'react-router';

class App extends React.Component{
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

export default App;