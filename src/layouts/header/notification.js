import React from 'react';
import Icon from '@material-ui/core/Icon';

import Avatar from '../../assets/images/avatar/cat.jpg';

const Notification = () => {
    return (
        <div className="user-nav">
            <div className="user-nav__icon-box">
                <Icon className="fas fa-comments user-nav__icon" fontSize="large"/>
                <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
                <i ></i>
                <Icon className="fas fa-bell fa-2x user-nav__icon" fontSize="large"/>
                <span className="user-nav__notification">13</span>
            </div>

            <div className="user-nav__user">
                <img src={Avatar} alt="avatar" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Feras Tajuore</span>
            </div>
        </div>
    )
};

export default Notification
