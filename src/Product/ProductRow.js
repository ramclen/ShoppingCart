import React from 'react'
import {Checkbox, IconButton, ListItem} from "material-ui";
import {ActionDelete} from "material-ui/svg-icons/index";

export default class ProductRow extends React.Component{

    change() {
        this.props.toggleProduct(this.props.product)
    }

    remove(){
        //TODO
    }

    render(){
        return (
            <ListItem
                rightIconButton={<IconButton onClick={this.remove.bind(this)}><ActionDelete/></IconButton>}
                leftCheckbox={<Checkbox checked={this.props.product.checked} onCheck={this.change.bind(this)}/>}
                primaryText={this.props.product.name} />
        )
    }
}