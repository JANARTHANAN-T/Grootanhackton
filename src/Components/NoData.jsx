import React from 'react'
import logo from '../asserts/no-data.png'

function NoData({title}) {
  return (
    <div className='text-center'>
        <img src={logo} alt="no-data" height="350px"/>
        <h3>{title}</h3>
    </div>
  )
}

export default NoData