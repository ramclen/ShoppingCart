import React from 'react'

export default class ProductRow extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.product.name}</p>
                <input type="checkbox" checked={this.props.product.checked}/>
            </div>
        )
    }
}