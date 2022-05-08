import React from 'react'
import{Summary} from "./Summary"

export const Orderdone = () => {
  return (
    <div>
        <img src="/orderdone.png" style={{position:"absolute",left:"15%",top:"14%",zIndex:"2"}}/>
        <Summary given={"Placed"} vat={"/"} ischeck={true}/>
    </div>
  )
}
