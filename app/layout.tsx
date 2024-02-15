'use client'
import { useLocalStorage } from "./useLocalStorage.js";
import "./globals.css";
export default function Demo() {
  const [count, setCount] = useLocalStorage("count", 0);
  return (
    <html lang="en"> 
      <body>
        <div>
          <h1>Seperate branch <br></br> Count Update: </h1>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <iframe src="https://web.chelaile.net.cn/customer_ch5/?1=2&src=webapp_zhongshan&sessionId=CB9EF8D44B34EF63E1FBD2F362776C1C#!/linedetail/0760-018-0"
        ></iframe>
      </body>
    </html>
  );
}
/**{count} */