import _ from 'lodash';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return _.concat(state, action.users);
        default:
            return state;
    }
}

export default userReducer;