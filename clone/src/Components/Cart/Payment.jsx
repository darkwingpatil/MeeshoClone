import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import{AddressBoxButton1,Cartnav,Tag,Wrapper,SmallBox,HiddMargin,CartData,CartData1,InsideSmall,Marginaldata,ResellingButton,Hidden,Updateddetails,Reselling,Cod,Savechanges,Close,AddressAll,Paymentdiv} from "../styled"
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {Sidedetails} from "./Sidedetail"
import { useSelector,useDispatch } from 'react-redux';
import BasicTextFields from "./Margininput"
import{marginadd} from "../../Redux/Cart/Action"
export const Payment = () => {
  const dispatch=useDispatch()
  const {total} =useSelector((state)=>state)
    const {id} =useParams()
    const navigate=useNavigate()
    const ref1=React.useRef()
    const ref2=React.useRef()
    const [marginal,setmargin]=React.useState(0)
    const [showMar,setMar]=React.useState(false)
    const[Hidemar,sethide]=React.useState(false)
    const margin=(val)=>{
      ref2.current.style.background="#fde9f2";
      ref2.current.style.color="#f43397";
      ref1.current.style.background="white";
      ref1.current.style.color="black";
      console.log(typeof(val))
      setmargin(val)
      sethide(true)
      setTimeout(()=>{
        setMar(true)
      },3000)
      console.log(marginal-total)
    }
  return (
    <div>
      <div>
      <Cartnav>
      <Tag>meesho</Tag>
      <Wrapper><HorizontalLabelPositionBelowStepper id={id}/></Wrapper>
     </Cartnav>
     </div>
     <div>
     <hr style={{height:"280px",position:"absolute",right:"44%",top:"17%"}}/>
     <Sidedetails/>
     <AddressBoxButton1 onClick={()=>{
       if(marginal>total)
       {
         alert("Your Margin Price will be added and Final price will be printed on the invoice")
         let data=marginal-total
         dispatch(marginadd(data))
       }
       navigate("/cart/address/3/payment/summary",{replace:true})

      //  "/cart/:name/:id/:name1/name2" 
     }}>
       Continue
     </AddressBoxButton1>
     <Paymentdiv>
     <h3>Payment Method</h3>
     <Cod>
       <div style={{display:"flex"}}>
         <CurrencyRupeeIcon color='success' style={{position:"absolute",top:"38%"}}/>
         <h3 style={{position:"absolute",top:"28%",left:"5%"}}>Cash on Delivery</h3>
       </div>
       <div>
         <CheckCircleIcon color='success'/>
       </div>
     </Cod>
     <Reselling>
       <div style={{lineHeight:"5px"}}>
         <h3>Reselling the Order?</h3>
         <p style={{fontSize:"10px"}}>Click on 'Yes' to add Final Price</p>
       </div>
       <div>
         <ResellingButton ref={ref1} onClick={()=>{
           ref1.current.style.background="#fde9f2";
           ref1.current.style.color="#f43397";
           ref2.current.style.background="white";
           ref2.current.style.color="black";
           sethide(false)
         }}>No</ResellingButton>
         <ResellingButton ref={ref2} onClick={margin}>Yes</ResellingButton>
       </div>
     </Reselling>
     <HiddMargin val={Hidemar}>
     <Reselling>
       <h3>Cash to be Collected</h3>
       <BasicTextFields fun={margin}/>
     </Reselling>
     <Marginaldata val={marginal-total} show={showMar}>Your Margin :{marginal-total}</Marginaldata>
     </HiddMargin>
     </Paymentdiv>
     </div>
     </div>
  )
}

