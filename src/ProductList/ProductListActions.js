/*
 * action types
 */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

/*
 * action creators
 */
//TODO Change it
let lastID = 987;

export function addProduct(name) {
    return {type: ADD_PRODUCT, id:lastID++, name};
}

export function toggleProduct(productID) {
    return { type: TOGGLE_PRODUCT, productID}
}