import React from 'react';
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar({ isAuth }) {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };
    const goToRegister = () => {
        navigate('/register');
    };
    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="navbar">
            <div className="navbar-brand" onClick={goToHome} style={{ cursor: 'pointer' }}>Ana Sayfa</div>
            <div className="navbar-center">
                <a onClick={goToHome} className="navbar-link" >Ders Al</a>
                <a href="#" className="navbar-link">Ders Ver</a>
            </div>
            <div className="navbar-right">
                
                    <div className="navbar-auth-links">
                        <a onClick={goToRegister} className="navbar-link">Kayıt Ol</a>
                        <a onClick={goToLogin} className="navbar-link">Giriş Yap</a>
                    </div>
                
                    <div className="navbar-profile">
                        <img src="https://picsum.photos/50/50" alt="Profile" className="navbar-profile-img" />
                        <div className="navbar-profile-info">
                            <span className="navbar-profile-name">Barış Parlak</span>
                            <span className="navbar-profile-role ">Akdeniz Üniversitesi<br />CSE</span>
                        </div>
                    </div>
               
            </div>
        </div>
    );
}

export default Navbar;
