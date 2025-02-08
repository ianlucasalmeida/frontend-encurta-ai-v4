// src/pages/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';

function Home() {
    const [url, setUrl] = useState('');
    const [shortenedLinks, setShortenedLinks] = useState([]);
    const userName = "João"; // Simulação de nome do usuário logado

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/shorten', { url });
            setShortenedLinks([...shortenedLinks, response.data]);
        } catch (error) {
            console.error('Erro ao encurtar link:', error);
        }
    };

    return (
        <Layout userName={userName}>
            <h2>Encurtar Link</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Insira sua URL"
                />
                <button type="submit">Encurtar</button>
            </form>

            <h3>Links Encurtados</h3>
            {shortenedLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
            ))}
        </Layout>
    );
}

export default Home;