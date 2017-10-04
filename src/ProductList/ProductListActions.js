/*
 * action types
 */
import ProductListApi from "./ProductListApi";
import OfflineRequestQueue from "../OfflineRequestQueue";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const POST_PRODUCT = 'POST_PRODUCTS';

let productListApi = new ProductListApi();
let queue : OfflineRequestQueue = new OfflineRequestQueue(3000);
queue.run();
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

export function requestUpdateProduct(product) {
    return { type: UPDATE_PRODUCT, product}
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
    return (dispatch, getState) =>{
        dispatch(requestUpdateProduct(product));
        return productListApi.update(product)
            .then(() => {
                return dispatch(fetchProducts());
            },()=>{
                console.error("Connection fail, add request to queue");
                queue.addRequest(UPDATE_PRODUCTS, ()=>updateProducts(getState))
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

function updateProducts(getState) {
    return productListApi.updateList(getState().products);
}

let getNextID = function (products) {
    let lastID = products.reduce(function(biggest, product) {
        return (product.id > biggest) ? product.id : biggest;
    }, 0);
    return lastID + 1;
};
