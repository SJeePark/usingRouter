import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>homepage</h1>
      <Link to='/about'>go to about</Link>
    </div>
  )
}

export default Homepage