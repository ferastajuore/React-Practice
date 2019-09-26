import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Header } from './layouts';
import Routeing from './Router';
import './styles/main.scss';




const App = () => (
    <div className="app">
    <Routers>
        <Header/>
        <Routeing/>
    </Routers>

    </div>
);

export default App;