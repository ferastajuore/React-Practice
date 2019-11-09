import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';

// Action
import { deletUsers } from '../../action/users/usres';

const Item = ({id,name, email, location, phone, createdAt, deleteUser}) => {

    const heandleDelete = () => {
        setTimeout(() => {
            deleteUser(id);
        }, 1000);
    };

    return (
        <tbody className="table__tbody">
        <tr className="table__row">
            <td className="table__body">{name}</td>
            <td className="table__body">{email}</td>
            <td className="table__body">{location}</td>
            <td className="table__body">{phone}</td>
            <td className="table__body">{moment(createdAt).format('MM/D/YYYY ')}</td>
            <td className="table__body">
                <Link to={`/users/edit/${id}`} >
                    <Icon className="fas fa-user-edit table__icon table__icon-edit" />
                </Link>
                <Icon onClick={heandleDelete} className="fas fa-trash-alt table__icon table__icon-delete" />
            </td>
        </tr>
        </tbody>
    )
}


// Dispacth
const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(deletUsers({id}))
});

export default connect(undefined, mapDispatchToProps)(Item);
