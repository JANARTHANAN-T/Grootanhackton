import React from 'react'

function NotificationFloat({setClose}) {
  return (
    <div className='notification-float shadow p-3 px-4 bg-light'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <span className='fw-bold fs-5'>Notification</span>
        <i class="fa-solid fa-xmark" onClick={() =>setClose(false)}></i>
      </div>
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 1</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr  />
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 2</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr />
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 2</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr />
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 2</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr />
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 2</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr />
      <div className='notification-list py-1 px-2'>
          <div className='d-flex align-items-center justify-content-start '>     
            <i class="fa-solid fa-bell pe-2 "></i>
            <span className='fw-bold' >sample notifiy 2</span>  
          </div>
            <div className='notification-desc-encloser'>
            <p className='notification-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            </div>
      </div>
      <hr />
    </div>
  )
}

export default NotificationFloat