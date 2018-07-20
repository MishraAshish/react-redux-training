import React from "react";
import PropTypes from "prop-types";
//functional or view or presentational component
// React just call this method, get virtual dom
export default function Footer(props){
    console.log("log footer", props);
    
    //deconstruct
    let {appTitle, year} = props;

    return (
        <div>
            <hr/>
            <p>Copyright@ {year + 10}, {appTitle + 300}</p>
            {props.children}
        </div>
    )
}

//propTypes keyword
Footer.propTypes = {
    appTitle: PropTypes.string,
    year: PropTypes.number.isRequired   
}

//defaultProps keyword
Footer.defaultProps ={
    appTitle: "React App"
}