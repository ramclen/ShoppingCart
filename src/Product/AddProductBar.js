import React from "react";
import {FloatingActionButton, FontIcon, IconButton, BottomNavigation, TextField} from "material-ui";
import {ActionHome, ContentAdd} from "material-ui/svg-icons/index";

export default class AddProductBar extends React.Component {
    constructor(){
        super();
        this.state = {name:''}
    }

    add(){
        this.props.onAdd(this.state.name);
        this.setState({name: ''});
    }

    onTextChange(event){
        this.setState({name : event.target.value});
    }

    render(){
        return (
            <div style={{position:"absolute", bottom:0, width:"100vw"}}>
                <TextField style={{position:"absolute", bottom:"10px", left:"10px"}}
                    hintText="Product"
                    value={this.state.name}
                    onChange={this.onTextChange.bind(this)}
                />
                <FloatingActionButton style={{position:"absolute", bottom:"15px", right:"10px"}}
                                      mini={true} secondary={true}  onClick={this.add.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}