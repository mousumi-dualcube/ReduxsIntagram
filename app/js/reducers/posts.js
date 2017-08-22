function post(state=[], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log('INCREMENT_LIKES', state, action)
			return state
		default :
			return state
	}
}

export default post;