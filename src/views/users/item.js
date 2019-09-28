import React from 'react';
import moment from 'moment';

const Item = ({id,name, email, location, phone, createdAt}) => {
    return (
        <div>
            {id}
            <p>{name}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{phone}</p>
            <p>{moment(createdAt).format('MM/D/YYYY ')}</p>
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

export default Item
