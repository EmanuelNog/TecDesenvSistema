import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import './login_styles.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('session',{email,password});
            
            localStorage.setItem('userId',res.data.id);

            history.push('/calendar');
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }


    return (
        <div className="login-container">
            <div className="content">
                <section>
                    <h1>Login</h1>
                    <p> </p>
                </section>
                <form onSubmit={handleLogin}>
                    <input placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit"> Entrar </button>
                    <Link className="back-link" to="/register">
                        <h4>Nao tenho cadastro.</h4>
                    </Link>
                </form>
                
            </div>
        </div>

    );
}