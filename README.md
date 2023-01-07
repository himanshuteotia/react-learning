## React Learning

Here are a few things that might be useful to know about React:

- React is a JavaScript library for building user interfaces. It allows developers to create reusable components that can be rendered on the frontend, making it easier to build and maintain complex applications.
- React uses a virtual DOM (Document Object Model) to improve performance. When a component's state changes, React calculates the minimum number of DOM updates needed to reflect the changes, rather than updating the entire DOM tree.
- React follows a unidirectional data flow, also known as the "single source of truth" pattern. This means that data flows in a single direction, from the top-level component down to its children, and changes to the data are made using setters that are passed down from the parent.
- React provides several hooks that can be used in function components to manage state and perform other tasks. These include useState, useEffect, and useContext, among others.
- React follows a strict syntax known as JSX, which allows developers to write HTML-like code that is transformed into JavaScript at build time.
- React is often used in combination with other libraries or frameworks, such as Redux or React Router, to provide additional functionality.

# React Hooks

React provides a number of "hooks" that can be used in function components to perform state management and other tasks. Here is a list of the React function hooks that are currently available:

`useState`: This hook is used to add state to a function component. It returns an array with two elements: the current state value and a function to update it.

`useEffect`: This hook is used to perform side effects in function components. It takes a callback function that is called after the component is rendered, and an optional array of dependencies.

`useContext`: This hook is used to consume values from a context object. It takes the context object as an argument and returns the current context value for that context.

`useReducer`: This hook is used to perform reducer-like logic in function components. It takes a reducer function and an initial state, and returns the current state and a dispatch function.

`useCallback`: This hook is used to memoize a callback function. It takes a callback function and an optional array of dependencies, and returns a memoized version of the callback that only changes if one of the dependencies has changed.

`useMemo`: This hook is used to memoize a value. It takes a function that returns a value and an optional array of dependencies, and returns the memoized value.

`useRef`: This hook is used to create a mutable ref object. It takes an initial value and returns an object with a current property that can be updated.

`useImperativeHandle`: This hook is used to customize the behavior of a ref passed to a function component. It takes an object and a ref, and updates the ref with the provided object.

`useLayoutEffect`: This hook is similar to useEffect, but it is called synchronously after all DOM mutations. It should be used sparingly, as it can cause visual glitches.

# Hooks interview questions

- How does the useState hook work, and how is it different from using state in a class component?
- Can you give an example of how you might use the useEffect hook to perform an action after a component renders?
- How can the useContext hook be used to consume values from a context object?
- How does the useReducer hook allow you to perform reducer-like logic in a function component?
- How does the useMemo hook improve performance by avoiding unnecessary re-renders?
- How can the useRef hook be used to create a mutable ref object that persists across re-renders?
- Can you explain the difference between the useEffect and useLayoutEffect hooks? When might you choose to use one over the other?

# useEffect

`useEffect` is a hook in React that allows you to perform side effects in function components. It is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.

Here are some examples of things you can do with useEffect:

- Fetch data from an API and update the component's state
- Set up and clean up subscriptions (e.g., event listeners)
- Manage the component's DOM (e.g., focus an element, measure the size of an element)
`useEffect` takes a function as an argument and this function will be called after the component renders. The function can return a clean-up function that will be called before the next time the effect is run.
