import {connect} from "react-redux";
import {addProduct} from "./actions";
import AddableProductList from "../component/Product/AddableProductList";

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: product => {
            dispatch(addProduct(product))
        }
    }
}

const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddableProductList)

export default ProductList;