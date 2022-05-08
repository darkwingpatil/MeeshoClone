import {IsAuth,StoreNum,ShowLogin} from "./Actiontypes"

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

export const showlogin=(payload)=>{
    return{
        type:ShowLogin,
        payload
    }
}
