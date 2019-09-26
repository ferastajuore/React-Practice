import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ImageIcon from '@material-ui/icons/Image';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';

import { NavLink } from 'react-router-dom';

const Sidebarnav = () => {

    const pages = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: <DashboardIcon/>
        },
        {
            title: 'Users',
            href: '/users',
            icon: <PeopleAltIcon/>
        },
        {
            title:'Products',
            href: '/products',
            icon: <ShoppingBasketIcon/>
        },
        {
            title: 'Typography',
            href: '/typography',
            icon: <ImageIcon/>
        },
        {
            title: 'Chat Room',
            href: '/chat',
            icon: <ChatIcon/>
        },
        {
            title: 'Notifications',
            href: '/notifications',
            icon: <NotificationsActiveIcon/>
        },
        {
            title: 'Settings',
            href: '/settings',
            icon: <SettingsIcon/>
        },
    ]

    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {
                    pages.map((page, index) => (
                        <li key={index} className="side-nav__item">                          
                            <NavLink to={page.href} className="side-nav__link" activeClassName="side-nav__link--active">
                                <span className="side-nav__icon">{page.icon}</span>
                                <span>{page.title}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Sidebarnav
