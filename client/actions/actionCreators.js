// increment
// index tells which item needs to be incremented
// these functions are called 'actions' 
// they all need to be exported
// they will be 'dispatched'
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment,
	}
}
// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}