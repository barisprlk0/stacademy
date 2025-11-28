import React from 'react';
import '../css/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">Ana Sayfa</div>
            <div className="navbar-center">
                <a href="#" className="navbar-link">Ders Al</a>
                <a href="#" className="navbar-link">Ders Ver</a>
            </div>
            <div className="navbar-right">
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
