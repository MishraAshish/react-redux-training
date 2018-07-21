import React, {Component} from "react";
import PropTypes from "prop-types";

import store from "../configureStore";
import {addItem} from "../redux-cart/state/actions";

export default class Home extends Component {
    constructor(props){
        super(props);//best practice
        this.state = {
            title:"Home",//props.appTitle,
            counter: props.startValue
        }
    //ES7: create this method once per instance
    // bind this context as well
    this.incrementBy2 = this.incrementBy2.bind(this);        
    }

    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        const action = addItem(item);
        store.dispatch(action);
    }

    increment(){
        //BAD, mutating state directly
        console.log("log ounter", this.state.counter);
        //console.trace();
        this.state.counter ++;

        //BAD, triggers render without any check
        this.forceUpdate();
        this.forceUpdate();
        // this.setState(state){
        //     this.state.counter ++
        //     return state;
        // }
    }
    incrementBy2(){
        //GOOD
        //async
        // trigger re-render after merge state
        this.setState({
            counter: this.state.counter + 2
        })
    }
    testClick = () => {
        console.log("log ounter", this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })
    }
    //ES.Next using method 
    // create method only once per instance
    decrement = () => {
        console.log("log ounter", this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })

        this.setState({
            title: "Home 1"
        })

        console.log("log ounter", this.state.counter);
    }
    
    //update life cycle
    shouldComponentUpdate(nextProps, nextState){
        console.log("should update",nextProps, nextState)
        console.log("current state",this.state);
        console.log("next state", nextState);
        
        //return true;//calls render
        return false; // doesn't call render
    }

    componentDidMount(){
       this.unsubscribeFn = store.subscribe(() => {
            console.log("force update of component.");
            this.forceUpdate()} )
    }

    componentWillUnmount(){
        this.unsubscribeFn();
    }

    render(){
        //this.props is keyword
        console.log("Home render",this.state.counter);
        return(
            <div>
                <h2>{this.state.title}</h2>
                <p>Current Counter : {this.state.counter}</p>
                <p>Cart Length : {store.getState().items.length} </p>
                {<button onClick={this.addItem}>Add Item</button>}
                <hr/>
                {/* events take call back function  
                    ()=> functions created on every render 
                */}
                {<button onClick={()=>this.increment()}>increment</button>}
                {<button onClick={this.incrementBy2}>increment 2</button>}

                {<button onClick={this.decrement}>Decrement </button>}


                <div onClick={this.testClick}>
                <div onClick={this.testClick}>
                <div onClick={this.testClick}>
                    <button onClick={this.testClick}>Test Click</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

//propTypes keyword
Home.propTypes = {
    appTitle: PropTypes.string,
    year: PropTypes.number.isRequired   
}

//defaultProps keyword
Home.defaultProps ={
    appTitle: "React App",
    year:24
}