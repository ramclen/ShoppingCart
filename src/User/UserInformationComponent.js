import React from 'react';
import GSpreadSheets from "../GSpreadSheets";
import {Paper, RaisedButton, TextField} from "material-ui";

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
            <Paper zDepth={3} style={{padding:"20px 0", textAlign:"center", width:"500px", height:"200px",position: "absolute",top:0,bottom: 0,left: 0,right: 0,margin: "auto"}}>
                <div>
                    <img src={'http://www.learnersdictionary.com/media/ld/images/legacy_print_images/basket.gif'} alt="main"/>
                </div>
                <TextField floatingLabelText={"Your Drive ID"} value={this.state.spreadSheet} onChange={this.setSpreadSheetChange.bind(this)} type="text"/>
                <RaisedButton label={"Go!"} secondary={true} onClick={this.setSpreadSheet.bind(this)} />
            </Paper>
        )
    }

}