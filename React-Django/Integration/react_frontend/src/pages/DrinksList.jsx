import React, { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '../services/FoodData';

const DrinksList = () => {

    const [drinksData, setDrinksData] = useState([]);

    useEffect(() => {
        const fetchDrinks = async()=> {
            const data = await fetchDataFromAPI('drinks/')
            setDrinksData(data)
        }
        fetchDrinks()
    }, []);

    return (
        <>
            <table border={1}>
                <caption>Drink's List</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    {
                        drinksData.map((item, index) =>
                            <tr key={index}>
                                <td>{ item.id}</td>
                                <td>{ item.name}</td>
                                <td>{ item.category}</td>
                                <td>{ item.price}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
  )
}

export default DrinksList