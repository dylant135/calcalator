import React from "react";

export default function Display(props) {
    return (
        <div className="display">
            <h2 className="current">{props.current}</h2>
            <h3 className="prev">{props.prev}</h3>
        </div>
    )
}