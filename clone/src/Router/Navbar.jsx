import React from 'react'
import{Link} from "react-router-dom"
import CustomizedBadges from "../Components/Cart/Carticon"
export const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}><CustomizedBadges/></Link>
    </div>
  )
}
