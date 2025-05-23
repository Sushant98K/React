import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <Link to={'/'}>Dashboard</Link> |{" "}
                <Link to={'/home'}>Home</Link> |{" "}
                <Link to={'/about'}>About</Link> |{" "}
                <Link to={'/contact'}>Contact</Link> |{" "}
                <Link to={'/user/1'}>User 1</Link> |{" "}
                <Link to={'/user/2'}>User 2</Link> |{" "}
                <Link to={'/user/3'}>User 3</Link>
            </nav>
        </>
  )
}

export default Nav