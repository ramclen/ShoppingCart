import {connect} from "react-redux";
import {addProduct, createProduct} from "./ProductListActions";
import AddableProductList from "./AddableProductList";

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: product => {
            dispatch(createProduct(product))
        }
    }
}

const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddableProductList)

export default ProductList;