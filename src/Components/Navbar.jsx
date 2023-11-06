import React from 'react'

function Navbar() {
  return (
    <div className='pb-5'>
        <nav class="navbar navbar-expand-lg navbar-light navbar-general shadow fixed-top mb-5 ">
            <div class="container-fluid mx-4 d-flex justify-content-between">
                <span className="navbar-brand" >IGA Implementation</span>
                <button className='btn '>Log Out</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar