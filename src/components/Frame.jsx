import React from "react";


const Frame = (props) => {
    return ( 
        <>
            <head>
                <title>{props.title}</title>
            </head>
            {props.children}
        </>
     );
}
 
export default Frame;