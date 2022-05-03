import React from 'react'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{Cartnav,Tag,Wrapper,SmallBox,CartData,InsideSmall,Hidden} from "../styled"
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import InfoIcon from '@mui/icons-material/Info';
export const Cart = () => {
  const state=useSelector((state)=>state.cartdata)
  const[total,setotal]=React.useState()
  const[del,setdel]=React.useState(false)
  const[dis,setdis]=React.useState(false)
  console.log(state,"in Cart PAGE")

setTimeout(()=>{
  let sum=0;
  state.map((ele)=>{
    sum=sum+ele.rate
  })
  setotal(sum)
},1000)
  return (
    <>
    <div>
        <Cartnav>
         <Tag>meesho</Tag>
         <Wrapper><HorizontalLabelPositionBelowStepper/></Wrapper>
       </Cartnav>
    <hr style={{backgroundColor:"lightgray",height: "1px", border: 0,}}/>
    </div>
    
    <SmallBox>
      <div style={{display:"flex"}}>
        <h3>Cart</h3>
        <hr/>
        <h3>{state.length} Item</h3>
      </div>
    </SmallBox>
    <Cartnav>
    <div>
      {
        state.map((ele)=>{
          return(
            <CartData key={uuidv4()}>
            <div><img src={ele.imgUrl}/></div>
            <div>
            <h3>{ele.type}</h3>
            <p>Qty:{ele.qty}</p>
            <p>₹ {ele.rate}</p>
            </div>
            <div>
              <button>Edit</button>
            </div>
            </CartData>
          )
        })
      }
    </div>
    <hr style={{height:"220px",position:"absolute",right:"45%",top:"-25%"}}/>
    <div style={{width:"300px",position:"absolute",right:"20%",top:"-30%",lineHeight:"10px"}}>
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
    </Cartnav>
   
    </>

            
  )
}

