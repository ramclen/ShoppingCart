import GSpreadSheets from "../GSpreadSheets";

/*
 * action types
 */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
var spreadSheet = GSpreadSheets.instance();

/*
 * action creators
 */
//TODO Change it
let lastID = 987;

export function addProduct(name) {
    return {type: ADD_PRODUCT, id:lastID++, name};
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
        return spreadSheet.getDataFrom("page", "A2:E")
            .then(result => result.values)
            .then(values => values.map(
                ([id, name, checked]) => {
                    return {id, name, checked:checked==="TRUE"}
                }
            ))
            .then(products=> dispatch(receiveProducts(products)));
    }
}