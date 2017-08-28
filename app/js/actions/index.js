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

export function addComment(postId, author, comment) {
	return {
		type : 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

export function removeComment(postId, i) {
	return {
		type : 'REMOVE_COMMENT',
		postId,
		i
	}
}