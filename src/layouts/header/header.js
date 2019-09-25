import React from 'react';
import { SearchInput, Notification } from './index';

const Header = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src='images/logo.svg' alt="Logo" className="logo__photo"/>
                <h3 className="logo__name">React</h3>
            </div>
            <SearchInput/>
            <Notification/>
        </header>
    )
}

export default Header;
