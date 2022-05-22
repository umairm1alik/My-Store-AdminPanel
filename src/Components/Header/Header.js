import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { doLogout } from '../../Store/Actions/AuthAction'

import './Header.css'

import { useSelector } from 'react-redux'

export default function Header() {
    const flag= useSelector((store) => store.AuthReducer.isLoginUser)
    const dispatch= useDispatch(); 
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to='/'><a class="navbar-brand" >Admin Panel</a></Link>
                    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/'><a class="nav-link active" aria-current="page" >Products</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/orders'><a class="nav-link" >Orders</a></Link>
                            </li>
                            {flag ?
                            <li class="nav-item">
                                <a class="nav-link btnLogout" onClick={() => dispatch(doLogout())}>Log Out</a>
                            </li>
                            :
                            <p></p>
}
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
