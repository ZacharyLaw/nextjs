"use client";
import { useEffect, useState } from 'react';

interface DemoProps {}

export default function Demo({}: DemoProps) {

  const [count, setCount] = useState(() => {
      const storedCount = localStorage.getItem('count');

    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    // Update the local storage value whenever count changes
  if (typeof window === 'undefined') {
    localStorage.setItem('count', count.toString());

  }
  }, [count]);

  // Check if the window object is available
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <html>
      <body>
        <div>
          <h1>Count Update: {count}</h1>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </body>
    </html>
  );
}