import {connect} from "react-redux";
import {removeProduct, updateProduct} from "../ProductList/ProductListActions";
import ProductRow from "./ProductRow";

const mapDispatchToProps = dispatch => {
    return {
        toggleProduct: product => {
            product.checked = !product.checked;
            dispatch(updateProduct(product))
        },
        removeProduct: product => {
            dispatch(removeProduct(product));
        }
    }
}

const Product = connect(
    undefined,
    mapDispatchToProps
)(ProductRow)

export default Product;