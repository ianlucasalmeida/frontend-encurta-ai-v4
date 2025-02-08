// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
            <h3>Menu</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">Histórico</Link></li>
                <li><Link to="/settings">Configurações</Link></li>
                <li><Link to="/login">Sair</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;