import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <h3>Count is {count}</h3>
      <button onClick={()=>setCount(count+1)}>increase count</button>
    </>
  );
};

export default App;
