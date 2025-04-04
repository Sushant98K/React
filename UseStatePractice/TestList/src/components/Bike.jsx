import React, { Component } from "react";

class Bike extends Component {
  constructor() {
    super();
    this.state = {
      brandName: "harley davidson",
      name: "x44",
      color: "black",
      price: 200000,
    };
  }

  changeBike = () => {
    this.setState((prevBike) => ({
      ...prevBike,
      name: "SportsterS",
      price: 160000,
    }));
  };

  render() {
    return (
      <>
        <h1>Class Bike Component</h1>
        <h3>Brand: {this.state.brandName}</h3>
        <h3>Bike name: {this.state.name}</h3>
        <h3>Color: {this.state.color}</h3>
        <h3>Price: {this.state.price}</h3>
        <button
          onClick={() => {
            this.setState((prevBike) => ({
              ...prevBike,
              color: "blue",
            }));
          }}
        >
          Change bike color
        </button>
        <button onClick={this.changeBike}>Change Bike</button>
      </>
    );
  }
}

export default Bike;
