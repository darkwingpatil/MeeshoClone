import React from 'react'
import data from "../db.json"
import{Grid} from "./styled"

import{Profile,Profilebutton,InputsSign,Alldone,Childdel,Chilrating,Aftersub,AfterCont} from "./styled"
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux'
import {currcart} from "../Redux/Cart/Action"
import { useNavigate } from 'react-router-dom';
import List1 from "./Signup/Footer"
export const Mendetail = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
const state=useSelector((state)=>state.cart)
console.log(state,"inpdp")
console.log(data,"inpdp now seeing")
// const clickeddata=(ele)=>{
//     dispatch(currcart(ele))
// }
  return (
      <>
       <Grid>
        {
            data.mensTshirt.map((ele)=>{
                return(
                    <AfterCont key={uuidv4()} onClick={()=>navigate(`/men/mensTshirt/${ele.id}`)}>
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
                    </AfterCont>
                )
            })
        }
    </Grid>
    <List1/>
    </>
   
    
  )
}