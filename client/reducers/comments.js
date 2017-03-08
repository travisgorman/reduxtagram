function comments(state = [], action) {
	console.log( 'comments did an action' )
	console.log('comments reducer state:', state )
	console.log('comments reducer action:', action )
	return state;
}

export default comments;