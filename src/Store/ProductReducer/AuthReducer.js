

import React from 'react'

const initialState = {
    isLoginUser: false,
    user: {}
}

export default function AuthReducer(state=initialState, actions) {
  switch (actions.type) {
      case "LOGIN":{
          return{
              ...state,
              isLoginUser: true,
              user: actions.payload.userData
          }

      }

      case "LOGOUT":{
        return {
            ...state,
            isLoginUser : false,
            user: {}
        }
       }
          
          
  
      default:
          return state;
  }
}
