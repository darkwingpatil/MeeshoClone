import {IsAuth,StoreNum} from "./Actiontypes"

export const storeNum=(payload)=>{
    return{
        type:StoreNum,
        payload
    }
}

export const isAuth=(payload)=>{
    return{
        type:IsAuth,
        payload
    }
}
