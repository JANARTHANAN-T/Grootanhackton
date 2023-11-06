import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { Link, useParams } from 'react-router-dom'
import NotificationFloat from '../Components/NotificationFloat'
import axios from 'axios'

function TaskDetailPage() {
  const [isActive, setIsActive ] = useState(true);
  let { id } = useParams();
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const [ isUserActionCompletion, setUserActionCompletion] = useState(false);

  const [userId,setUserId] = useState('kirankumar.j@grootan.com')

  const [pendingTask, setPendingTask] = useState()

  useEffect(()=>{
    axios
    .get(`http://localhost:8090/getPendingRequest?userId=${userId}`)
    .then(data => setPendingTask(data.data))
    .catch(error => console.log(error));
},[])

  const onSuccess = () => {
    axios
    .post(`http://localhost:8090/review`, { id, status:true })
      .then(res => {
        setUserActionCompletion(true)
      })
  }
  
  const onDeniel = () => {
    axios
    .post(`http://localhost:8090/review`, { id, status:false })
      .then(res => {
        setUserActionCompletion(true)
      })
  }

  return (
    <div>
        {/* <Navbar /> */}
        <SideMenu />
        {isNotificationPanelOpen && <NotificationFloat setClose={setNotificationPanelOpen} />}
        <div className='sidemenu-body px-5 py-4'>
        <div className='d-flex align-items-center justify-content-between'>
            <h3 className='ms-2'>Task Name</h3>
            {/* <i class="fa-regular fa-bell fs-5" onClick={() => setNotificationPanelOpen(true)}></i> */}
        </div>  
        <div className='row m-2 my-5'>
        {pendingTask && pendingTask.length && pendingTask.map((prs, i ) => {
      if(prs.taskId == id){
      return  Object.keys(prs).map((prsKey)=>{
        return   <div className='row'>
                <div className='col-md-3 fw-bold my-2'>{prsKey}</div>
                <div className='col-md-9 '>{prs[prsKey]}</div>
            </div>
        })
      }
    })
    }
    { !isUserActionCompletion &&
            <div className='d-flex align-items-center justify-content-end'>
            <button className='btn btn-danger px-4 py-2' onClick={onDeniel}>Reject</button>
            <button className='btn btn-success px-4 py-2 m-4 my-5' onClick={onSuccess}>Approve</button>
            </div>
    }
        </div> 
        </div>
    </div>
  )
}

export default TaskDetailPage