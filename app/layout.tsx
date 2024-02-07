"use client";
import React, { useEffect, useState } from 'react';

import $ from 'jquery';
interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
      if (typeof window !== 'undefined') {
       if($('#incrementBtn').length==1) $('#incrementBtn').click(() => setCount((prevCount) => prevCount + 1));
       if($('#decrementBtn').length==1) $('#decrementBtn').click(() => setCount((prevCount) => prevCount - 1));
        console.log($('body'));
      }

    return () => {
      if (typeof window !== 'undefined') {
        $('#incrementBtn').off('click');
        $('#decrementBtn').off('click');
      }
    };
  }, []);

  return (
    <html>
      <body>
        <div>
          <h1>Count Update: {count}</h1>
          <button id="decrementBtn">Decrement</button>
          <button id="incrementBtn">Increment</button>
        </div>
      </body>
    </html>
  );
}