// create a reducer for every single piece of state

// a reducer takes 2 things
// the action (info about what happened)
// copy of current state
// returns updated copy of the store

function comments(state = [], action) {
	console.log( state, action )
	return state;
}

export default comments;