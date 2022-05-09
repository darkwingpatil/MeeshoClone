
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
    <div style={{position:"relative"}}>
    
            <div className={styles.jenny}>
    <div className={styles.leftNav}>
        <div className={styles.logoMeesho}><img src="https://2ballz.in/assets/images/meesho.png" alt="WebsiteLogo" onClick={()=>navigate("/")}/></div>
        <div className="App">
        {/* <i className="fa-solid fa-magnifying-glass fa-xl"></i> */}
        {/* <div>SearchIcon</div> */}



<input type="text" className={styles.input} placeholder="Try Saree,Kurti or Search Product Code" onChange={e=>{
  
  setSearchTerm(e.target.value)
  Alldata()
  sethidesea(true)}} />
<SearchIcon style={{position:"absolute",left:"42%",marginTop:"15px"}}/>


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
    <div className={styles.RightNav}>
        <ul>
            <li className={styles.download}><a href="#"><i class="bi bi-phone-fill"></i> Download 
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
            <li><a href="#"><i class="bi bi-shop"></i>Become a Supplier</a></li>
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
        <button style={{border:"none",background:"none",position:"absolute",left:"86%",marginTop:"12px"}} onMouseEnter={()=>{setsign(true)
        dispatch(showlogin(true))}}  ><PermIdentityIcon/></button>
        <button style={{border:"none",background:"none",position:"absolute",left:"88%",marginTop:"5px"}} onClick={()=>{
          dispatch(hidenavbar(false))
          navigate("/cart")
          
        }}onMouseEnter={()=>setsign(false)}><CustomizedBadges/></button>


    </div>


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
        <div>
        <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <a className="nav-item dropdown" href="#">Home <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item dropdown">
            <div className="d-flex justify-content-around" id="jennystyle">
              

              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Women Western
              </a>
              </div>

              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch" id="jennystyle1">
              <div>
              <a className="dropdown-item1" >Topwear</a>

                <Link to="/"><a className="dropdown-item" >Dresses</a></Link>
                <Link to="/men"><a className="dropdown-item" >Sweater</a></Link>

               <Link to="/women">  <a className="dropdown-item" href="#">Jumpsuits</a>                   </Link>


              </div>
              <div>
              <Link to="/women"><a className="dropdown-item1">Jeans</a></Link>
               <Link to="/women"><a className="dropdown-item1">Jeggings</a></Link>
               <Link to="/women"><a className="dropdown-item1">Palazzos</a></Link>
               <Link to="/women"><a className="dropdown-item1">Shorts</a></Link>
               <Link to="/women"><a className="dropdown-item1">Skrits</a></Link>
              </div>
              <div>
              <Link to="/women"><a className="dropdown-item1">Innerwear</a></Link>
              <Link to="/women"><a className="dropdown-item1">Bra</a></Link>
              <Link to="/women"><a className="dropdown-item1">Briefs</a></Link>
              </div>

              

              <div>
              <Link to="/women"><a className="dropdown-item1">Sleepwear</a></Link>
              <Link to="/women"><a className="dropdown-item1">Nightsuits</a></Link>
              <Link to="/women"><a className="dropdown-item1">babydolls</a></Link>
              </div>  
                </div>
                </div>
                </li>
                <li className="nav-item dropdown">
                  
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Jewellery & Accessories
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch ">
              <div>
              <a className="dropdown-item1" href="#" >Jewellery</a>
                <a className="dropdown-item" href="#">Jewellery Set</a>
                <a className="dropdown-item" href="#">Mangalsutras</a>
                <a className="dropdown-item" href="#">Studs</a>
                <a className="dropdown-item" href="#">Rings</a>
                <a className="dropdown-item" href="#">Anklets</a>
                <a className="dropdown-item" href="#">Bangles</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Women Accessory</a>
              <a className="dropdown-item" href="#">Bags</a>
              <a className="dropdown-item" href="#">Watches</a>
              <a className="dropdown-item" href="#">Hair Accessories</a>
              <a className="dropdown-item" href="#">Sunglasses</a>
              <a className="dropdown-item" href="#">Socks</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#"></a>
              </div>
              </div>

              </div>
            </li>

              <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Men
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <Link to="/mens"><a className="dropdown-item1">Top</a></Link>
              <Link to="/mens"><a className="dropdown-item1">All Top Wear</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Tshirts</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Shirts</a></Link>
               <Link to="/mens"><a className="dropdown-item1">Top</a></Link>
              </div>
              <div>
              <Link to="/mens"><a className="dropdown-item1">Bottom Wear</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Track Pants</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Jeans</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Trousers</a></Link>
              </div>

              <div>
              <Link to="/mens"><a className="dropdown-item1">Men Accsessories</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Watches</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Belts</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Wallets</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Jewellery</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Sunglasses</a></Link>
              <Link to="/mens"><a className="dropdown-item1">Bags</a></Link>
              </div>
              <div>
              <Link to="/mens"><a className="dropdown-item1">Bags</a></Link>
              <Link to="/mens"><a className="dropdown-item">Men Footwear</a></Link>
              <Link to="/mens"><a className="dropdown-item">Sports Shoes</a></Link>
              <Link to="/mens"><a className="dropdown-item">Formal Shoes</a></Link>
              <Link to="/mens"><a className="dropdown-item">Sandals</a></Link>
              </div>
              <div>
              <Link to="/mens"><a className="dropdown-item1">Ethnic Wear</a></Link>
              <Link to="/mens"><a className="dropdown-item">Men Kurtas</a></Link>
              <Link to="/mens"><a className="dropdown-item">Ethnic Jackets</a></Link>
              </div>

              </div>

              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Beauty & Health
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Make up</a>
                <a className="dropdown-item" href="#">Face</a>
                <a className="dropdown-item" href="#">Eyes</a>
                <a className="dropdown-item" href="#">Lips</a>
                <a className="dropdown-item" href="#">Nails</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Wellness </a>
              <a className="dropdown-item" href="#">Sanitizers</a>
              <a className="dropdown-item" href="#">Oral Care</a>
              <a className="dropdown-item" href="#">Feminine Hygiene </a>
              </div>

              </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bags & Footwear  
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Women Footwear</a>
                <a className="dropdown-item" href="#">Flats</a>
                <a className="dropdown-item" href="#">Bellies</a>
                <a className="dropdown-item" href="#">juttis</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Men Footwear </a>
              <a className="dropdown-item" href="#">Sports Shoes</a>
              <a className="dropdown-item" href="#">Formal Shoes</a>
              <a className="dropdown-item" href="#">Sandals </a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Women Bags </a>
              <a className="dropdown-item" href="#">Handbag </a>
              <a className="dropdown-item" href="#">Clutches </a>
              <a className="dropdown-item" href="#">Slingbags </a>

              </div>

              </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Home & Kitchen  
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Home Furnishing</a>
                <a className="dropdown-item" href="#">Bedsheets</a>
                <a className="dropdown-item" href="#">Doormats</a>
                <a className="dropdown-item" href="#">Curtains & Sheers</a>
                <a className="dropdown-item" href="#">Mattress Protectors</a>
              </div>
              <div>
              <a className="dropdown-item1" href="#">Home Decor </a>
              <a className="dropdown-item" href="#">All Home Decor</a>
              <a className="dropdown-item" href="#">Stickers</a>
              <a className="dropdown-item" href="#">Clocks </a>
              <a className="dropdown-item" href="#">Showpieces</a>

              </div>
              <div>
              <a className="dropdown-item1" href="#">Kitchen & Dining </a>
              <a className="dropdown-item" href="#">Kitchen Storage </a>
              <a className="dropdown-item" href="#">Cookware & Bakeware </a>

              </div>
              </div>

              </div>
              
            </li>
            <li className="nav-item dropdown">
              <a className="navbar-brand" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Kids
              </a>
              <div className="dropdown-menu" aria-labelledby="mensstyle">
              <div className="d-flex align-items-stretch">
              <div>
              <a className="dropdown-item1" href="#" >Toys & Accessories</a>
                <a className="dropdown-item" href="#">Soft Toys</a>
                <a className="dropdown-item" href="#">Footwear</a>
                <a className="dropdown-item" href="#">Stationery</a>
                <a className="dropdown-item" href="#">Watches</a>

              </div>
              <div>
              <Link to="/kids"><a className="dropdown-item1">Infant 0-2 Years</a></Link>
              <Link to="/kids"><a className="dropdown-item1">Baby Care</a></Link>
              <Link to="/kids"><a className="dropdown-item1">All Baby Care</a></Link>
              </div>
              <div>
              <Link to="/kids"><a className="dropdown-item1">Infant 0-2 Years</a></Link>
              <Link to="/kids"><a className="dropdown-item1">Trousers</a></Link>
              </div>
              </div>

              </div>
            </li>
          </ul>
        </div>
        
      </nav>
      
    </div>








        </div>
    </div>
    
  )
  return(
    <div>

    </div>
  )
}