import React from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'

function LeaveRequestPage() {
  return (
    <div>
        {/* <Navbar /> */}
        <SideMenu />
        <div className='sidemenu-body p-5'>
                <h5 className='pb-5'>Request for Leave</h5>
                <div className='row'>
                  <div className='col-md-6'>
                    <div class="mb-5">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div class="mb-5">
                        <label class="form-label">Leave Type</label>
                        <select className='form-control'>

                        </select>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div class="mb-5">
                        <label class="form-label">From</label>
                        <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div class="mb-5">
                        <label class="form-label">To</label>
                        <input type="date" class="form-control" />
                    </div>
                  </div>
                </div>
                <label class="form-label">Description</label>
                <textarea className='form-control mb-3' rows="10" />
                <button type="submit" class="btn request-leave-btn mt-4">Submit</button>
        </div>
    </div>
  )
}

export default LeaveRequestPage