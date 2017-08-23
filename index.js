import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import { Provider } from 'react-redux'
import store from "./src/redux/store"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const rootEl = document.getElementById('container');

const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        rootEl
    );

render(App);

if (module.hot) {
    module.hot.accept("./src/App", () => {
        const NextApp = require("./src/App").default
        render(NextApp)
    })
}