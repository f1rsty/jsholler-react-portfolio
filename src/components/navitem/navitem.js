import React, { useState } from 'react'

import './navitem.css'

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default NavItem