import React from 'react';
import { faComments, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from '../../assets/images/avatar/cat.jpg';

const Notification = () => {
    return (
        <div className="user-nav">
            <div className="user-nav__icon-box">
                <FontAwesomeIcon className="user-nav__icon" icon={faComments} size="2x" />
                <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
                <FontAwesomeIcon className="user-nav__icon" icon={faBell} size="2x" />
                <span className="user-nav__notification">13</span>
            </div>

            <div className="user-nav__user">
                <img src={Avatar} alt="avatar" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Feras Tajuore</span>
            </div>
        </div>
    )
};

export default Notification;
