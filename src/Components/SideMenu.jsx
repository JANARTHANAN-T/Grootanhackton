import React from 'react'
import { NavLink } from 'react-router-dom'

function SideMenu() {
  return (
        <div className='sidemenu-general text-white'>
            <span className="navbar-brand p-5 py-4 fw-bold me-0" >IGA Implementation</span>
            <NavLink to="/dashboard" className='py-3 px-5 sidemenu-list'>Dashboard</NavLink>
            <NavLink to="/request" className='py-3 px-5 sidemenu-list'>Request</NavLink>
            <NavLink to="/task" className='py-3 px-5 sidemenu-list'>Task</NavLink>
            <div className='sign-out-btn'><div className='my-2 mx-5 cursor-pointer'>Sign Out</div></div>
        </div>
  )
}

export default SideMenu