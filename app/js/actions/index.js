//INCREMENT

export function incrementPost(index) {
	return {
		type : 'INCREMENT_LIKES',
		index
	}
}


//INCREMENT

export function incrementComment(index) {
	return {
		type : 'INCREMENT_COMMENTS',
		index
	}
}