import React, { useEffect, useState } from 'react'

const DetailForm = () => {

    const [inputData, setInputData] = useState({});
    const [tempData , setTempData    ] = useState({});

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value
        
        setInputData((prevData) => { return { ...prevData, [name]: value } })
    }
    
    const submitted = (e) => {
        e.preventDefault()
        setTempData(inputData);        
        console.log(inputData);
    }

    return (
        <>
            <h1>Detailed Form</h1>

            <form onSubmit={submitted}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td><input type="text" name='Name' placeholder='Enter Your Name' onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td><input type="text" name='Email' placeholder='Enter your Email' onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Age: </td>
                            <td><input type="text" name='Age' placeholder='Enter your Age' onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type='submit'>Submit</button>
            </form>
            <h3>Name: { tempData.Name}</h3>
            <h3>Email: { tempData.Email}</h3>
            <h3>Age: { tempData.Age}</h3>
        </>
  )
}

export default DetailForm