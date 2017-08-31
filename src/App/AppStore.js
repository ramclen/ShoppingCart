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

let spreadSheet:GSpreadSheets = GSpreadSheets.instance();
spreadSheet.setSpreadSheetID("1vG8vMA9M8bvNy6PViHRBqNU_2q5BH4bBeT94S7NreF8");
spreadSheet.handleClientLoad(function() {
    spreadSheet.init().then(()=>spreadSheet.signIn().then(()=>{
        store.dispatch(fetchProducts())
    }));
})

export default store;