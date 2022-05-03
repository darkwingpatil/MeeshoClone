import {legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import{Cartreducer} from "./Cart/Reducer"


const middleware1=(store)=>(next)=>(action)=>{
    next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware1),
  // other store enhancers if any
);

export const store=createStore(Cartreducer,enhancer)