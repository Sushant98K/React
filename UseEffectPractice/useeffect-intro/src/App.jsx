import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('always shows alert on every render')
  });

  useEffect(() => {
    alert('display on first render')
  }, []);

  useEffect(() => {
    alert('show alert on count changes')
  }, [count]);
  return (
    <>
      <h1>Hello</h1>
      <h2>count is {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>update count</button>
    </>
  )
}

export default App  