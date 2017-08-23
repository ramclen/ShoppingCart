import { combineReducers } from 'redux'
import {
    ADD_PRODUCT,
    TOGGLE_PRODUCT
} from './ProductListActions'

function addProducts(state, action) {
    return [
        ...state,
        {id:action.id, name:action.name, checked:false}
    ]
}

function toggleProduct(state, action) {
    return  state.map(product=>{
            if(product.id == action.productID)
                return Object.assign({}, product, {
                    checked : !product.checked
                });
            return product;
        });
}

const PRODUCTS_REDUCER_ACTION = {
    [ADD_PRODUCT]: addProducts,
    [TOGGLE_PRODUCT]: toggleProduct,
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