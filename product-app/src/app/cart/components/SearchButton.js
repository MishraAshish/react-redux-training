// CartItem.js
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue : "TEst"
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    onTextChange = (event) => {
        this.setState({
            textValue: event.target.value
        });
    };

    componentDidMount(){
        console.log("CartItem Mounted");
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     //return true;
    //     if (nextProps.item != this.props.item ||
    //     nextState.qty != this.state.qty) {
    //         return true;
    //     }

    //     return false;
    // }

    componentWillUnmount(){
        console.log("SearchButton will unmount");
    }

    render() {
        return (
            <input value={this.state.textValue} onChange={this.onTextChange}/>
        )
    }
} 


SearchButton.defaultProps = {
    
}

SearchButton.propTypes = {
    
}