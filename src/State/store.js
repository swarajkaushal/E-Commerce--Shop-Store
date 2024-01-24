import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import authReducer from "./Action/Reducer";
import { customerProductReducer } from "./Coutumers/Product/Reducer";
import { cartReducer } from "./Coutumers/Cart/Reducer";
import { orderReducer } from "./Coutumers/Orders/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import productReducer from "./Admin/Product/Reducer";
const rootReducers=combineReducers({
    auth:authReducer,
    products: customerProductReducer,
    cart:cartReducer,
    order:orderReducer,

    // admin
    adminsProduct:productReducer,
    adminsOrder:adminOrderReducer
})



export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))