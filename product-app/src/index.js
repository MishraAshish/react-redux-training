//bootstrapping
import React from 'react';//virtual dom handling
import ReactDom from 'react-dom';//diffing fetching

import App from './app/App'; //virtual dom
import store from "./app/configureStore";
import {Provider} from "react-redux";

let root = document.getElementById('root'); //Real DOM , index.html

//- unidirectional - v dom to real dom (not vice versa)

// Provider shall pass store object to containers

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    root);