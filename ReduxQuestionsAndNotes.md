# Where are reducers combined into one object?
`rootReducer`

___

# How do you integrate your Redux store with your router?
the `Provider` tag exposes `store` to your application

```js
<Provider store={store}>
	{/*	Router inside the Provider*/}
</Provider>
```
___

# What do you export from `store.js`?
`store` (export default)
& `history`, after  you've redefined it to sync with store

___

# How do you make `history` sync with store
`syncHistoryWithStore` imported from `react-router-redux` takes care of this.
`syncHistoryWithStore` takes two arguments: `browserHistory`, and `store`, returns a history object where the two are in sync

___

# What 2 arguments does a reducer take?
`state`, and an `action`
if there is no state at first, set it to an empty array

```js
	function posts(state=[], action){
		//do an action 
	}
```

___

# How do you fire an action?
`store.dispatch()`
## What is dispatched?
an object with a `type` naming the action, and information 
