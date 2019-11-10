import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faUserEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { deletUsers } from '../../action/users/usres';  // Action
import { Spinner } from '../../components/UI';

const Item = ({id,name, email, location, phone, createdAt, deleteUser}) => {

    const [loading, setLoading] = useState(false);

    const heandleDelete = () => {
        setLoading(true);
        // Delete Data
        setTimeout(() => {
            deleteUser(id);
        }, 3000);
    };

    return (
        <tbody className="table__tbody">
            {loading && <Spinner />}
            <tr className="table__row">
                <td className="table__body">{name}</td>
                <td className="table__body">{email}</td>
                <td className="table__body">{location}</td>
                <td className="table__body">{phone}</td>
                <td className="table__body">{moment(createdAt).format('MM/D/YYYY ')}</td>
                <td className="table__body">
                    <Link to={`/users/edit/${id}`} >
                        <FontAwesomeIcon className="table__icon table__icon-edit" icon={faUserEdit} size="1x"/>
                    </Link>
                    <FontAwesomeIcon onClick={heandleDelete} className="table__icon table__icon-delete" icon={faTrashAlt} size="1x" />
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
