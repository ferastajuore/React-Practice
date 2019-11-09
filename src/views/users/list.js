import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';


import Items from './item';
import Aux from '../../hoc/Aux';


const List = ({users}) => {
    return (
        <Aux>
            <table className="table">
                <thead className="table__thead">
                    <tr className="table__row">
                        <th className="table__head">name</th>
                        <th className="table__head">email</th>
                        <th className="table__head">location</th>
                        <th className="table__head">phone</th>
                        <th className="table__head">create</th>
                        <th className="table__head">Control</th>
                    </tr>
                </thead>
                
                {
                    users.length === 0 ? (
                        <tbody>
                            <tr>
                                <td className = "table__massage-user" > No users to show </td>
                            </tr>
                        </tbody>
                    ) :(
                        _.map(users,(user, index) => (
                            <Items key={index} {...user}/>
                        ))
                    )
                }
            </table>
        </Aux>
    )
};

/**  States & Props
 * 
 * @param {*} state 
 * @param {*} props 
 */

const mapStateToProps = (state, props) => ({
    users: state.users
});


export default connect(mapStateToProps)(List);