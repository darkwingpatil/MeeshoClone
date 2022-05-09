import data from "../db.json";
import "./Productdetails.css"
import React from 'react'
import { useParams } from "react-router-dom";
import {currcart} from "../Redux/Cart/Action"
import { useSelector,useDispatch } from 'react-redux'

 const Productdetails11 = () => { 
  const dispatch=useDispatch()
  const clickeddata=(ele)=>{
    dispatch(currcart(ele))
}
  const params=useParams()
  let {id,name}=params
  console.log(id,name,"herecheck")
   
    let items=data[name].filter((ele)=> ele.id==id)

   let item=items[0];

    return (
        <div>
            
         {
            
             
                 <div  className="maindivv">

<div className="imdiv">
                <img src={item.imgUrl}alt="hf"/>
                <button onClick={()=>clickeddata(item)} >🛒Add To Cart</button>
              </div>

              <div className="detaildiv">

                <div className="fstd">

                <h3>{item.type}</h3>

                <div className="mony">
                  <h3>{item.rate}</h3>
                  <h3 className="scd">{item.preprice}</h3>
                  <h3>{item.off}</h3>
                </div>

                <div className="reviw">
                  <button>{item.rating}</button>
                  <p>{item.review}</p>
                </div>

                <h4>{item.discount}</h4>
                <p>Free Delivery</p>

                </div>


                <div className="size">
                  <h3>Select Size</h3>
                  <button>Free Size</button>
                </div>

                <div className="detail">
                  <h3>Product Details</h3>
                  <p>Name:{item.type}</p>
                  <p>Saree Fabric : {item.type}</p>
                  <p>Blouse Fabric : Art Silk</p>
                  <p>Pattern : Zari Woven</p>
                  <p>Blouse Pattern : Zari Woven</p>
                  <p>Net Quantity (N) : Single</p>
                  <p>Sizes : 
                   Free Size (Saree Length Size : 5.4 m, Blouse Length Size: 0.8 m)</p>
                  <p>Country of Origin : India</p>
                  <p>More Information</p>

                </div>

                <div className="soldiv">
                  <h3>Sold By</h3>
                 

                  <div className="shop">
                    <div><img src="https://findicons.com/files/icons/2770/ios_7_icons/512/shop.png" alt="dg"/></div>
                     <h3>The Silk Street</h3>
                     
                     <button>View Shop</button>
                  </div>

                  <div className="shopp">
                    <div className="kgf">
                      <button>3.7⭐</button>
                     <p> 1,430 ratings</p>
                    </div>
                    <div>
                      <p>66</p>
                      <p>Followers</p>
                    
                    </div>
                    <div>
                      <p>71</p>
                      <p>Products</p>
                      </div>
                  </div>

                  
                </div>
                
              </div>










                 </div>
             
             
             
             
         }
  
      </div>
           
              
            
               
    )
}
export default Productdetails11