import React from "react";
import {NavLink} from "react-router-dom";
//functional or view or presentational component
// React just call this method, get virtual dom
export default function Header(props){
    console.log("log header", props);
    return (
        <div>
            <h2>{props.appTitle}</h2>
            {/* todo: navigation buttons */}
            <NavLink to="/" exact className="button" activeClassName="success" >Home  </NavLink>
            <NavLink to="/cart" className="button" activeClassName="success" >Cart  </NavLink>
            <NavLink to="/reduxcart" className="button" activeClassName="success" >Redux Cart  </NavLink>
            <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
            <NavLink to="/products" className="button" activeClassName="success">Product  </NavLink>
            <NavLink to="/checkout" className="button" activeClassName="success">CheckOut  </NavLink>
            <hr/>
        </div>
    )
}