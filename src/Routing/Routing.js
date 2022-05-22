import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "../Pages/Products/Products";
import Orders from "../Pages/Orders/Orders";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { useSelector } from "react-redux";

export default function Routing() {
   const isLoginUser= useSelector((store) => store.AuthReducer.isLoginUser)
    return (
       <Router>
  
           <Header/>
  
           <Routes>

              <Route path='/' element={
                 <PrivateRoute isLoginUser={isLoginUser}>
                    <Products/>
                 </PrivateRoute>
              }/> 
              <Route path='/orders' element={
                 <PrivateRoute isLoginUser={isLoginUser}>
                 <Orders/>
              </PrivateRoute>
              }/> 
              <Route path="/login" element={
                 <PublicRoute isLoginUser={isLoginUser}>
                    <Login/>
                 </PublicRoute>
              }/>
           </Routes>
       </Router>
    )
  }