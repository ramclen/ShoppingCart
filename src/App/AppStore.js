import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ShoppingCartApp from '../ProductList/ProductListReducers';
import {fetchProducts, requestProducts} from "../ProductList/ProductListActions";
import GSpreadSheets from "../GSpreadSheets";

const loggerMiddleware = createLogger()

var initState = {
    products : [
        {id:0, name:"Milk", checked:false},
        {id:1, name:"Bread", checked:true},
        {id:2, name:"Water", checked:false}
    ]
}

let store = createStore(
    ShoppingCartApp,
    initState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

export default store;