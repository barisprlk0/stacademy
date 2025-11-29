import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { db } from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import '../css/mainPage.css';

function UserProfile({ currentUser }) {
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

    if (loading) {
        return (
            <div className="mainPage">
                <Navbar currentUser={currentUser} />
                <div className="container mt-5 text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Yükleniyor...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="mainPage">
                <Navbar currentUser={currentUser} />
                <div className="container mt-5 text-center">
                    <div className="alert alert-warning" role="alert">
                        Lütfen profilinizi görüntülemek için giriş yapın.
                    </div>
                </div>
            </div>
        );
    }

    const displayName = userProfile
        ? `${userProfile.name || ''} ${userProfile.surname || ''}`.trim()
        : 'Kullanıcı Bilgisi Bulunamadı';

    const displayUni = userProfile?.uni || 'Üniversite Bilgisi Yok';
    const displayDep = userProfile?.dep || 'Bölüm Bilgisi Yok';
    const profileImage = userProfile?.profilePictureUrl || 'https://picsum.photos/150/150';
    const email = userProfile?.email || currentUser.email;

    return (
        <div className="mainPage" style={{ minHeight: '100vh', backgroundColor: '#ECEFF2' }}>
            <Navbar currentUser={currentUser} />

            <div className="container mt-5">
                <div className="card shadow-sm border-0 rounded-4 p-4" style={{ backgroundColor: '#fff' }}>
                    <div className="row g-4 align-items-center">
                        {/* Sol Taraf: Profil Resmi ve Temel Bilgiler */}
                        <div className="col-md-4 text-center border-end">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="rounded-circle mb-3 shadow-sm"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                            <h3 className="fw-bold mb-1 text-dark">{displayName}</h3>
                            <p className="text-muted mb-3">{email}</p>
                            <span className="badge bg-danger rounded-pill px-3 py-2">Öğrenci</span>
                        </div>

                        {/* Sağ Taraf: Detaylı Bilgiler */}
                        <div className="col-md-8">
                            <h4 className="fw-bold mb-4 text-dark border-bottom pb-2">Profil Detayları</h4>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                                        <small className="text-muted d-block mb-1">Üniversite</small>
                                        <span className="fw-semibold text-dark">{displayUni}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                                        <small className="text-muted d-block mb-1">Bölüm</small>
                                        <span className="fw-semibold text-dark">{displayDep}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                                        <small className="text-muted d-block mb-1">Üyelik Tarihi</small>
                                        <span className="fw-semibold text-dark">
                                            {currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString('tr-TR') : '-'}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                                        <small className="text-muted d-block mb-1"></small>
                                        <span className="fw-semibold text-success">Aktif</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-end">
                                <button className="btn btn-danger fw-semibold px-4 py-2 rounded-3">
                                    Profili Düzenle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;