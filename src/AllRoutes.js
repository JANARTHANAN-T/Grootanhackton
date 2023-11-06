import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import RequestPage from './Pages/RequestPage'
import TaskPage from './Pages/TaskPage'
import RequestFlowPage from './Pages/RequestFlowPage'
import RequestFlowDetailsPage from './Pages/RequestFlowDetailsPage'
import TaskDetailPage from './Pages/TaskDetailPage'
import { getCurrentUser } from './model/Functions';
import AccessDeniedPage from './Pages/AccessDeniedPage'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getCurrentUser() ? (
      <Component {...props} />
    ) : (
        <Link to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
)
// const NonPrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     getCurrentUser() ? (
//       <Redirect to={{
//         pathname: "/auth",
//         state: { from: props.location }
//       }} />
//     ) : (
//         <Component {...props} />
//       )
//   )} />
// )


const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<AccessDeniedPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/dashboard' element={<DashboardPage />}/>
          <Route path='/request' element={<RequestPage />} />
          <Route path='/request/flow/:processId' element={<RequestFlowPage />}/>
          <Route path='/request/flow/:processId/detail/:id' element={<RequestFlowDetailsPage />}/>
          <Route path='/task' element={<TaskPage />}/>
          <Route path='/task/detail/:id' element={<TaskDetailPage />}/>
      </Routes>
    )
  }
  
  export default AllRoutes