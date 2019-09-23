import React from 'react';
import { Header, Sidebar, Footer } from './layouts';
import './styles/main.scss';

const App = () => (
    <div className="app">
        <div className="header">
            <Header/>
        </div>
        <div className="content">
            <Sidebar className="sidebar" />
        </div>
    </div>
);

export default App;