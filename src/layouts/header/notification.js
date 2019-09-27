import React from 'react';

const Notification = () => {
    return (
        <div className="user-nav">
            <div className="user-nav__icon-box">
                <i className="fas fa-comments fa-2x user-nav__icon"></i>
                <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
                <i className="fas fa-bell fa-2x user-nav__icon"></i>
                <span className="user-nav__notification">13</span>
            </div>

            <div className="user-nav__user">
                <img src="images/avatar/cat.jpg" alt="avatar" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Feras Tajuore</span>
            </div>
        </div>
    )
};

export default Notification
