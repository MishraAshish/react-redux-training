import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    onTextChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        console.log("rendering");
        return(
            <div>
                <h2>About</h2>
                <input name="memberName" 
                   value={this.state.name} onChange={this.onTextChange}/>
                </div>
        )
    }
}