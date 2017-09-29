import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App/App";
import { Provider } from 'react-redux'
import store from "./src/App/AppStore"
import injectTapEventPlugin from 'react-tap-event-plugin';

require('offline-plugin/runtime').install();
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
    module.hot.accept("./src/App/App", () => {
        const NextApp = require("./src/App/App").default
        render(NextApp)
    })
}