import { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}


/**

This code creates a context object using the createContext function, and defines a component that consumes the context value using the useContext hook. 
The useContext hook takes the context object as an argument and returns the current context value.

To provide the context value to the component, the context object can be wrapped around the component tree using the Provider component:

<MyContext.Provider value="Hello World">
  <MyComponent />
</MyContext.Provider>

The Provider component takes a value prop that specifies the context value. 
Any components that are descendants of the Provider will be able to access the context value using the useContext hook.

*/

