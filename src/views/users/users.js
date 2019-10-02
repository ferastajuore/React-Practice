import React from 'react';
import { Link } from 'react-router-dom';
import List from './list';

const Users = ({match}) => {
    return (
        <div className="users">
            <h2 className="heading-secondary">Components Users</h2>
            <List/>
            <Link to={`${match.url}/create`}>
                <button className="btn btn--info">Create</button>
            </Link>
        </div>
    )
}

export default Users;
