import React from 'react';
import { Header, Sidebar } from './layouts';
import './styles/main.scss';

const App = () => (
    <div className="app">
        <Header/>
        <Sidebar/>
    </div>
);

export default App;