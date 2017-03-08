import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
// import the root reducer
import rootReducer from './reducers/index'
// import default data
import comments from './data/comments'
import posts from './data/posts'

//create an object for the default data
const defaultState = {
	posts,
	comments,
}

// create the store with createStore from 'redux'
// createStore takes the rootReducer and the default state object
const store = createStore(rootReducer, defaultState)

// create and export history with syncHistoryWithStore from 'react-router-redux'
// syncHistoryWithStore takes browserHistory from 'react-router' and the store
export const history = syncHistoryWithStore(browserHistory, store)

export default store;