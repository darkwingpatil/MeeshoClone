import { style } from "@mui/system"
import {IsAuth,StoreNum,ShowLogin} from "./Actiontypes"
import{Loaddata,Savedata} from "../../utils/localstorage"

const InitState={
    auth:Loaddata("auth")||false,
    number:Loaddata("number")||0,
    showlog:false
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
                number:val,
                showlog:false
            }
        }
        case StoreNum:{
            let val=Loaddata("auth")
            Savedata("number",action.payload)
            return{
                ...state,
                auth:val,
                number:action.payload,
                showlog:false

            }
        }
        case ShowLogin:{
            let val1=Loaddata("auth")
            let val2=Loaddata("number")
            return{
                ...state,
                auth:val1,
                number:val2,
                showlog:action.payload
            }
        }
        default:{
            return state
        }
    }

}