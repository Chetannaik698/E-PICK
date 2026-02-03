import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <div>
      <div className="admin-page">
        <div className="admin-pannel">
          

          <h2>Admin Panel</h2>
          <div className="email">
            <p>Email Address</p>
            <input type="text" placeholder='Enter your email ' />
             </div>
             <div className="password">
            <p>Password</p>
            <input type="text" placeholder='your@email.com' />
            </div>
         

          <div className="login-btn">
            <button>Login</button>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Admin
