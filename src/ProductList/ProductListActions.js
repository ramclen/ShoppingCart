/*
 * action types
 */

import ProductListApi from "./ProductListApi";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const POST_PRODUCT = 'POST_PRODUCTS';
let productListApi = new ProductListApi();
/*
 * action creators
 */
//TODO Change it
let nextID = 0;


function postProduct() {
    return {type: POST_PRODUCT};
}

export function addProduct(name) {
    return {type: ADD_PRODUCT, id:nextID++, name};
}

export function requestRemoveProduct(product) {
    nextID--;
    return {type: REMOVE_PRODUCT, id:product.id};
}

export function receiveProducts(products) {
    return {type:RECEIVE_PRODUCTS, products}
}

export function requestProducts() {
    return {type:REQUEST_PRODUCTS}
}

export function toggleProduct(productID) {
    return { type: TOGGLE_PRODUCT, productID}
}

export function fetchProducts() {
    return dispatch => {
        dispatch(requestProducts());
        return productListApi.getAll()
            .then((products)=> {
                nextID = getNextID(products);
                dispatch(receiveProducts(products));
            });
    }
}

export function createProduct(name) {
    return dispatch =>{
        dispatch(postProduct());
        return productListApi.add({id: nextID++, name, checked:false})
            .then(()=>{
                dispatch(fetchProducts())
            })
    }
}

export function updateProduct(product) {
    return dispatch =>{
        return productListApi.update(product)
            .then(() => {
                dispatch(fetchProducts());
            });
    }
}

export function removeProduct(product) {
    return dispatch =>{
        return productListApi.remove(product)
            .then(() => {
                dispatch(fetchProducts());
            });
    }
}

let getNextID = function (products) {
    let lastID = products.reduce(function(biggest, product) {
        return (product.id > biggest) ? product.id : biggest;
    }, 0);
    return lastID + 1;
};