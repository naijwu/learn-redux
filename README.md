### Finally learn more about Redux (in React)

Because

STORE -> The global state
ACTION -> Schema of potential behavior with/manipulation of store (what action you can do with the store data e.g. "Increment" to increment)
REDUCER -> Describes consequences of specific ACTION on the store; checks what action is performed, and dependant on which action performed, modify store
DISPATCH -> 'Dispatch' the action to the reducer -- perform the action of a specific ACTION

Sequence: DISPATCH -> (specific) ACTION -> REDUCER (perform action)

### Relevant files/folders:

/index.js -- create store and Provide it to app
/actions
/actions/index.js -- export different actions that can be dispatched
/reducers
/reducer/counter.js -- counter reducer: INCREMENT(NUMBER), DECREMENT
/reducer/isLogged.js -- isLogged reducer: SIGN_IN, SIGN_OUT
/reducer/index.js -- combines both reducers using combineReducers from 'redux'
/app.js -- use store


### Some vanilla implementation:

```
import { createStore } from 'redux';

// ACTION (INCREMENT, DECREMENT) = function that returns an object
const increment = () => {
  return {
    type: 'INCREMENT', // type, name; tomato, tomato
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT', // type, name; tomato, tomato
  }
}

// REDUCER = function that returns an object
const counter = (state = 0, action) => {
  switch(action.type) { // depending on action type, perform an action
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

// Implement store
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
```
