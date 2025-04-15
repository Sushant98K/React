import React, { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '../services/FoodData';

const FoodList = () => {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromAPI('food/')
            setFoodList(data)
        }
        fetchData()
    }, []);

    return (
        <>
            <table border={1}>
                <caption>Food List</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    {
                        foodList.map((item, index) =>
                        <tr key={index}>
                                <td>{item.id }</td>
                                <td>{item.name }</td>
                                <td>{item.type }</td>
                                <td>{item.price }/-</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </>
  )
}

export default FoodList