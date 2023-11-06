import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { Link, useParams } from 'react-router-dom'
import NotificationFloat from '../Components/NotificationFloat'
import axios from 'axios'

function RequestFlowDetailsPage() {
  const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);
  let { id, processId } = useParams();


  const [process, setProcess] = useState([])

  useEffect(()=>{
      axios
      .get(`http://localhost:8090/subtasks?processId=${processId}`)
      .then(data => setProcess(data.data))
      .catch(error => console.log(error));
  },[])


  return (
    <div>
    {/* <Navbar /> */}
    {isNotificationPanelOpen && <NotificationFloat setClose={setNotificationPanelOpen} />}
    <SideMenu />
    <div className='sidemenu-body px-5 py-4'>
    <div className='d-flex align-items-center justify-content-between'>
        <h3 className='ms-2'>Task Name</h3>
        {/* <i class="fa-regular fa-bell fs-5" onClick={() => setNotificationPanelOpen(true)}></i> */}
    </div>  
      <div className=' m-2 my-5'>
    {process.length && process.map((prs, i ) => {
      if(prs.name.replaceAll(' ','-').toLowerCase() == id){
      return  Object.keys(prs).map((prsKey)=>{
        return   <div className='row'>
                <div className='col-md-3 fw-bold my-2'>{prsKey}</div>
                <div className='col-md-9 '>{prs[prsKey]}</div>
            </div>
        })
      }
    })
    }
      </div> 
    </div>
</div>
  )
}

export default RequestFlowDetailsPage