import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Items from './item';


const List = ({users}) => {
    return (
        <div>
            {
                users.length === 0 ? (
                    <p>No users to show</p>
                ) :(
                    _.map(users,(user, index) => (
                        <Items key={index} {...user}/>
                    ))
                )
            }
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    users: state.users
});

export default connect(mapStateToProps)(List);