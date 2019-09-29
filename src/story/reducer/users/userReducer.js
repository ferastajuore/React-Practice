import _ from 'lodash';
import data from './data/data';


const userReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return _.concat(state, action.users);

        case 'DELETE_USER':
            return _.filter(state, ({id}) => id !== action.id );

        case 'EDIT_USER':
            return _.map(state, (users) => {
                if (users.id === action.id) {
                    return _.assign(users, action.updates);
                } else {
                    return users;
                }
            });

        default:
            return state;
    }
};

export default userReducer;