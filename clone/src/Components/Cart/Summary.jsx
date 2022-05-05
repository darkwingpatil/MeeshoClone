import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{AddressBoxButton1,Summarypay,CartData2,Cartnav,Tag,Wrapper,SmallBox,HiddMargin,CartData,CartData1,InsideSmall,Marginaldata,ResellingButton,Hidden,Updateddetails,Reselling,Cod,Savechanges,Close,AddressAll,Paymentdiv} from "../styled"
import {Sidedetails} from "./Sidedetail"
import { useSelector,useDispatch } from 'react-redux'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import{Cart} from "./Cart"
export const Summary = ({given,vat,ischeck}) => {
  const str1=given||"Place Order"
  const pat=vat||"/cart/address/3/payment/summary/done"
  const {id}=useParams()
  const {cartdata,total,address,margin}=useSelector((state)=>state)
  const navigate=useNavigate()
  console.log(address)
  return (
    <div>
     <Cart id={3} str={str1} path={pat} show={margin} istrue={ischeck}/>
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
     <h3 style={{position:"absolute",left:"20%",bottom:"-5%"}}>Payment Mode</h3>
     <Summarypay>
       <div style={{display:"flex"}}>
         <CurrencyRupeeIcon color='success' style={{position:"absolute",top:"40%"}}/>
         <h3 style={{position:"absolute",top:"0%",left:"10%"}}>Cash on Delivery</h3>
       </div>
     </Summarypay>
    </div>
  )
}
