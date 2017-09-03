import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserInformationComponent from "../User/UserInformationComponent";
import ProductList from "../ProductList/ProductListContainer";
import {AppBar} from "material-ui";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Shopping List"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Router>
                        <div>
                            <Route exact path="/" component={UserInformationComponent}/>
                            <Route  path="/Products" component={ProductList}/>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}