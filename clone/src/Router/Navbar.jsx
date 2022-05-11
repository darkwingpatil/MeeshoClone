
import React from 'react'
import '../App.css';
import{Link} from "react-router-dom"
import CustomizedBadges from "../Components/Cart/Carticon"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch, useSelector } from 'react-redux'
import{Profile,Profilebutton,InputsSign,Mynavbar} from "../Components/styled"
import { useNavigate } from 'react-router-dom'
import{hidenavbar} from "../Redux/Cart/Action"
import{isAuth} from "../Redux/Profile/Action"
import  Navbar1  from '../Components/Signup/Navbar1';
import{Productdetail} from "../Components/Product"
import{showlogin} from "../Redux/Profile/Action"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "./Nav.module.css"
import {useState} from 'react';
import data from '../db.json';
import SearchIcon from '@mui/icons-material/Search';




export const Navbar = () => {

  const [searchTerm,setSearchTerm] = useState('')
  const{navbar}=useSelector((state)=>state.cart)
  const{auth,number}=useSelector((state)=>state.auth)
  const[hidesea,sethidesea]=React.useState(false)
  const[mydata,setMydata]=React.useState([])
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const Alldata=()=>{
    data.jeans.filter((el)=>{
      if(searchTerm == ""){
        return;
    }
      else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
        return el;
      }
    }).map((el)=>{
      // return <div>{el.type}</div>
    setMydata([...mydata,el.type])
    
    })

    data.jeans.filter((el)=>{
      if(searchTerm == ""){
        return;
    }
      else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
        return el;
      }
    }).map((el)=>{
      // return <div>{el.type}</div>
    setMydata([...mydata,el.type])
    
    })
    data.data.filter((el)=>{
      if(searchTerm == ""){
        return;
    }
      else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
        return el;
      }
    }).map((el)=>{
      // return <div style={{position:"absolute",top:"100%",left:"20%",background:"white",height:"100px",width:"300px",zIndex:4,border:"1px solid red"}}><div>{el.type}</div></div>
      setMydata([...mydata,el.type])
    })
    console.log(mydata,"seeing")
  }


  const [showsign,setsign]=React.useState(false)
  if(navbar==true)
  return (
    <Mynavbar >
    
            <div className={styles.jenny}>
    <div className={styles.leftNav}>
        <div className={styles.logoMeesho}><img src="https://2ballz.in/assets/images/meesho.png" alt="WebsiteLogo" onClick={()=>{
          navigate("/")}}/></div>
        <div className="App">
        {/* <i className="fa-solid fa-magnifying-glass fa-xl"></i> */}
        {/* <div>SearchIcon</div> */}



<input type="text" className={styles.input} id="input11" placeholder="Try Saree,Kurti or Search Product Code" onChange={e=>{
  
  setSearchTerm(e.target.value)
  Alldata()
  sethidesea(true)}} />
<SearchIcon style={{position:"absolute",left:"42%",marginTop:"15px"}} id="tag11"/>


{
  hidesea?<div style={{position:"absolute",top:"100%",left:"25%",background:"white",height:"300px",width:"300px",zIndex:4,border:"1px solid lightgrey"}} onMouseLeave={()=>sethidesea(false)}>
  {
    mydata.map((ele)=>{
      return <div style={{border:"1px solid lightgray"}}>{ele}</div>
    })
  }
  
  </div>:<div></div>
}




</div>     
    </div>
    <div className={styles.RightNav} id="down11">
        <ul>
            <li className={styles.download} id="oneu11" ><a href="#"><i class="bi bi-phone-fill"></i> Download 
            <div className={styles.playStoreHover}>
                <div>
            <a href="#"> Download From- </a>  
            <i class="fa-solid fa-mobile"></i>       
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply"> 
            <img src=""
            alt="android"/> </a>
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply">  <img src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png" alt="ios"/>
                                </a>
                 </div>
            </div>
         </a></li>
            <li id="oneu"><a href="#"><i class="bi bi-shop"></i>Become a Supplier</a></li>
            {/* <li className={styles.cartHhover}><a href="#"><i class="fa-solid fa-user"></i> Profile  */}
                    <div className={styles.signupHover}>
                        <div>
                 <a href="#"> Hello User </a>         
                 <a href="#"> To Accese Our Messho Account </a>         
                 <a href=""> Sign Up </a> 
                         </div>
                     </div>
            {/* </a> */}
            {/* </li> */}
        </ul>
    </div>
    <Link to={"/"} onMouseEnter={()=>setsign(false)}></Link>
        {/* <Link to={"/login"}>Login</Link> */}
        <button id="butt1" style={{border:"none",background:"none",position:"absolute",left:"86%",marginTop:"12px"}} onMouseEnter={()=>{setsign(true)
        dispatch(showlogin(true))}}  ><PermIdentityIcon/></button>
        <button style={{border:"none",background:"none",position:"absolute",left:"88%",marginTop:"5px"}} onClick={()=>{
          dispatch(hidenavbar(false))
          navigate("/cart")
          
        }}onMouseEnter={()=>setsign(false)}><CustomizedBadges/></button>

    </div>

    </Mynavbar>
    
  )
  return(
    <div></div>
  )
}