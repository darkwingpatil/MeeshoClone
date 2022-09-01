import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation } from 'react-router-dom'
export const PrivateRouter = ({children}) => {
    const {auth}=useSelector((state)=>state.auth)
    const location=useLocation()
    console.log(location,"here")
  if(auth)
  return (
    children
  );
  return (
      <Navigate to="/login" state={location.pathname} replace/>
  )
}

{/* <a href="https://iconscout.com/icons/google" target="_blank">Google Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a> */}