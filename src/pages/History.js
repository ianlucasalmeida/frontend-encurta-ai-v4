// src/pages/History.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';

function History() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await axios.get('/api/history');
                setLinks(response.data);
            } catch (error) {
                console.error('Erro ao buscar histórico:', error);
            }
        };
        fetchLinks();
    }, []);

    return (
        <Layout>
            <h2>Histórico de Links Encurtados</h2>
            {links.length > 0 ? (
                links.map((link) => (
                    <LinkCard key={link.id} link={link} />
                ))
            ) : (
                <p>Nenhum link encurtado encontrado.</p>
            )}
        </Layout>
    );
}

export default History;