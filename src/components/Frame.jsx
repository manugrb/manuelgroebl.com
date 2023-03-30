import React from "react";


const Frame = (props) => {
    return ( 
        <>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"></meta>
                
                <title>{props.title}</title>

                <meta name="description" content={props.description}></meta>
                <meta name="author" content={props.author ? props.author : "@manugrb"}></meta>
                <meta name="keywords" content={props.keywords ? props.keywords : "Manuel Groebl, Manuel Grobl, Manuel Gröbl, manugrb, full-stack,developer,javascript,web,backend"}></meta>
            </head>
            {props.children}
        </>
     );
}
 
export default Frame;