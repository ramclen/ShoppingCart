import React from "react";

export default class AddProductBar extends React.Component {
    constructor(){
        super();
    }

    add(){
        this.props.onAdd(this._name.value)
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