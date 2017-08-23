import React from "react";
import AddProductBar from "../Product/AddProductBar";
import ProductList from "./ProductList";


export default class AddableProductList extends React.Component {

    constructor(){
        super();
    }

    getNextID() {
        return this.props.products.reduce((biggest, product) => {
            return (product.id < biggest) ? biggest : product.id;
        }, 0);
    }

    render(){
        return(
            <div>
                <h2>List</h2>
                <AddProductBar onAdd={this.props.onAdd}/>
                <ProductList products={this.props.products}/>
            </div>
        )
    }
}