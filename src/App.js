import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import YourComponent from "./component/YourComponent";
import Link from "react-router-dom/es/Link";

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" render={()=>
                                <div>
                                    <h2>HELLO WORLD!</h2><br/>
                                    <Link to={`/other/1`}>Other</Link>
                                </div>}
                            />
                            <Route path="/other/:id" component={YourComponent} />
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
    );
    }
}