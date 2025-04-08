import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <>
        <nav>
          <Link to={'/'}>Dashboaard</Link> | {" "}
          <Link to={"/home"}>Home</Link> |{" "}
          <Link to={"/single"}>Single Form</Link> |{" "}
          <Link to={"/details"}>Detail Form</Link>
        </nav>
      </>
    );
}

export default Navbar