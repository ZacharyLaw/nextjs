"use client"; 
import { useEffect, useState } from 'react';
interface DemoProps {}
export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('The count is:', count);
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]); 
  return (
    <html><body>
    <div>
      <h1>Count Update: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div></body></html>
  );
}