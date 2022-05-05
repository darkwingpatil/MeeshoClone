import React from 'react'
import{Summary} from "./Summary"

export const Orderdone = () => {
  return (
    <div>
        <img src="/orderdone.png" style={{position:"absolute",left:"6%",top:"12%",zIndex:"2"}}/>
        <Summary given={"Placed"} vat={"/"} ischeck={true}/>
    </div>
  )
}
