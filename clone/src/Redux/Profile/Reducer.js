import { style } from "@mui/system"
import {IsAuth,StoreNum} from "./Actiontypes"
import{Loaddata,Savedata} from "../../utils/localstorage"

const InitState={
    auth:Loaddata("auth")||false,
    number:Loaddata("number")||0
}

export const Authreducer=(state=InitState,action)=>{
    switch(action.type)
    {
        case IsAuth:{
            let val=Loaddata("number")
            Savedata("auth",action.payload)
            return{
                ...state,
                auth:action.payload,
                number:val
            }
        }
        case StoreNum:{
            let val=Loaddata("auth")
            Savedata("number",action.payload)
            return{
                ...state,
                auth:val,
                number:action.payload

            }
        }
        default:{
            return state
        }
    }

}