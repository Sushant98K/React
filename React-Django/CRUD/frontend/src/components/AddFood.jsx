import React, { useState } from 'react'
import { createDataToAPI } from '../services/FoodAPI';

const AddFood = ({onFoodAdded, onCancel}) => {

  const [newFood, setNewFood] = useState({
    foodName: "",
    foodType: "",
    foodCategory: "",
    foodPrice: "",
  });

    const handleChange=(e)=>{
        const {name, value} = e.target
        setNewFood((prev)=> ({ ...prev, [name] : value}))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const created = await createDataToAPI('foods/', newFood)
        if (created) {
            onFoodAdded(created)
        }
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add New Food Data</h3>
        <input type="text" name="foodName" placeholder="food name" value={newFood.foodName} onChange={handleChange} /><br />
        <input type="text" name='foodType' placeholder='food type' value={newFood.foodType} onChange={handleChange} /><br />
        <input type="text" name='foodCategory' placeholder='food category' value={newFood.foodCategory} onChange={handleChange} /><br />
        <input type="text" name='foodPrice' placeholder='food price' value={newFood.foodPrice} onChange={handleChange} /><br />
        
        <button type="submit">Add Food</button>
        <button type='button' onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
};

export default AddFood