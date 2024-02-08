'use client'
import { useLocalStorage } from "./useLocalStorage.js";
export default function Demo() {
  const [count, setCount] = useLocalStorage("count", "");

  return (
    <html lang="en"> 
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