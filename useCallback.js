import { useCallback } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  // only re-create the callback if value changes
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, [value]);

  return <input type="text" value={value} onChange={handleChange} />;
}

/**

This component renders an input field that allows the user to enter text. 
The handleChange function is used as the onChange event handler for the input field, and is called every time the value of the input field changes.

The useCallback hook is used to memoize the handleChange function, so that it is only re-created if the value state variable changes. 
This can be useful in preventing unnecessary re-renders of the component, as the handleChange function will only be recreated if its dependencies (in this case, the value state variable) change.

*/
