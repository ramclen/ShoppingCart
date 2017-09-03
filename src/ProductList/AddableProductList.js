import React from "react";
import AddProductBar from "../Product/AddProductBar";
import ProductList from "./ProductList";
import {fetchProducts} from "./ProductListActions";


export default class AddableProductList extends React.Component {

    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getProducts();
    }

    render(){
        return(
            <div>
                <ProductList products={this.props.products}/>
                <AddProductBar onAdd={this.props.onAdd}/>
            </div>
        )
    }
}