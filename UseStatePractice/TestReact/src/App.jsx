import React, { useState } from "react";
import "./App.css";
import Change from "./components/Change";
import Color from "./components/Color";

const App = () => {

  // const [count, setCount] = useState(1);

  // const decrese = () => {
  //   if (count > 1) {
  //     setCount(count - 1)
  //   }
  //   else {
  //     setCount(1)
  //   }
  // }
  const name = 'sushant'

  return (
    <>
      {/* <div style={{ display: "flex", gap:'1rem' }}>
      <button onClick={decrese} >Decrese</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)} >Increse</button>
      </div> */}

      {/* <Change name={name} /> */}
      <Color/>
    </>
  );
};

export default App;
