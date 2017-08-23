import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import YourComponent from "./YourComponent";
import ProductList from "../ProductList/ProductListContainer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={ProductList}/>
                            <Route path="/other/:id" component={YourComponent}/>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}