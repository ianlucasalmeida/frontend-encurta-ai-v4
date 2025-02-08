// src/components/LinkCard.js
import React from 'react';

function LinkCard({ link }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: '#f9f9f9'
        }}>
            <p><strong>Original:</strong> {link.url}</p>
            <p><strong>Encurtado:</strong> <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">{link.shortUrl}</a></p>
            <p><strong>Data de Criação:</strong> {new Date(link.createdAt).toLocaleDateString()}</p>
            <p><strong>Acessos:</strong> {link.accessCount || 0}</p>
        </div>
    );
}

export default LinkCard;