import React, { useContext, useState } from 'react'
import '../assets/styles/loginpage.scss'
import Book from '../assets/img/book.png'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';



const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/");
        } catch (error) {
            alert("Oppss! Login failed!");
            setUsername("");
            setPassword("");
        }
    }

    return (
        <div className='main-page'>
            <div className="animate">
                <h3>Boost</h3>
                <h3>Online-6</h3>
                <h3>Kütüphanesi</h3>
                <img src={Book} alt="book" className="book" />
                <img src={Book} alt="book" className="book1" />
                <img src={Book} alt="book" className="book2" />

            </div>
            <form onSubmit={handleLogin}>
                <h3>Giriş Yap</h3>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Kullanıcı Adı' />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Parola' />
                <input type="submit" value="Giriş" />
                <Link to="/">Giriş yapmadan devam etmek için tıklayınız...</Link>
            </form>
        </div>
    )
}

export default LoginPage