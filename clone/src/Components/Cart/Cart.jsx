import React from 'react'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{Cartnav,Tag,Carthr,Wrapper,SmallBox,CartData,CartData1,InsideSmall,Hidden,Updateddetails,Savechanges,Close,Address} from "../styled"
import { useSelector,useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import InfoIcon from '@mui/icons-material/Info';
import{updatedtotal} from "../../Redux/Cart/Action"
import{Link,useNavigate} from "react-router-dom"
import{hidenavbar} from "../../Redux/Cart/Action"
// "/cart/address/2"

export const Cart = ({path,str,id,show,istrue}) => {
  console.log(istrue,"kya dekha")
  // const state=useSelector((state)=>state.cartdata)
  const {cartdata,total}=useSelector((state)=>state.cart)
  
  // const[total,setotal]=React.useState()
  const dispatch=useDispatch()
  const[del,setdel]=React.useState(false)
  const[dis,setdis]=React.useState(false)
  //for updating and setting the cart
  const[UpdateCart,setupdate]=React.useState({})
  const [quant,setquant]=React.useState(1)
  const[ishidden,setHidden]=React.useState(true)
  const x11=Number(show)||0;
  const navigate=useNavigate()
  const startUpdate=(ele)=>{
    setupdate(ele)
    console.log(UpdateCart,"this is where i'll we updating the data")
  }
  //"/cart/address/3/payment/summary"
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
         <Tag onClick={()=>{
           dispatch(hidenavbar(true))
           navigate("/")}}>meesho</Tag>
         <Wrapper><HorizontalLabelPositionBelowStepper id={id?id:0}/></Wrapper>
       </Cartnav>
    <hr style={{backgroundColor:"lightgray",height: "1px", border: 0,}}/>
    </div>
    
    <SmallBox>
      <div style={{display:"flex"}}>
        <h4>Cart</h4>
        <hr/>
        <h4>{(cartdata!=null)?cartdata.length:0} Item</h4>
      </div>
    </SmallBox>
    <Cartnav>
      {
        cartdata!=null?
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
      </div>:
      <div></div>
      }
   

    {/* <hr style={{height:"220px",position:"absolute",right:"45%",top:"-15%"}}/> */}
    <Carthr/>
    <div style={{width:"300px",position:"absolute",right:"20%",top:"-20%",lineHeight:"10px"}}>
      <h4 style={{marginRight:"64%",width:"150px"}}>Price Details</h4>
      <InsideSmall >
        <p>Product Charges</p>
        <p>{total+50}</p>
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
        <p>1st Order Discount <InfoIcon onMouseEnter ={()=>setdis(!dis)} fontSize="small"/></p>
        <div style={{position:"absolute",top:"72%"}}>{show?<p>MarginPrice +  ₹{show} Added!</p>:""}</div>
        <Hidden val={dis}>
          <h3>1ST ORDER DISCOUNT</h3>
          <hr/>
          <p>1st Order Discount: 15% Discount (Max. ₹50)</p>
          
        </Hidden>
        <p>- ₹50</p>
      </InsideSmall>
      <InsideSmall>
        <h4>Order Total</h4>
        <p style={{marginTop:"10px"}}>{total+x11}</p>
      </InsideSmall>
    </div>
    <Address length={(cartdata!=null)?cartdata.length:0}>
    <button  onClick={()=>{
          if(istrue==true)
          {
            dispatch(hidenavbar(true))
          }
      navigate(path?path:"/cart/address/2")
  }} style={{border:"none",background:"none",color:"white"}}>
      {str?str:"Checkout"}
    </button>
    </Address>

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
            <h5 style={{width:"150px",marginTop:"5%"}}>{UpdateCart.type}</h5>
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

