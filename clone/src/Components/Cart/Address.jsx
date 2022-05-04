import React from 'react'
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import{Cartnav,Tag,Wrapper,SmallBox,CartData,CartData1,InsideSmall,Hidden,Updateddetails,Savechanges,Close,AddressAll} from "../styled"
import { useParams,Link } from 'react-router-dom'
import FormPropsTextFields from "./formdata"
import {Sidedetails} from "./Sidedetail"
export const Address = () => {
    const param=useParams()
    console.log(param)
  return (
      <>
      <div>
     <Cartnav>
      <Tag>meesho</Tag>
      <Wrapper><HorizontalLabelPositionBelowStepper id={param.id}/></Wrapper>
     </Cartnav>
     <hr style={{backgroundColor:"lightgray",height: "1px", border: 0,}}/>
     </div>
     <div>
     <FormPropsTextFields/>
     <hr style={{height:"520px",position:"absolute",right:"44%",top:"17%"}}/>
     <Sidedetails/>
     </div>
     
      </>
  )
}
