import React from "react";
import {Routes,Route} from "react-router-dom"
import{Productdetail} from "../Components/Productdetail"
import{Cart} from "../Components/Cart/Cart"
export const MainRouter=()=>{
return(
    <Routes>
        <Route path="/" element={<Productdetail/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
)
}