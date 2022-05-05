import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{AddressBoxButton1,CartData2,Cartnav,Tag,Wrapper,SmallBox,HiddMargin,CartData,CartData1,InsideSmall,Marginaldata,ResellingButton,Hidden,Updateddetails,Reselling,Cod,Savechanges,Close,AddressAll,Paymentdiv} from "../styled"
import {Sidedetails} from "./Sidedetail"
import { useSelector,useDispatch } from 'react-redux'
import{Cart} from "./Cart"
export const Summary = () => {
  const {id}=useParams()
  const {cartdata,total,address}=useSelector((state)=>state)
  const navigate=useNavigate()
  console.log(address)
  return (
    <div>
     <Cart id={3} str={"Place Order"} path={"/cart/address/3/payment/summary/done"}/>
     <h3 style={{position:"absolute",left:"20%",bottom:"30%"}}>Delivery Address</h3>
     <CartData2>
       <div>
       <h3>{address.name}</h3>
       <p>{address.houseno} {address.road} {address.city}</p>
       <p>{address.state} {address.pincode}</p>
       <p>+91 {address.phone}</p>
       </div>
       <div>
         <button onClick={()=>{
           navigate("/cart/address/2")
         }}>
           Edit
         </button>
       </div>
     </CartData2>
    </div>
  )
}
