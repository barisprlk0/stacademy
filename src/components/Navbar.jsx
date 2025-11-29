import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase.js';


function Navbar({currentUser}) {



    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (currentUser && currentUser.uid) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                    if (userDoc.exists()) {
                        setUserProfile(userDoc.data());
                    }
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [currentUser]);

    const goToHome = () => {
        navigate('/');
    };
    const goToRegister = () => {
        navigate('/register');
    };
    const goToLogin = () => {
        navigate('/login');
    };
    const logout = () =>{
        try{
        signOut(auth);
        }
        catch(err){
            console.error(err);
        }
    }

    const displayName = userProfile 
        ? `${userProfile.name || ''} ${userProfile.surname || ''}`.trim() 
        : 'AD SOYAD BİLGİSİ';
    
    const displayUni = userProfile?.uni || 'ÜNİ BİLGİSİ';
    const displayDep = userProfile?.dep || 'CSE';
    const profileImage = userProfile?.profilePictureUrl || 'https://picsum.photos/50/50';

    return (
        <div className="navbar mt-0" >
            <div className="navbar-brand navbar-link fw-bold" onClick={goToHome}>Ana Sayfa</div>
            <div className="navbar-center">
                <a href="#" className="navbar-link">Ders Ver</a>
                <a href="#" onClick={logout} className="navbar-link">Çıkış Yap</a>
            </div>



            <div className="navbar-right">
        {currentUser ? (
                    <div className="navbar-profile">
                        <img src={profileImage} alt="Profile" className="navbar-profile-img" />
                        <div className="navbar-profile-info">
                            <span className="navbar-profile-name">{displayName}</span>
                            <span className="navbar-profile-role">{displayUni} <br />{displayDep}</span>
                        </div>
                    </div>
              ) : (
                    <div className="navbar-auth-links">
                        <a onClick={goToRegister} className="navbar-link">Kayıt Ol</a>
                        <a onClick={goToLogin} className="navbar-link">Giriş Yap</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
