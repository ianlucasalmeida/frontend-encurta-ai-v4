// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ children, userName }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header userName={userName} />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;