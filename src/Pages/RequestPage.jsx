import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { Link, useNavigate } from 'react-router-dom'
import NotificationFloat from '../Components/NotificationFloat'
import axios from 'axios' 
import NoData from '../Components/NoData'

function RequestPage() {
    const [isActive, setIsActive ] = useState(true);
    const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);

    const [userID, setUserID] = useState('janathangavel11@gmail.com')

    const [requestActive, setRequestActive] = useState()
    const [requestHistory, setRequestHistory] = useState()

    const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`http://localhost:8090/tasks?userId=${userID}`)
        .then(data => setRequestActive(data.data))
        .catch(error => console.log(error));
    },[])

    useEffect(()=>{
        axios
        .get(`http://localhost:8090/tasks/completed?userId=${userID}`)
        .then(data => setRequestHistory(data.data))
        .catch(error => console.log(error));
    },[])


  return (
    <div>
        {/* <Navbar /> */}
        {isNotificationPanelOpen && <NotificationFloat setClose={setNotificationPanelOpen} />}
        <SideMenu />
        <div className='sidemenu-body px-5 py-4'>
        <div className='d-flex align-items-center justify-content-between'>
            <h3 className='ms-2'>Request</h3>
            {/* <i class="fa-regular fa-bell fs-5" onClick={() => setNotificationPanelOpen(true)}></i> */}
        </div>
            <div className='row my-5 mx-2'>
                <div className={`col-md-2 text-center py-3 cursor-pointer switch-toggle ${isActive && 'active-toggle' }`} onClick={() => setIsActive(true)}>Active</div>
                <div className={`col-md-2 text-center py-3 cursor-pointer switch-toggle ${!isActive && 'active-toggle' }`} onClick={() => setIsActive(false)}>History</div>
            </div>
            { isActive ?
            <div>
            { requestActive && requestActive.length > 0 && 
            <table class="mt-5 mx-2">
                <thead>
                    <th>Request Id</th>
                    <th>Request Name </th>
                    <th></th>
                </thead>
                <tbody>
                    { requestActive.map((req) => {
                        return(
                            <tr>
                                <td>{req.id}</td>
                                <td>{req.name}</td>
                                <td><Link to={`/request/flow/${req.processId}`} ><i class="fa-solid fa-right-from-bracket text-theme" ></i></Link></td>                    
                            </tr>

                        )
                    })
                      }
                </tbody>
            </table>   
            }
            {
                requestActive && requestActive.length == 0 && <NoData title="No Active Request" />
            }   
            </div> :
            <div>
            { requestHistory && requestHistory.length > 0 && 
            <table class="mt-5 mx-2">
                <thead>
                    <th>Request Id</th>
                    <th>Request Name </th>
                    <th></th>
                </thead>
                <tbody>
                    { requestHistory.map((req) => {
                        return(
                            <tr>
                                <td>{req.id}</td>
                                <td>{req.name}</td>
                                <td><Link to={`/request/flow/${req.processId}`}><i class="fa-solid fa-right-from-bracket text-theme"></i></Link></td>                    
                            </tr>

                        )
                    })
                      }
                </tbody>
            </table>   
            }
            {
                requestHistory && requestHistory.length == 0 && <NoData title="No Request" />
            } 
            </div>
            } 
        </div>
    </div>
  )
}

export default RequestPage