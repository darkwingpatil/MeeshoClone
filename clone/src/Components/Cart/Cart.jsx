import React from 'react'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{Cartnav,Tag,Wrapper,SmallBox,CartData,CartData1,InsideSmall,Hidden,Updateddetails,Savechanges,Close} from "../styled"
import { useSelector,useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import InfoIcon from '@mui/icons-material/Info';
import{updatedtotal} from "../../Redux/Cart/Action"
export const Cart = () => {
  // const state=useSelector((state)=>state.cartdata)
  const {cartdata,total}=useSelector((state)=>state)
  // const[total,setotal]=React.useState()
  const dispatch=useDispatch()
  const[del,setdel]=React.useState(false)
  const[dis,setdis]=React.useState(false)
  //for updating and setting the cart
  const[UpdateCart,setupdate]=React.useState({})
  const [quant,setquant]=React.useState(1)
  const[ishidden,setHidden]=React.useState(true)
  const startUpdate=(ele)=>{
    setupdate(ele)
    console.log(UpdateCart,"this is where i'll we updating the data")
  }
//   setTimeout(()=>{
//   let sum=0;
//   state.map((ele)=>{
//     sum=sum+ele.rate
//   })
// setotal(sum)
// },1000)
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
        <h3>{cartdata.length} Item</h3>
      </div>
    </SmallBox>
    <Cartnav>
    <div>
      {
        cartdata.map((ele)=>{
          return(
            <CartData key={uuidv4()}>
            <div><img src={ele.imgUrl}/></div>
            <div>
            <h3>{ele.type}</h3>
            <p>Qty:{ele.qty}</p>
            <p>₹ {ele.rate}</p>
            </div>
            <div>
              <button onClick={()=>{startUpdate(ele)
              setHidden(false)}}>Edit</button>
            </div>
            </CartData>
          )
        })
      }
    </div>
    <hr style={{height:"220px",position:"absolute",right:"45%",top:"-15%"}}/>
    <div style={{width:"300px",position:"absolute",right:"20%",top:"-20%",lineHeight:"10px"}}>
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

    {
      <Updateddetails val={ishidden}>
        <InsideSmall>
          <p style={{fontWeight:"bold",paddingLeft:"10px"}}>EDIT ITEM</p>
          <Close onClick={()=>{
            setquant(1)
            setHidden(true)
          }}>X</Close>
        </InsideSmall>
            <CartData1>
            <div><img src={UpdateCart.imgUrl}/></div>
            <div>
            <h3>{UpdateCart.type}</h3>
            <p>₹ {UpdateCart.rate}</p>
            <span style={{display:"flex",justifyContent:"center"}}><p style={{marginTop:"3%",marginRight:"10px"}}>Size</p>
            <select style={{height:"50%"}}>
              <option>--</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            </span>
            </div>
            <div>
            <InsideSmall className='updatebutton'>
            <p style={{marginTop:"3%",marginRight:"10px"}}>Qty</p>
            <button onClick={()=>{
              setquant((prev)=>{
                if(prev==1)
                {
                  return 1
                }
                else
                {
                  return prev-1;
                }
              })
            }}>-</button>
            <div>{quant}</div>
            <button onClick={()=>setquant(quant+1)}>+</button>
            </InsideSmall >
            </div>
            </CartData1>
            <InsideSmall style={{border:"1px solid lightgray"}}>
              <h3 style={{marginLeft:"10px"}}>Total Price</h3>
              <h3 style={{marginRight:"10px"}}>{total+(UpdateCart.rate*quant)-UpdateCart.rate}</h3>
            </InsideSmall>
            <div>
            <Savechanges onClick={()=>{
                let data=total+(UpdateCart.rate*quant)-UpdateCart.rate-50
                console.log(UpdateCart.id,"here it is")
                let id=UpdateCart.id
                dispatch(updatedtotal({data,quant,id}))
                setquant(1)
                setHidden(true)
              }}>Save Changes</Savechanges>
            </div>

      </Updateddetails>
    }
   
    </>

            
  )
}

