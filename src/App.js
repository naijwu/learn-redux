import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions'

function App() {

  // ACCESSING STORES
  const counter = useSelector(state => state.counter); // state has access to entire Redux State
  const isLogged = useSelector(state => state.logged);

  const dispatch = useDispatch();

  const toggleMembership = () => {
    if(isLogged) {
      dispatch(signOut());
    } else {
      dispatch(signIn());
    }
  }

  return (  
    <div className="App">
      <h1>learn-redux</h1>
      <h2>Counter: {counter}</h2>

      {/* Dispatch increment action when clicked */}
      <button onClick={e=>dispatch(increment(5))} >+</button> 
      <button onClick={e=>dispatch(decrement())} >-</button> 
      
      <button onClick={e=>toggleMembership()} >
        {isLogged ? 'Log Out' : 'Log In'}
      </button> 
      
      {(isLogged) && (
        <h2>Logged In Eyes Only</h2>
      )}
    </div>
  );
}

export default App;
