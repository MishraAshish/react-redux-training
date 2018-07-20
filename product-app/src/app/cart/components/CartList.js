// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    // called when parent render called on update cycle (nextProps)
    // called when this.setState on this component on update cycle
    // shouldComponentUpdate(nextProps, nextState){
    //     //return true;
    //     if (nextProps.items != this.props.items) {
    //         return true;
    //     }

    //     return false;
    // }

    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem - we can go expressions not statements*/ }
                    {  
                        items.map(item => (
                            <CartItem item={item} key={item.id} 
                            removeItem={this.props.removeItem}
                            updateItem={this.props.updateItem} />
                        ))
                     }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}