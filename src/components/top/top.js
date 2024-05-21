import React from 'react';
import { Link } from 'react-router-dom';
import './top.css';

const Top = () => {
    return (
        <div className='wrapper'>
            <div className='btn_group'>
                <Link to="/" className='top'>Main</Link>
                <Link to="/info" className='top'>Company info</Link>
                <Link to="/employees-list" className='top'>Workers</Link>
                <Link to="/contacts" className='top'>Contacts</Link>
            </div>
        </div>
    )
}

export default Top;
