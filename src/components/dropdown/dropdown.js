import React from 'react'

import './dropdown.css'

function dropdown(props) {
    return (
        <a href="#" className="menu-item">
            {props.children}
        </a>
    )
}

export default dropdown
