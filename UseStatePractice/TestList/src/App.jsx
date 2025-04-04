import React, { useState } from 'react'
import './App.css'
import Bike from './components/Bike';
import Item from './components/Item';

const App = () => {

  const [car, setCar] = useState(
    {
      brand:'BMW',
      carname: 'M3 GTR',
      color: 'blue',
      price: '10M'
    }
  );

  

  return (
    <>
      <h1>Main</h1>
      <h3>Car Name: { car.carname}</h3>
      <h3>Car Brand: { car.brand}</h3>
      <h3>Car Color: { car.color}</h3>
      <h3>Car Price: {car.price}</h3>
      <button onClick={() => {
        setCar((prevCar) => ({
          ...prevCar,
          color:'white'
        }))
      }}>
        Change Color of the car
      </button>
      <Bike />
      <Item/>
    </>
  )
}

export default App