import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Header } from './layouts';
import configureStore from './story/reducer';
import Routeing from './Router';
import './styles/main.scss';

// Action For Testing
import { addUsers } from './action/users/usres';

const store = configureStore();

// Dispatch For Testing
store.dispatch(addUsers({
    id: 1,
    username: 'nedal',
    email: 'nedal@info.com',
    location: 'libya',
    phone: 123000,
    createdAt: 123456
}));

const App = () => (
    <div className="app">
        <Provider store={store}>
            <Routers>
                <Header/>
                <Routeing/>
            </Routers>
        </Provider>
    </div>
);

export default App;