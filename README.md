# react-learning

React provides a number of "hooks" that can be used in function components to perform state management and other tasks. Here is a list of the React function hooks that are currently available:

useState: This hook is used to add state to a function component. It returns an array with two elements: the current state value and a function to update it.
useEffect: This hook is used to perform side effects in function components. It takes a callback function that is called after the component is rendered, and an optional array of dependencies.
useContext: This hook is used to consume values from a context object. It takes the context object as an argument and returns the current context value for that context.
useReducer: This hook is used to perform reducer-like logic in function components. It takes a reducer function and an initial state, and returns the current state and a dispatch function.
useCallback: This hook is used to memoize a callback function. It takes a callback function and an optional array of dependencies, and returns a memoized version of the callback that only changes if one of the dependencies has changed.
useMemo: This hook is used to memoize a value. It takes a function that returns a value and an optional array of dependencies, and returns the memoized value.
useRef: This hook is used to create a mutable ref object. It takes an initial value and returns an object with a current property that can be updated.
useImperativeHandle: This hook is used to customize the behavior of a ref passed to a function component. It takes an object and a ref, and updates the ref with the provided object.
useLayoutEffect: This hook is similar to useEffect, but it is called synchronously after all DOM mutations. It should be used sparingly, as it can cause visual glitches.
