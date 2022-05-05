import {CurrCart,Updatedtotal,Marginadd,Addressdata,HideNavbar} from "./Actiontypes"



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

export const addressadd=(payload)=>{
    return{
        type:Addressdata,
        payload
    }
}

export const marginadd=(payload)=>{
    return{
        type:Marginadd,
        payload
    }
}

export const hidenavbar=(payload)=>{
    return{
        type:HideNavbar,
        payload
    }
}