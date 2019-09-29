import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Action
import { deletUsers } from '../../action/users/usres';

const Item = ({id,name, email, location, phone, createdAt, deleteUser}) => {

    const heandleDelete = () => {
        setTimeout(() => {
            deleteUser(id);
        }, 1000);
    };

    return (
        <div>
            {id}
            <p>{name}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{phone}</p>
            <p>{moment(createdAt).format('MM/D/YYYY ')}</p>
            <Link to={`/users/edit/${id}`} >
                <button>Edit</button>
            </Link>
            <button onClick={heandleDelete}>Delete</button>
            <hr/>
        </div>
    )
}



// <table border='1'>
// <tbody>
// <tr>
// <td>avatar</td>
// <td>name</td>
// <td>email</td>
// <td>location</td>
// <td>phone</td>
// <td>create</td>
// </tr>
// </tbody>
// <tbody>
// <tr>
// <td>###</td>
// <td>{name}</td>
// <td>{email}</td>
// <td>{location}</td>
// <td>{phone}</td>
// <td>{createdAt}</td>
// </tr>
// </tbody>
// </table>


// Dispacth
const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => dispatch(deletUsers({id}))
});

export default connect(undefined, mapDispatchToProps)(Item);
