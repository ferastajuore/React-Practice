import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Header } from './layouts';
import configureStore from './story/reducer';
import Routeing from './Router';
import './styles/main.scss';

// CONFIGURE STORE
const store = configureStore();

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