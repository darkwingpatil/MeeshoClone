import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {isAuth} from "../../Redux/Profile/Action"
import { useNavigate,useLocation } from 'react-router-dom'
export const Otp = () => {
    const [count,setval]=React.useState(0)
    const {number} =useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location,"inloginotp")
    const from=location.state||"/"
    console.log(from,"checkagain")
  return (
    <div className="h-screen bg-rose-100 py-20 px-3">
    <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
                <div className="bg-white h-64 py-3 rounded text-center">
                      <h1 className="text-2xl font-bold">OTP Verification</h1>
                      <div className="flex flex-col mt-4">
                          <span>Enter the OTP you received at</span>
                          <span className="font-bold">+91 {number}</span>
                      </div>
                      
                      <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" onChange={()=>setval(count+1)}/> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" onChange={()=>setval(count+1)} /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" onChange={()=>setval(count+1)} /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" onChange={()=>setval(count+1)} />
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" onChange={()=>setval(count+1)}/> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" onChange={()=>{setval(count+1)
            if(count>=5){
                dispatch(isAuth(true))

                setTimeout(()=>{
                    navigate(from,{replace:true})
                },1000)
                
            }}} />
                      </div>
                      
                      <div className="flex justify-center text-center mt-5" >
                          <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer" onClick={()=>{
                              alert("New Otp has been sent")
                          }}><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}