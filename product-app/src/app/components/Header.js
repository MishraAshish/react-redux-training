import React from "react";

//functional or view or presentational component
// React just call this method, get virtual dom
export default function Header(props){
    console.log("log header");
    return (
        <div>
            <h2>{props.appTitle}</h2>
            {/* todo: navigation buttons */}
            <hr/>
        </div>
    )
}