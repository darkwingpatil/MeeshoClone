import {CurrCart} from "./Actiontypes"
import{Loaddata,Savedata} from "../../utils/localstorage"

const initstate={
    cartdata:[]
}
export const Cartreducer=(state=initstate,action)=>{
    console.log(action,"inCartreducer")
    switch(action.type){
        case CurrCart:{
            return{
                cartdata:[...state.cartdata,action.payload]
            }
        }
        default:{
            return state
        }
    }
    
}