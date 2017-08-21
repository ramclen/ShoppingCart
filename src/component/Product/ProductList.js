import React from 'react'
import ProductRow from "./ProductRow";

export default class ProductList extends React.Component{
    constructor(){
        super();
    }

    _toProductRowList(products){
        var productRows = []
        products.forEach((product, index)=>{
            productRows.push(<li key={index}><ProductRow product={product} /> </li>);
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