import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer } from './reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            // Here is All Reducers
            users: userReducer
        }),
        composeEnhancers(applyMiddleware())
    );

    return store;
};