import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import SideMenu from '../Components/SideMenu'
import { Link, useParams } from 'react-router-dom'
import NotificationFloat from '../Components/NotificationFloat'
import axios from 'axios'

function RequestFlowPage() {
    const [isNotificationPanelOpen, setNotificationPanelOpen] = useState(false);
    let { processId } = useParams();

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
        <div className='sidemenu-body px-5 py-4 d-flex flex-column align-items-center'>
        <h4 className='pb-5'>Request Id: {processId}</h4>
        {process.length > 0 && process.map((prs,i) =>{
            if(prs.status && prs.status == 'DONE')
            return(
                <div className='d-flex flex-column align-items-center'>
                    <Link to={`/request/flow/${processId}/detail/${prs.name.replaceAll(' ','-').toLowerCase()}`} className='text-decoration-none text-dark'>
                        <div className={`shadow flow-card p-3 completed-card`}>
                            <div className='fw-bold py-2 '>{prs.name}</div>
                            <div className='fst-italic'>{prs.status}</div>
                        </div>
                    </Link>
                    <div className='flow-line'></div>
                </div>
            )
        })}
        {process.length > 0 && process.map((prs,i) =>{
            if(prs.status && prs.status==='PENDING')
            return(
                <div className='d-flex flex-column align-items-center'>
                    <Link to={`/request/flow/${processId}/detail/${prs.name.replaceAll(' ','-').toLowerCase()}`} className='text-decoration-none text-dark'>
                        <div className={`shadow flow-card p-3 yellow-card`}>
                            <div className='fw-bold py-2 '>{prs.name}</div>
                            <div className='fst-italic'>{prs.status}</div>
                        </div>
                    </Link>
                    <div className='flow-line'></div>
                </div>
            )
        })}
        {process.length > 0 && process.map((prs,i) =>{
            if(prs.status && prs.status == 'NOT_STARTED')
            return(
                <div className='d-flex flex-column align-items-center'>
                    <div className={`shadow flow-card p-3 pending-card`}>
                        <div className='fw-bold py-2 '>{prs.name}</div>
                        <div className='fst-italic'>{prs.status}</div>
                    </div> :
                { process.length-1 !== i && <div className='flow-line'></div>}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default RequestFlowPage