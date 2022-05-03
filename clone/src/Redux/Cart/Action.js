import {CurrCart,Updatedtotal} from "./Actiontypes"



export const currcart=(payload)=>{
    return{
        type:CurrCart,
        payload
    }
}

export const updatedtotal=(payload)=>{
    return{
        type:Updatedtotal,
        payload
    }
}