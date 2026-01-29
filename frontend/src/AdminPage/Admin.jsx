import React from 'react'
import '../AdminPage/admin.css'

const Admin = () => {
  return (
    <div>
      <div className="admin-page">
        <div className="admin-pannel">

          <h3>Admin Panel</h3>
          <div className="email">
            <p>Email Address</p>
            <input type="text" />
             </div>
             <div className="password">
            <p>Password</p>
            <input type="text" />
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
