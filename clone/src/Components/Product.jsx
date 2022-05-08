import React from 'react'
import data from "../db.json"
import{Grid} from "./styled"
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux'
import {currcart} from "../Redux/Cart/Action"
import { useNavigate } from 'react-router-dom'
import{Profile,Profilebutton,InputsSign,Alldone,Childdel,Chilrating} from "./styled"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import{isAuth} from "../Redux/Profile/Action"
import{showlogin} from "../Redux/Profile/Action"
export const Productdetail = () => {
const dispatch=useDispatch()
const state=useSelector((state)=>state.cart)
console.log(state,"inpdp")
console.log(data,"inpdp now seeing")
const clickeddata=(ele)=>{
    dispatch(currcart(ele))
}
const{auth,number,showlog}=useSelector((state)=>state.auth)
const navigate=useNavigate()
const [showsign,setsign]=React.useState(false)
  return (
      <Alldone>

<Profile see={showlog} onMouseLeave={()=>dispatch(showlogin(false))} className="hogya">
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
        </Profile>

      <Grid onMouseEnter={()=>dispatch(showlogin(false))} >
      
        {
            data.mensTshirt.map((ele)=>{
                return(
                    <div key={uuidv4()} onClick={()=>clickeddata(ele)}>
                        <img src={ele.imgUrl}/>
                        <p style={{color:"#b7a499"}}>{ele.type}</p>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
                        <h3>₹{ele.rate}</h3>
                        <p style={{color:"#b7a499"}}>onwards</p>
                        </div>
                        <Childdel><p>Free delivery</p></Childdel>
                        <div style={{display:"flex",justifyContent:"center",gap:"20px",margin:"5%"}}>
                        <Chilrating><p>{ele.rating}</p></Chilrating>
                        <div style={{marginTop:"5px"}}><p style={{color:"#b7a499"}}>{ele.review}</p></div>
                        </div>
                        {/* <button onClick={()=>clickeddata(ele)}>AddtoCart</button> */}
                    </div>
                )
            })
        }
                
    </Grid>
        <Grid onMouseEnter={()=>dispatch(showlogin(false))}>
        {
            data.jeans.map((ele)=>{
                return(
                    <div key={uuidv4()}>
                        <img src={ele.imgUrl}/>
                        <p>{ele.type}</p>
                        <p>{ele.rate}</p>
                        <button onClick={()=>clickeddata(ele)}>AddtoCart</button>
                    </div>
                )
            })
        }
    </Grid>
    <Grid onMouseEnter={()=>dispatch(showlogin(false))}>
        {
            data.data.map((ele)=>{
                return(
                    <div key={uuidv4()}>
                        <img src={ele.imgUrl}/>
                        <p>{ele.type}</p>
                        <p>{ele.rate}</p>
                        <button onClick={()=>clickeddata(ele)}>AddtoCart</button>
                    </div>
                )
            })
        }
    </Grid>

      </Alldone>
    
  )
}
