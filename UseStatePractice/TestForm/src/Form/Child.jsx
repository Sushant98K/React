import React from 'react'

const Child = ({formdata}) => {
  return (
    <>
          <h1>Child</h1>
          {
              Object.keys(formdata).length > 0 ? (
                  <div>
                      <p>Name: {formdata.name }</p>
                      <p>Email: {formdata.email }</p>
                      <p>Age: {formdata.age }</p>
                  </div>
              ) : (
                      <p>No Data submitted yet</p>
              )
          }
          
    </>
  );
};

export default Child