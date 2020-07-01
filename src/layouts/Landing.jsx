import React from 'react';
import './Landing.css'

export default function Landing(props) {
    return (
        <div className="splash">
            {props.children}
        </div>
    )
}
