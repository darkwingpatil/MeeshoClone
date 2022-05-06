import React from 'react'
import {useNavigate,useLocation} from "react-router-dom"
import {Mobile,InputsSign,AddressBoxButton3} from "../styled"
import TextFieldSizes from "./Phoneinp"
import TextFieldSizes1 from "./Number"
import { useSelector,useDispatch } from 'react-redux'
import{storeNum} from "../../Redux/Profile/Action"
export const Login = () => {
    const state=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    console.log(state)
    const navigate=useNavigate()
    const [Number,setNumber]=React.useState()
    const location=useLocation()
    // console.log(location,"inlogin")
    // const from=location.state||"/"
    // console.log(from,"checkagain")
    const getnum=(data)=>{
        setNumber(data)
    }
  return (
      <div div className="h-screen bg-rose-100 py-20 px-3">
        <Mobile>
            <img src="orderimg.png"/>
            <h3>Sign Up to view your cart items</h3>
            <InputsSign>
             <TextFieldSizes/>
             <TextFieldSizes1 num={getnum}/>
            </InputsSign>
            <AddressBoxButton3 onClick={()=>{
              dispatch(storeNum(Number))  
           navigate("/login/otp",{state:location.state,replace:true})
       }}>Send Otp</AddressBoxButton3>
        </Mobile>
      </div>

  )
}
