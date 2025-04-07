import React, { useState } from "react";

const DemoForm = () => {

  const [formData, setFormData] = useState({});
  const [demoData, setDemoData] = useState();


  const submitted = (e) => {
    e.preventDefault()
    console.log('data: ', formData)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prevData) => { return {...prevData, [name]:value} } )
  }

  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={submitted}>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>
                <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>
                <input type="text" name="email" placeholder="Enter Email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Age: </td>
              <td>
                <input type="text" name="age" placeholder="Enter Age" onChange={handleChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>

      
      <input type="text" placeholder="Enter Name" onChange={(e)=>{setDemoData(e.target.value)}} />
      {demoData}

    </>
  );
};

export default DemoForm;
