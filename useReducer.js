import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

/**
This code defines a reducer function and an initial state, and uses the `useReducer` hook to manage state in the component. 
The `useReducer` hook takes the reducer function and the initial state as arguments, and returns an array with the current state and a dispatch function.

The component renders a count and two buttons that increment or decrement the count when clicked. 
The dispatch function is called with an action object that specifies the type of action to perform (e.g., 'increment' or 'decrement'). 
The reducer function receives the current state and the action object


*/
