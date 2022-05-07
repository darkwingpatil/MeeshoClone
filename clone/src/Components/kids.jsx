import React from 'react'
import data from "../db.json"
import{Grid} from "./styled"
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux'
import {currcart} from "../Redux/Cart/Action"
export const Kidsdetail = () => {
const dispatch=useDispatch()
const state=useSelector((state)=>state.cart)
console.log(state,"inpdp")
console.log(data,"inpdp now seeing")
const clickeddata=(ele)=>{
    dispatch(currcart(ele))
}
  return (
    <Grid>
        {
            data.data.map((ele)=>{
                return(
                    <div key={uuidv4()}>
                        <img src={ele.imgUrl}/>
                        <p>{ele.type}</p>
                        <p>{ele.rate}</p>
                        <button onClick={()=>clickeddata(ele)}>AddtoCart</button>
                    </div>
                )
            })
        }
    </Grid>
  )
}
