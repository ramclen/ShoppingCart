import React from 'react'

export default class ProductRow extends React.Component{

    change() {
        this.props.toggleProduct(this.props.product.id)
    }

    render(){
        return (
            <div>
                <p>{this.props.product.name}</p>
                <input type="checkbox"
                       checked={this.props.product.checked}
                       onChange={this.change.bind(this)}
                />
            </div>
        )
    }
}