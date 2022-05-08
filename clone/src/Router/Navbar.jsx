import React from 'react'
import '../App.css';
import{Link} from "react-router-dom"
import CustomizedBadges from "../Components/Cart/Carticon"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch, useSelector } from 'react-redux'
import{Profile,Profilebutton,InputsSign} from "../Components/styled"
import { useNavigate } from 'react-router-dom'
import{hidenavbar} from "../Redux/Cart/Action"
import{isAuth} from "../Redux/Profile/Action"
import  Navbar1  from '../Components/Signup/Navbar1';
import{Productdetail} from "../Components/Product"
import{showlogin} from "../Redux/Profile/Action"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Navbar = () => {
  const{navbar}=useSelector((state)=>state.cart)
  const{auth,number}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [showsign,setsign]=React.useState(false)
  if(navbar==true)
  return (
    <div>
        <Link to={"/"} onMouseEnter={()=>setsign(false)}></Link>
        {/* <Link to={"/login"}>Login</Link> */}
        <button style={{border:"none",background:"none"}} onMouseEnter={()=>{setsign(true)
        dispatch(showlogin(true))}}  ><PermIdentityIcon/></button>
        <button style={{border:"none",background:"none"}} onClick={()=>{
          dispatch(hidenavbar(false))
          navigate("/cart")
          
        }}onMouseEnter={()=>setsign(false)}><CustomizedBadges/></button>
{/* <Profile see={showsign} onMouseLeave={()=>setsign(false)}>
          <h3 style={{textAlign:"left",marginLeft:"5px"}}>Hello User</h3>
          <p style={{textAlign:"left",marginLeft:"5px"}}>{auth?`+91 ${number}`:"To access your Meesho account"}</p>
          {
            auth?
            <div></div>
            :
            <Profilebutton onClick={()=>{
              navigate("/login")
            }}>Sign Up</Profilebutton>
          }
          
          <hr style={{width:"90%"}}/>
          <InputsSign><ShoppingBagIcon/>
          <h3 style={{marginTop:"0%"}}>My Orders</h3>
          </InputsSign>
          {
            auth?
            <Profilebutton onClick={()=>dispatch(isAuth(false))}>Logout</Profilebutton>
            :
            <div></div>
          }
        </Profile> */}
    </div>
    
  )
  return(
    <div></div>
  )
}
