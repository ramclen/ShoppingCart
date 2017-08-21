import React from "react";
import AddProductBar from "./AddProductBar";
import ProductList from "./ProductList";


export default class AddableProductList extends React.Component {

    constructor(){
        super();
        this.state = {products : [
            {id:0, name:"Milk", checked:false},
            {id:1, name:"Bread", checked:true},
            {id:2, name:"Water", checked:false},
        ]}
    }

    onAdd(product){
        product.id = this.getNextID();
        this.setState({products: this.state.products.concat([product])});
    }

    getNextID() {
        return this.state.products.reduce((biggest, product) => {
            return (product.id < biggest) ? biggest : product.id;
        }, 0);
    }

    render(){
        return(
            <div>
                <h2>List</h2>
                <AddProductBar onAdd={this.onAdd.bind(this)}/>
                <ProductList products={this.state.products}/>
            </div>
        )
    }
}