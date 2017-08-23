import { createStore } from 'redux';
import ShoppingCartApp from '../ProductList/ProductListReducers';


var initState = {
    products : [
        {id:0, name:"Milk", checked:false},
        {id:1, name:"Bread", checked:true},
        {id:2, name:"Water", checked:false}
    ]
}

let store = createStore(ShoppingCartApp, initState);

export default store;