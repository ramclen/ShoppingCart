import {connect} from "react-redux";
import {toggleProduct, updateProduct} from "../ProductList/ProductListActions";
import ProductRow from "./ProductRow";

const mapDispatchToProps = dispatch => {
    return {
        toggleProduct: product => {
            product.checked = !product.checked;
            dispatch(updateProduct(product))
        }
    }
}

const Product = connect(
    undefined,
    mapDispatchToProps
)(ProductRow)

export default Product;