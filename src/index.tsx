import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "mobx-react";
import Api from "./services/Api";
import {jssPreset, StylesProvider, ThemeProvider} from "@material-ui/styles";
import {create} from 'jss';
import rtl from "jss-rtl";
import {createMuiTheme} from "@material-ui/core";
import SearchsStore from "./stores/SearchStore";
import TreesStore from "./stores/TreesStore";

const api = new Api();
const searchStore = new SearchsStore(api);
const treesStore = new TreesStore(api);
const stores = {
    api,
    searchStore,
    treesStore,
};
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
    direction: 'rtl',
});

ReactDOM.render(
    <Provider {...stores}>
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </StylesProvider>

    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
