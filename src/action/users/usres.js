import uuid from 'uuid';

// ADD_USER
export const addUsers = ({
    name = '',
    email = '',
    location = '',
    phone = 0, 
    createdAt = 0
} = {}) => ({
    type: 'ADD_USER',
    users: {
        id: uuid(),
        name,
        email,
        location,
        phone,
        createdAt
    }
});


// DELETE_USER
export const deletUsers = ({id} = {}) => ({
    type: 'DELETE_USER',
    id
});


// EDIT_USER
export const editUsers = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});
