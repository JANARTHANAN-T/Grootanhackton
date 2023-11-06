import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { Link } from 'react-router-dom'
import NotificationFloat from '../Components/NotificationFloat'
import NoData from '../Components/NoData';
import axios from 'axios'

function TaskPage() {
  const [isActive, setIsActive ] = useState(true);
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);

  const [userId,setUserId] = useState('kirankumar.j@grootan.com')

  const [pendingTask, setPendingTask] = useState()

  useEffect(()=>{
    axios
    .get(`http://localhost:8090/getPendingRequest?userId=${userId}`)
    .then(data => setPendingTask(data.data))
    .catch(error => console.log(error));
},[])


  return (
    <div>
        {/* <Navbar /> */}
        {isNotificationPanelOpen && <NotificationFloat setClose={setNotificationPanelOpen} />}
        <SideMenu />
        <div className='sidemenu-body px-5 py-4'>
        <div className='d-flex align-items-center justify-content-between'>
            <h3 className='ms-2'>Task</h3>
            {/* <i class="fa-regular fa-bell fs-5" onClick={() => setNotificationPanelOpen(true)}></i> */}
        </div>
            {/* <div className='row my-5 mx-2'>
                <div className={`col-md-2 text-center py-3 cursor-pointer switch-toggle ${isActive && 'active-toggle' }`} onClick={() => setIsActive(true)}>Active</div>
                <div className={`col-md-2 text-center py-3 cursor-pointer switch-toggle ${!isActive && 'active-toggle' }`} onClick={() => setIsActive(false)}>History</div>
            </div> */}
           { pendingTask && pendingTask.length > 0 && 
            <table class="mt-5 mx-2">
                <thead>
                    <th>Task Id</th>
                    <th></th>
                </thead>
                <tbody>
                {pendingTask.map((pt) =>{
                    return(
                    <tr>
                        <td>{pt.taskId}</td>
                        <td><Link to={`/task/detail/${pt.taskId}`}><i class="fa-solid fa-right-from-bracket text-theme"></i></Link></td>                    
                    </tr>
                    )
                })}
                </tbody>
            </table>     
           }   
            { pendingTask && pendingTask.length === 0 && <NoData title='No Task' />}
        </div>
    </div>
  )
}

export default TaskPage