import React, { useState } from 'react'

const Color = () => {

    const [color, setColor] = useState('red');
    const [size, setSize] = useState('50px');

  return (
      <>
          <h1 style={{ color: color, fontSize: size }}>This is {color} font</h1>
          <button onClick={()=> {setColor('blue')}}>Change Color</button>
          <button onClick={()=>{setSize('100px')}}>Change Size</button>
      </>
  )
}

export default Color