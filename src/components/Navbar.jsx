import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <NavLink to='/addschool'>Add School</NavLink>
        <NavLink to='/' >Show Schools</NavLink>
    </div>
  )
}

export default Navbar