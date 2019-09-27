import React from 'react';
import { Link } from 'react-router-dom';
import List from './list';

const Users = ({match}) => {

    const sty = {
        fontSize: '3rem',
        color: '#0F0'
    }

    return (
        <div style={sty}>
            Components Users
            <List/>
            <Link to={`${match.url}/create`}>Create</Link>
        </div>
    )
}

export default Users;
