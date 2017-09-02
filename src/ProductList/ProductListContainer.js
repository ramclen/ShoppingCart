import {connect} from "react-redux";
import {addProduct, createProduct, fetchProducts} from "./ProductListActions";
import AddableProductList from "./AddableProductList";

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: product => {
            dispatch(createProduct(product));
        },
        getProducts: ()=>{
            dispatch(fetchProducts());
        }
    }
}

const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddableProductList)

export default ProductList;