import React from 'react'
import{Link} from "react-router-dom"
import CustomizedBadges from "../Components/Cart/Carticon"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{hidenavbar} from "../Redux/Cart/Action"


export const Navbar = () => {
  const{navbar}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  if(navbar==true)
  return (
    <div>
        <Link to={"/"}>Products</Link>
        <Link to={"/login"}>Login</Link>
        <button style={{border:"none",background:"white"}} onClick={()=>{
          dispatch(hidenavbar(false))
          navigate("/cart")
        }}><CustomizedBadges/></button>
    </div>
  )
  return(
    <div></div>
  )
}
