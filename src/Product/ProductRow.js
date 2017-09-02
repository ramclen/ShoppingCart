import React from 'react'
import {Checkbox, ListItem} from "material-ui";

export default class ProductRow extends React.Component{

    change() {
        this.props.toggleProduct(this.props.product)
    }

    render(){
        return (
            <ListItem
                leftCheckbox={<Checkbox checked={this.props.product.checked} onCheck={this.change.bind(this)}/>}
                primaryText={this.props.product.name} />
        )
    }
}