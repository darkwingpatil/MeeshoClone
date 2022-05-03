import {CurrCart} from "./Actiontypes"



export const currcart=(payload)=>{
    return{
        type:CurrCart,
        payload
    }
}