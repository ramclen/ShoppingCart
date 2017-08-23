import {connect} from "react-redux";
import {toggleProduct} from "./actions";
import ProductRow from "../component/Product/ProductRow";

const mapDispatchToProps = dispatch => {
    return {
        toggleProduct: productID => {
            dispatch(toggleProduct(productID))
        }
    }
}

const Product = connect(
    ()=>{ return {}},
    mapDispatchToProps
)(ProductRow)

export default Product;