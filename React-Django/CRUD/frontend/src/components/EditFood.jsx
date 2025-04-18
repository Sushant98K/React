import React, { useState } from 'react'
import { updateDataToAPI } from '../services/FoodAPI';

const EditFood = ({ foodItem, onFoodUpdated, onCancle }) => {

    const [formData, setFormData] = useState({
        foodName: foodItem.foodName,
        foodType: foodItem.foodType,
        foodCategory: foodItem.foodCategory,
        foodPrice: foodItem.foodPrice,
    });

    const handleChange = (e) => {
        const {name, value}= e.target
        setFormData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDataToAPI(foodItem.url, formData)
        onFoodUpdated()
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
              <h3>Edit Food</h3>
              <input type="text" name='foodName' value={formData.foodName} onChange={handleChange} placeholder='Food Name' required/>
            <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" required />
            <input type="text" name="foodCategory" value={formData.foodCategory} onChange={handleChange} placeholder="Food Category" required />
            <input type="number" name="foodPrice" value={formData.foodPrice} onChange={handleChange} placeholder="Food Price" required />
            <button type='submit'>Submit</button>
            <button type='button' onClick={onCancle}>Cancle</button>
      </form>
    </>
  );
};

export default EditFood