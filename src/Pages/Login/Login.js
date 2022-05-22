


import React from 'react'
import AdminLogin from './useLogin'

export default function Login() {
    const [setEmail, setPassword, doAdminLogin, email, password]= AdminLogin();
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-auto'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/> <br/> <br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/> 
                <button onClick={doAdminLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}
