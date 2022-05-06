import React from "react";
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{Cartnav,Tag,Wrapper,SmallBox,CartData,CartData1,InsideSmall,Hidden,Updateddetails,Savechanges,Close,Address} from "../styled"
import { useSelector,useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import InfoIcon from '@mui/icons-material/Info';
import{updatedtotal} from "../../Redux/Cart/Action"
import{Link} from "react-router-dom"


export const Sidedetails=()=>{
    const {total,cartdata}=useSelector((state)=>state.cart)
    console.log(total,"in sidedetails")
    const[del,setdel]=React.useState(false)
    const[dis,setdis]=React.useState(false)

    return(
    <div style={{width:"300px",position:"absolute",right:"20%"}}>
      <h3 style={{marginRight:"62%"}}>Price Details</h3>
      <InsideSmall >
        <p>Product Charges</p>
        <p>{total}</p>
      </InsideSmall>
      <InsideSmall>
        <p>Delivery Charges <InfoIcon onMouseEnter ={()=>setdel(!del)} fontSize="small"/></p>
        <Hidden val={del}>
          <h3>DELIVERY CHARGES</h3>
          <hr/>
          <InsideSmall>
          <p>Total Weight</p>
          <p>0.40 KG</p>
         </InsideSmall>
         <InsideSmall>
          <p>Shipping Price</p>
          <p>₹0</p>
         </InsideSmall>
        </Hidden>
        <p>+ ₹0</p>
      </InsideSmall>
      <InsideSmall>
        <p>1st Order Discoun <InfoIcon onMouseEnter ={()=>setdis(!dis)} fontSize="small"/></p>
        <Hidden val={dis}>
          <h3>1ST ORDER DISCOUNT</h3>
          <hr/>
          <p>1st Order Discount: 15% Discount (Max. ₹50)</p>
        </Hidden>
        <p>- ₹50</p>
      </InsideSmall>
      <InsideSmall>
        <h3>Order Total</h3>
        <p>{total-50}</p>
      </InsideSmall>
    </div>
    
    )
}