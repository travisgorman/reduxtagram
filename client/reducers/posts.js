function posts(state = [], action) 	{
	console.log( 'posts did an action' )
	console.log('posts reducer state:', state )
	console.log('posts reducer action:', action )
	return state;
}

export default posts;