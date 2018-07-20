// CartSummary.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent, this implement shouldComponentUpdate
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    componentWillMount(){
        this.recalculate(this.props);
    }
    //TODO: componentWillReceiveProps, recalculate 
    // this method is always called on parent render method on update
    componentWillReceiveProps(nextProps){
        console.log("summary next Props :", nextProps);
        console.log("summary this props  :", this.props);
        if (nextProps.amount != this.props.amount && nextProps.count != this.props.count) {
            this.recalculate(nextProps);
        }
        // if (nextProps.items != this.props.items) {
        //     console.log("too slow");
        //     this.recalculate(nextProps);
        // }
    }

    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}