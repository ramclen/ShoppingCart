/*
 * action types
 */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

/*
 * action creators
 */

export function addProduct(product) {
    return {type: ADD_PRODUCT, product };
}

export function toggleProduct(productID) {
    return { type: TOGGLE_PRODUCT, productID}
}