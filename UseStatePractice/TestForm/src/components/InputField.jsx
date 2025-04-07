import React, { useState } from "react";

const InputField = () => {

  const [name, setName] = useState();
  const [finalValue, setFinalValue] = useState();

  const Final = (e) => {
    e.preventDefault()
    setFinalValue(name)
    console.log(name);
    
  }

  return (
    <>
      <h1>InputField</h1>
      <form onSubmit={Final}>
          <h2>Changing Name: {name}</h2>
        <label>Enter The Name: </label><input type="text" onChange={(e) => { setName(e.target.value) }} /> <br />
        <button type="submit">Submit</button>
      </form>

      {finalValue}
      

    </>
  );
};

export default InputField;
