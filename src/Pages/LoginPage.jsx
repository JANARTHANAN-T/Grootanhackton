import React from 'react'

function LoginPage() {
  return (
    <div className='login-cover-img'>
            <div className='login-form shadow text-light'>
                <h4 className='text-center'>LOGIN</h4>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" />
                </div>
                <div className='d-grid gap-2 mt-5'>
                    <button type="submit" class="btn btn-theme">Submit</button>
                </div>
            </div>        
        </div>
  )
}

export default LoginPage