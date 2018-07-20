import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props){
        super(props);//best practice
        this.state = {
            title:props.appTitle,
            counter: props.startValue
        }
    //ES7: create this method once per instance
    // bind this context as well
    this.incrementBy2 = this.incrementBy2.bind(this);        
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

    render(){
        //this.props is keyword
        console.log("Home render",this.state.counter);
        return(
            <div>
                <h2>{this.state.title}</h2>
                <p>Current Counter : {this.state.counter}</p>
                <hr/>
                {/* events take call back function  
                    ()=> functions created on every render 
                */}
                {<button onClick={()=>this.increment()}>increment</button>}
                <hr/>
                {<button onClick={this.incrementBy2}>increment 2</button>}

                <hr/>
                {<button onClick={this.decrement}>Decrement </button>}

                <hr/>

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