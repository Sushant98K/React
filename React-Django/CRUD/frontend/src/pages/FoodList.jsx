import React, { useEffect, useState } from 'react'
import { deleteDataFromAPI, fetchDataFromAPI } from '../services/FoodAPI';
import AddFood from '../components/AddFood';
import EditFood from '../components/EditFood';

const FoodList = () => {

    const [showFood, setShowFood] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editData, setEditData] = useState(null);

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

    const handleFoodUpdated = async () => {
        const data = await fetchDataFromAPI('foods/')
        setShowFood(data)
        setShowEditForm(false)
        setEditData(null)
    }

    const handleEditClick = (item) => {
        setEditData(item)
        setShowEditForm(true)
    }

    const handleDeleteClick = async (item) => {
        const confirmed = window.confirm(`Are you sure you want tot delete ${item.foodName}`)
        if (confirmed) {
            const success = await deleteDataFromAPI(item.url)
            if (success) {
                setShowFood(prev=>prev.filter(f=>f.id !== item.id))
            }
        }
    }

    return (
        <>
            
            <button onClick={() => setShowForm(true)}>Add New Food</button>
            {
                showForm && <AddFood onFoodAdded={hadleFoodAdded} onCancel={()=>setShowForm(false)} />
            }

            {
                editData && showEditForm && <EditFood foodItem={editData} onFoodUpdated={handleFoodUpdated} onCancle={()=>setShowEditForm(false)} />
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
                                <td><button onClick={()=>handleEditClick(item)}>Edit</button></td>
                                <td><button onClick={()=> handleDeleteClick(item)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
  )
}

export default FoodList 