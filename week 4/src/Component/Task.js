import React from "react";
import "./ToDo.css"

export default function Task (props){

    return (
    <div className="todo-style">
        <i className="X-delete" 
        onClick={() => {
            props.onSelect(props.id)
            }
            }>X</i>

        <p className='output'>{props.text}</p>

    </div> 
    )
}