import React from "react";
import {Routes,Route} from "react-router-dom"
import{Productdetail} from "../Components/Product"
import{Mendetail} from "../Components/mens"
import{Womendetail} from "../Components/Women"
import{Kidsdetail} from "../Components/kids"
import{Cart} from "../Components/Cart/Cart"
import {Address} from "../Components/Cart/Address"
import { Payment } from "../Components/Cart/Payment";
import { Summary } from "../Components/Cart/Summary";
import{Orderdone} from "../Components/Cart/Orderdone"
import {Login} from "../Components/Signup/Login"
import{Otp} from "../Components/Signup/Loginotp"
import {PrivateRouter} from "../Router/PrivateRouter"
export const MainRouter=()=>{
return(
    <Routes>
        <Route path="/" element={<Productdetail/>}></Route>
        <Route path="/men" element={<Mendetail/>}></Route>
        <Route path="/women" element={<Womendetail/>}></Route>
        <Route path="/kids" element={<Kidsdetail/>}></Route>
        <Route path="/login/*" element={<Login/>}></Route>
        <Route path="/login/:name" element={<Otp/>}></Route>
        <Route path="/cart/*" element={<PrivateRouter><Cart/></PrivateRouter>}></Route>
        <Route path="/cart/:name/:id" element={<PrivateRouter><Address/></PrivateRouter>}></Route>
        <Route path="/cart/:name/:id/:name1" element={<PrivateRouter><Payment/></PrivateRouter>}></Route>
        <Route path="/cart/:name/:id/:name1/:name2" element={<PrivateRouter><Summary/></PrivateRouter>}></Route>
        <Route path="/cart/:name/:id/:name1/:name2/:name3" element={<PrivateRouter><Orderdone/></PrivateRouter>}></Route>
        
    </Routes>
)
}