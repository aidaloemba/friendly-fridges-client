import React from 'react';
import NavbarRegular from '../components/NavbarRegular';

export default function DefaultLayout(props) {
    return (
        <div>
            <NavbarRegular />
            {props.children}
        </div>
    )
}

