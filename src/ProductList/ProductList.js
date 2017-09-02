import React from 'react'
import Product from "../Product/ProductContainer";
import {List, Paper} from "material-ui";

export default class ProductList extends React.Component{
    constructor(){
        super();
    }

    _toProductRowList(products){
        var productRows = []
        products.forEach((product, index)=>{
            productRows.push(<Product key={index} product={product} />);
        })
        return productRows;
    }

    render(){
        return (
            <Paper style={{maxHeight: "72vh", overflow: 'auto'}}>
                <List >
                    {this._toProductRowList(this.props.products)}
                </List>
            </Paper>
        )
    }
}