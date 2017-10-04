import { combineReducers } from 'redux'
import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS, POST_PRODUCT
} from './ProductListActions'

function addProducts(state, action) {
    return [
        ...state,
        {id:action.id, name:action.name, checked:false}
    ]
}

function updateProduct(state, action) {
    return  state.map(product=>{
            if(product.id == action.product.id)
                return Object.assign({}, product, {
                    name : product.name,
                    checked : product.checked
                });
            return product;
        });
}

function requestProduct(state, action){
    return  [...state];
}

function postProduct(state, action){
    return  [...state];
}

function receiveProduct(state, action){
    return action.products;
}

const PRODUCTS_REDUCER_ACTION = {
    [POST_PRODUCT]: postProduct,
    [ADD_PRODUCT]: addProducts,
    [UPDATE_PRODUCT]: updateProduct,
    [REQUEST_PRODUCTS]: requestProduct,
    [RECEIVE_PRODUCTS]: receiveProduct,
    ["DEFAULT"] : state=>state
};

let findReducer = function (state=[], action={type:""}) {
    if(!PRODUCTS_REDUCER_ACTION[action.type])
        return PRODUCTS_REDUCER_ACTION["DEFAULT"](state, action)

    return PRODUCTS_REDUCER_ACTION[action.type](state, action);
};

const ShoppingCartApp = combineReducers({
    products : findReducer,
});

export default ShoppingCartApp;