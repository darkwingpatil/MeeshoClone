import {CurrCart,Updatedtotal} from "./Actiontypes"
import{Loaddata,Savedata} from "../../utils/localstorage"

const initstate={
    cartdata:Loaddata("cart")||[],
    total:Loaddata("total")||0,
}
export const Cartreducer=(state=initstate,action)=>{
    console.log(action,"inCartreducer")
    switch(action.type){
        case CurrCart:{
            const update=[...state.cartdata,action.payload]
            Savedata("cart",update)
            let sum=0;
            update.map((ele)=>{
                sum=sum+ele.rate;
            })
            Savedata("total",sum)
            return{
                ...state,
                cartdata:update,
                total:sum,
            }
        }
        case Updatedtotal:{
            const currdata=Loaddata("cart")
            console.log(currdata,"inupdatereducer")
            currdata.map((ele)=>{
                if(ele.id==action.payload.id)
                {
                    ele.qty=action.payload.quant;
                }
            })
            let sum=action.payload.data;
            Savedata("total",sum)
            return{
                ...state,
                cartdata:currdata,
                total:sum,
            }
        }
        
        default:{
            return state
        }
    }
    
}