import uuid from 'uuid';

// ADD_USERS
export const addUsers = ({
    username = '',
    email = '',
    location = '',
    phone = '', 
    createdAt = undefined
} = {}) => ({
    type: 'ADD_USERS',
    users: {
        id: uuid(),
        username,
        email,
        location,
        phone,
        createdAt
    }
});


// DELETE_USRES
export const deletUsers = ({id} = {}) => ({
    type: 'DELETE_USERS',
    id
});


// EDIT_USRES
export const editUsers = (id, updates) => ({
    type: 'EDIT_USRES',
    id,
    updates
});
