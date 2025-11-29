import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { db } from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import '../css/mainPage.css'; // Reusing mainPage styles for consistency

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
                    <p>Yükleniyor...</p>
                </div>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="mainPage">
                <Navbar currentUser={currentUser} />
                <div className="container mt-5 text-center">
                    <p>Lütfen profilinizi görüntülemek için giriş yapın.</p>
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
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card customCard p-5" style={{ backgroundColor: '#fff', borderRadius: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                            <div className="text-center mb-4">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="rounded-circle mb-3"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #f9423a' }}
                                />
                                <h2 className="fw-bold mb-1" style={{ color: '#333' }}>{displayName}</h2>
                                <p className="text-muted mb-0">{email}</p>
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <div className="badge bg-light text-dark p-2 px-3 rounded-pill border" style={{ fontSize: '0.9rem' }}>
                                    🎓 {displayUni}
                                </div>
                            </div>

                            <div className="row text-center">
                                <div className="col-6 border-end">
                                    <h6 className="text-muted text-uppercase small fw-bold mb-2">Bölüm</h6>
                                    <p className="fw-bold mb-0" style={{ color: '#f9423a' }}>{displayDep}</p>
                                </div>
                                <div className="col-6">
                                    <h6 className="text-muted text-uppercase small fw-bold mb-2">Üyelik Tarihi</h6>
                                    <p className="fw-bold mb-0" style={{ color: '#f9423a' }}>
                                        {currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString('tr-TR') : '-'}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-outline-danger rounded-pill px-4 py-2 fw-bold">
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