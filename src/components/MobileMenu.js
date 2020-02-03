import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <h2>Mobile 홈</h2>
                <li><NavLink exact to='/' activeStyle={activeStyle}>Mobile Home</NavLink></li>
                <li><NavLink exact to='/about' activeStyle={activeStyle}>Mobile About</NavLink></li>
                <li><NavLink to='/about/foo' activeStyle={activeStyle}>Mobile About Foo</NavLink></li>
                <li><NavLink to='/posts' activeStyle={activeStyle}>Mobile Posts</NavLink></li>
            </ul>
            <hr />
        </div>
    )
}

export default MobileMenu;