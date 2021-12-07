import React from "react";

const Scroll = (props) => {
    return (
        // style is a javascript expression,
        // that is a js obj that contains CSS rules
        <div style={
            {
                overflowY: 'scroll',
                border: '1px solid black',
                height: '500px',
            }
        }>
            {props.children}
        </div>
    );
}


export default Scroll;