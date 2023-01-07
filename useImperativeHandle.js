import { useRef, useImperativeHandle } from 'react';

function MyComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input type="text" ref={inputRef} />;
}

// forward the ref to the child component
const ForwardedMyComponent = forwardRef(MyComponent);

function ParentComponent() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <ForwardedMyComponent ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}



/**

This code defines a MyComponent function component that renders an input field, and a ParentComponent that renders the MyComponent and a button. The ParentComponent passes a ref object to the MyComponent using the forwardRef higher-order component.

The MyComponent uses the useImperativeHandle hook to expose a focus method on the ref object that can be called from the ParentComponent. The useImperativeHandle hook takes the ref object and

*/
