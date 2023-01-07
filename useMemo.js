import { useMemo } from 'react';

function MyComponent() {
  const [value, setValue] = useState(0);

  // only re-calculate the result if value changes
  const result = useMemo(() => {
    return expensiveCalculation(value);
  }, [value]);

  return <div>Result: {result}</div>;
}

function expensiveCalculation(value) {
  // expensive calculation that returns a result based on the value argument
}


/**

This component renders a value and a result that is calculated using the expensiveCalculation function. 
The useMemo hook is used to memoize the result, so that it is only re-calculated if the value state variable changes. 
This can improve performance by avoiding unnecessary re-calculations of the result.

The useMemo hook takes a function that returns a value as its first argument, and an array of dependencies as its second argument. 
The function will be re-executed only if one of the dependencies changes.

*/
