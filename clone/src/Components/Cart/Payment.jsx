import React from 'react'
import { useParams } from 'react-router-dom'
import{Cartnav,Tag,Wrapper,SmallBox,CartData,CartData1,InsideSmall,Hidden,Updateddetails,Savechanges,Close,AddressAll} from "../styled"
import HorizontalLabelPositionBelowStepper from "./Cartstepper"
import {Sidedetails} from "./Sidedetail"
export const Payment = () => {
    const {id} =useParams()
  return (
    <div>
      <Cartnav>
      <Tag>meesho</Tag>
      <Wrapper><HorizontalLabelPositionBelowStepper id={id}/></Wrapper>
     </Cartnav>
     <div>
     <div>
     <hr style={{height:"280px",position:"absolute",right:"44%",top:"17%"}}/>
     <Sidedetails/>
     </div>
     </div>
    </div>
  )
}

