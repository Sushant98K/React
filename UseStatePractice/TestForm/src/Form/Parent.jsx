import React, { useEffect, useState } from 'react'
import Child from './Child';

const Parent = () => {

    const [inputData, setInputData] = useState({});
    const [finalData, setFinalData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputData((prevData)=> { return {...prevData, [name]:value}})
    }

    const submitted = (e) => {
        e.preventDefault()
        setFinalData(inputData)             
    }

    // useEffect(() => {
    //   console.log("Final Data:", finalData);
    // }, [finalData]);

    return (
        <>
            <h1>Parent</h1>
            <form onSubmit={submitted}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td><input type="text" name='name' placeholder='Enter Name' onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td><input type="text" name='email' placeholder='Enter Email' onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Age: </td>
                            <td><input type="text" name='age' placeholder='Enter Age' onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type='submit'>Submit</button>
            </form>
            <Child formdata={finalData} />
        </>
  )
}

export default Parent