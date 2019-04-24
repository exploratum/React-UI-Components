import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <button className = { `btn-txt ${props.style} ${props.color}`}>
            {props.text}
        </button>

    );
} 

export default NumberButton
