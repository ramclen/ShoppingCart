import React from 'react';
import GSpreadSheets from "../GSpreadSheets";

export default class UserInformationComponent extends React.Component{

    constructor(){
        super();
        this.state = {spreadSheet:''}
    }

    componentDidMount(){
        this.setState({spreadSheet: localStorage.getItem("previousDrive")||''});
    }

    setSpreadSheet(){
        localStorage.setItem("previousDrive", this.state.spreadSheet);
        let gSpreadSheets = GSpreadSheets.instance();
        gSpreadSheets.setSpreadSheetID(this.state.spreadSheet);
        gSpreadSheets.init()
            .then(()=> gSpreadSheets.signIn())
            .then(()=> {this.props.history.push('/Products')})
    }

    setSpreadSheetChange(event){
        this.setState({spreadSheet: event.target.value});
    }

    render(){
        return (
            <div>
                <input value={this.state.spreadSheet} onChange={this.setSpreadSheetChange.bind(this)} type="text" placeholder="insert your drive"/>
                <button onClick={this.setSpreadSheet.bind(this)}>Go!</button>
            </div>
        )
    }

}