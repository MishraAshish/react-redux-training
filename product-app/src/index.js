//bootstrapping
import React from 'react';//virtual dom handling
import ReactDom from 'react-dom';//diffing fetching

import App from './app/App'; //virtual dom

let root = document.getElementById('root'); //Real DOM , index.html

//- unidirectional - v dom to real dom (not vice versa)

ReactDom.render(<App />, root);