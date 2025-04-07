import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams()
    return (
        <>
            <h1>User {id} Page</h1>
            <h2>Hello User {id}</h2>
        </>
  )
}

export default User