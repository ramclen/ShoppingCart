import React from "react";

export default class AddProductBar extends React.Component {
    constructor(){
        super();
    }

    add(){
        var product = {id:0, name:this._name.value, checked:true};
        this.props.onAdd(product)
    }



    render(){
        return (
            <div>
                <input type="text" ref={input=>this._name = input}/>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        )
    }
}