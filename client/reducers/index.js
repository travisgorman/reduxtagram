// a function that takes an object of reducers and combines them
import { combineReducers } from 'redux';
// adds a reducer to track routing page changes
import { routerReducer } from 'react-router-redux';
// our `posts` and `comments` reducers
import posts from './posts';
import comments from './comments';

// `rootReducer` combines the reducers we imported (posts, & comments)
//  adds a reducer for routing, using `routerReducer` from `react-router-redux`

const rootReducer = combineReducers({
	posts, 
	comments, 
	routing: routerReducer
})

// the purpose of `reducers/index.js` is to export a rootReducer
export default rootReducer;
