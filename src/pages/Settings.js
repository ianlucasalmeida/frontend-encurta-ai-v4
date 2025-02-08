// src/pages/Settings.js
import React, { useState } from 'react';
import axios from 'axios';

function Settings() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [image, setImage] = useState('');

    const handleUpdatePassword = async () => {
        try {
            await axios.put('/api/update-password', { password, newPassword });
            alert('Senha atualizada com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar senha.');
        }
    };

    const handleUpdateImage = async () => {
        try {
            await axios.put('/api/update-image', { image });
            alert('Imagem atualizada com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar imagem.');
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Tem certeza que deseja excluir sua conta?')) {
            try {
                await axios.delete('/api/delete-account');
                alert('Conta excluída com sucesso!');
                window.location.href = '/register'; // Redireciona para cadastro
            } catch (error) {
                alert('Erro ao excluir conta.');
            }
        }
    };

    return (
        <div>
            <h2>Configurações</h2>

            <h3>Alterar Senha</h3>
            <input
                type="password"
                placeholder="Senha Atual"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Nova Senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleUpdatePassword}>Atualizar Senha</button>

            <h3>Alterar Imagem de Perfil</h3>
            <input
                type="text"
                placeholder="URL da Nova Imagem"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button onClick={handleUpdateImage}>Atualizar Imagem</button>

            <h3>Excluir Conta</h3>
            <button onClick={handleDeleteAccount}>Excluir Conta</button>
        </div>
    );
}

export default Settings;