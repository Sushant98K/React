import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [showbtn, setShowbtn] = useState(false);

  const btnClick = () => {
    if (showbtn) {
      setShowbtn(false)
    }
    else {
      setShowbtn(true)
    }
  }

  return (
    <>
      <h1>App</h1>

      <button type="button" onClick={btnClick}>{ showbtn ? 'close the door' : 'open the door'}</button>
      {
        showbtn ? <p>Door is open</p> : <p>Door is colsed</p>
      }
      {showbtn && <p>Hello</p>}               {/*show only when showbtn is true*/}
    </>
  );
}

export default App