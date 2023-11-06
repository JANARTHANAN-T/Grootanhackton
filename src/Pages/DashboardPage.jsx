import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import NotificationFloat from '../Components/NotificationFloat'
import axios from 'axios'

function DashboardPage() {

    const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);

    const [userId, setUserId] = useState('janathangavel11@gmail.com')
    const [activity, setActivity] = useState({})

    useEffect(()=>{
        axios
        .get(`http://localhost:8090/dashboard?userId=${userId}`)
        .then(data => setActivity(data.data))
        .catch(error => console.log(error));
    },[])

  return (
    <div>
        {isNotificationPanelOpen && <NotificationFloat setClose={setNotificationPanelOpen} />}
        <SideMenu />
        <div className='sidemenu-body px-5 py-4'>
        <div className='d-flex align-items-center justify-content-between'>
            <h3 className='ms-2'>Dashboard</h3>
            {/* <i class="fa-regular fa-bell fs-5 cursor-pointer" onClick={() => setNotificationPanelOpen(true)}></i> */}
        </div>
        <h4 className='mt-5 ms-2'>Request</h4>
        <div className='row'>
            {/* <div className='col-md-3 p-3'>
                <div className='shadow activity-card theme-card'>
                    <p className='activity-title pb-1'>Total Request</p>
                    <h2 className=''>0</h2>
                </div>
            </div> */}
            <div className='col-md-3 p-3'>
                <div className='shadow activity-card pending-card'>
                    <p className='activity-title pb-1 text-dark'>Pending Request</p>
                    <h2 className='text-dark'>{activity.pendingRequests}</h2>
                </div>
            </div>
            <div className='col-md-3 p-3'>
            <div className='shadow activity-card completed-card'>
                    <p className='activity-title pb-1 text-success'>Completed Request</p>
                    <h3 className='text-success'>{activity.completedRequests}</h3>
                </div>
            </div>
            <div className='col-md-3 p-3'>
                <div className='shadow activity-card cancelled-card'>
                    <p className='activity-title pb-1 text-danger'>Rejected Request</p>
                    <h3 className='text-danger'>{activity.rejectedRequests}</h3>
                </div>
            </div>
        </div>
        <h4 className='mt-5 ms-2'>Task</h4>
        <div className='row'>
      
            <div className='col-md-3 p-3'>
            <div className='shadow activity-card pending-card'>
                    <p className='activity-title pb-1'>Pending Task </p>
                    <h3>{activity.pendingTasks}</h3>
                </div>
            </div>
            <div className='col-md-3 p-3'>
        <div className='shadow activity-card theme-card'>
                    <p className='activity-title pb-1'>Total Task </p>
                    <h3>{activity.totalTasks}</h3>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default DashboardPage