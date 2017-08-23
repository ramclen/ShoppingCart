import React from 'react'
import Product from "../../redux/ProductContainer";

export default class ProductList extends React.Component{
    constructor(){
        super();
    }

    _toProductRowList(products){
        var productRows = []
        products.forEach((product, index)=>{
            productRows.push(<li key={index}><Product product={product} /> </li>);
        })
        return productRows;
    }

    render(){
        return (
            <ol>
                {this._toProductRowList(this.props.products)}
            </ol>
        )
    }
}