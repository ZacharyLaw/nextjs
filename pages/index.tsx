'use client'
import styles from "../styles/Home.module.css";
import { useLocalStorage } from "../components/useLocalStorage.js";
import $ from 'jquery';
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    $(document).ready(function() {
      console.log("jQuery is working!");
      console.log($('.lane'))
      $('.lane').load('https://web.chelaile.net.cn/customer_ch5/?1=2&src=webapp_zhongshan#!/linedetail/0760-018-0');

    });
  }, []);
  const [count, setCount] = useLocalStorage("count", 0);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>huh yolo cors {count}</h1>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <aside className='lane'></aside>
        <iframe src="https://web.chelaile.net.cn/customer_ch5/?1=2&src=webapp_zhongshan#!/linedetail/0760-018-0"></iframe>
      </main>
    </div>
  );
}