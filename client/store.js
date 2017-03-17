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

const enhancers = compose(  
  window.devToolsExtension ? window.devToolsExtension() :
  f => f
)


// create the store with createStore from 'redux'
// createStore takes the rootReducer and the default state object

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());﻿

// create and export history with syncHistoryWithStore from 'react-router-redux'
// syncHistoryWithStore takes browserHistory from 'react-router' and the store
export const history = syncHistoryWithStore(browserHistory, store)

// re-compile the root reducer on hot reload

// accept hot re-load
// re-require reducers

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;