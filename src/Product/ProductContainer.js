import {connect} from "react-redux";
import {toggleProduct} from "../ProductList/ProductListActions";
import ProductRow from "./ProductRow";

const mapDispatchToProps = dispatch => {
    return {
        toggleProduct: productID => {
            dispatch(toggleProduct(productID))
        }
    }
}

const Product = connect(
    undefined,
    mapDispatchToProps
)(ProductRow)

export default Product;