import React from "react";//. is current directory nothing means node directory and its a deafult export in react
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

import Cart from "./cart/components/Cart";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";
//react-dom does the diffing and creating of 
export default class App extends React.Component{ //components must always be capital case
    //react keyword
    // create amd return virtual dom
    // render(){ //Very expensive
    //     console.log("App Container");
    //     return React.createElement("h1", {id:'header1'},
    //                                  'Welcome to react');
    // }

    constructor(){
        super(); //ES6 must to generate proptoype chain

        //State, mutating data, owned by this component
        // state is a react keyword
        this.state = {
            appTitle: 'Product App',
            year: 2008
        }
    }

    //Composition : App is the parent component
    //Header and Footer is child component

    //JSX => Javascript + XML
    //JSX shall convert to Javascript at build time
    render(){
        return(
            <Router>
                <div>
                    {/* share data with child using props */}
                    
                    <Header appTitle={this.state.appTitle}/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/cart" exact component={Cart}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>


                    {/* <Cart/>
                    <Home startValue={100} appTitle={this.state.appTitle}/>
                    <About /> */}
                    <Footer appTitle={this.state.appTitle} year={this.state.year}>
                        {/* content view */}
                        <p>Contact Time: 8:00 AM to 5:00 PM</p>
                        <p>Hello Footer</p>
                    </Footer>
                </div>
            </Router>
        )
    }
}