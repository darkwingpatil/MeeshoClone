import React from "react";
import {Routes,Route} from "react-router-dom"
import{Productdetail} from "../Components/Productdetail"
import{Cart} from "../Components/Cart/Cart"
import {Address} from "../Components/Cart/Address"
import { Payment } from "../Components/Cart/Payment";
export const MainRouter=()=>{
return(
    <Routes>
        <Route path="/" element={<Productdetail/>}></Route>
        <Route path="/cart/*" element={<Cart/>}></Route>
        <Route path="/cart/:name/:id" element={<Address/>}></Route>
        <Route path="/cart/:name/:id/:name1" element={<Payment/>}></Route>
    </Routes>
)
}