import React, { useState } from 'react'

const Single = () => {

    const [name, setName] = useState();

    return (
        <>
            <h1>Single</h1>

            <label>Name: </label><input type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} />
            <p>Typed Name: {name}</p>
            
        </>
  )
}

export default Single