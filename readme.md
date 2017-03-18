# Learn Redux

Redux is a predictable state container for JavaScript apps. Use it with React or any view library.

* The whole state of your app is stored in an object tree inside a single **store**.
* The only way to change the state tree is to dispatch an **action**, an object describing what happened.
	- instead of mutating the state directly, you specify the mutations with plain objects called actions.
* To specify how the actions transform the state tree, you write pure **reducers**
	- special function that decides how every action transforms the entire application's state

## Store
## Actions
## Reducers

1. Setting up Webpack Enviornment


##2. App Layout & Component Setup


##3. Creating `Single` & `PhotoGrid` components
* import `Link` from `react-router` (for the `h1` header)
* `Main` is the default app component with 2 children
	- `PhotoGrid` an `IndexRoute` that displays the grid of photos
	- `Single` takes a `postId` and displays that photo's `Single` component

* [React.cloneElement](https://facebook.github.io/react/docs/react-api.html)

##4. Setting up React Router
* import `render` from `react-dom` 
* import `Router`, `Route`, `IndexRoute`, & `browserHistory` from `react-router`
* define the `router` - a JSX element to be rendered to the DOM
* `Router` takes a history object
* `Route` takes a `path` set to a `URL` string value
* `IndexRoute` takes a component to serve as the index route



##5. Creating Redux Store
* One object with all of the data

####`createStore`

* import `createStore` and `compose` from `redux`
* `createStore` is the function that creates a redux store
* `createStore` takes 2 arguments:
	- `rootReducer` imported from `./reducers/index` 
	- `defaultState` defined above, an object holding the default state. In this case, we have 2 pieces of state: `posts`, and `comments`. We are importing some dummy data.

##6. All about Redux Actions
* **actions** are like JavaScript events
* **actions** return objects with 2 important pieces of information
	- the `type` (name of action)
	- and a payload of information that is acted upon

##7. All about Redux Reducers
* **reducers** are what updates state (with the action)
* **reducers** take 2 arguments:
	- the **action**
	- and current copy of state
* **returns** an updated copy of state

##8. Integrating our store with React Router
* The `Provider` gives it's children access to `store`
* Wrap the entire `router` in the `Provider` tag to expose the `store` 
* Swap `browserHistory` in `router` with our `history` imported from `store`

## 9. Understanding the reducer's job
* only components can be hot reloaded
* `Provider.store.dispatch` is the method that runs actions
* every reducer runs when an action is dispatched
* use switch statements to determine what affects state

##10. Accessing dispatch and state with redux


##11. Displaying Redux state inside our components
Pull state into a component at any level we wish. Create a Photo component that maps the `posts` in state, and renders an item displaying it's caption, image, and number of likes

* spread operator to take all details in the post object


* Updating State with Reducers

We use pure functions - do not mutate state. Instead, we always return new state
Once the action has been dispatched, we can use reducers to update our state.

Increment the likes on click

run increment action

		onClick={this.props.increment.bind(null, i)}

switch statement in `posts` reducer



* Displaying the Single Photo Component


* Displaying and Adding Comments


* Updating comment state in our store


* Redux Reducer Composition

`Reducer Composition`: this is where you use a switch statement to determine which piece of the state to update

The reducer is a pure function that takes the previous state and an action, and returns the next state.

```js
(previousState, action) => newState
```

we never write directly to state or its fields, and instead we return new objects.


* Error Tracking and Insights with Sentry


* Hot reloading Redux Reducers with Webpack


* Redux Dev Tools

### sweep
sweep removes disabled actions from your log as if they never happened

### reset
resets all actions back to initial state

### revert
revert anything since your last commit

### commit
commit log to a single state tree object

* Wrap up and Next Steps

thar she blows

___

1. NodeJS
2. React Dev Tools
3. Redux Dev tools
4. Terminal
