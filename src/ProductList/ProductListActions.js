import GSpreadSheets from "../GSpreadSheets";

/*
 * action types
 */

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const POST_PRODUCT = 'POST_PRODUCTS';
var spreadSheet = GSpreadSheets.instance();

/*
 * action creators
 */
//TODO Change it
let nextID = 987;


function postProduct() {
    return {type: POST_PRODUCT};
}

export function addProduct(name) {
    return {type: ADD_PRODUCT, id:nextID++, name};
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
                    return {id:id-0, name, checked:checked==="TRUE"}
                }
            ))
            .then((products)=> {
                nextID = getNextID(products);
                dispatch(receiveProducts(products));
            });
    }
}

export function createProduct(name) {
    var product = {id: nextID++, name, checked:false}
    return dispatch =>{
        dispatch(postProduct());
        return spreadSheet.addRow("page", "A2:E", [product.id, product.name, product.checked?"TRUE":"FALSE"])
            .then(()=>{
                dispatch(fetchProducts())
            })
    }
}

let getNextID = function (products) {
    let lastID = products.reduce(function(biggest, product) {
        return (product.id > biggest) ? product.id : biggest;
    }, 0);
    return lastID + 1;
};