import React from 'react'
import{Summary} from "./Summary"

export const Orderdone = () => {
  return (
    <div>
        <img src="/orderdone.png" style={{position:"absolute",left:"10%",top:"14%",zIndex:"2",height:"60px"}}/>
        <Summary given={"Placed"} vat={"/"} ischeck={true}/>
    </div>
  )
}
