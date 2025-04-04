import React, { useState } from 'react'

const Item = () => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    const addItem = () => {
        setItems((prevItem)=>[...prevItem, `Item ${count}`])
        setCount(count + 1)
    }

    return (
        <>
            <h1>Add Item</h1>
            <button onClick={addItem}>Add New Item</button>
            <ul>
                {
                    items.map((i,index) => (
                        <li key={index}>{i}</li>
                    ))
                }
            </ul>
        </>
  )
}

export default Item