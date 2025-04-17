import React, { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '../services/FoodAPI';
import AddFood from '../components/AddFood';

const FoodList = () => {

    const [showFood, setShowFood] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromAPI('foods/')
            setShowFood(data)
        }

        fetchData()
    }, []);

    const hadleFoodAdded = (newFoodItem) => {
        setShowFood((prev) => [...prev, newFoodItem]);
        setShowForm(false)
    };

    return (
        <>
            
            <button onClick={() => setShowForm(true)}>Add New Food</button>
            {
                showForm && <AddFood onFoodAdded={hadleFoodAdded} onCancel={()=>setShowForm(false)} />
            }

            <table border={1}>
                <caption>Food List</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Food Name</th>
                        <th>Food Type</th>
                        <th>Food Category</th>
                        <th>Food Price</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    {
                        showFood.map((item, index) =>
                            <tr key={index}>
                                <td>{ item.id}</td>
                                <td>{ item.foodName}</td>
                                <td>{ item.foodType}</td>
                                <td>{ item.foodCategory}</td>
                                <td>{item.foodPrice}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
  )
}

export default FoodList 