import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ManImage from '../assets/addCourseMan.png';
import { useState } from 'react';
import { db } from '../config/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase.js';
import { auth } from '../config/firebase.js';






function AddCourse() {
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseIntroduction, setCourseIntroduction] = useState('');
    const [courseImage, setCourseImage] = useState(null);
    const [courseLevel, setCourseLevel] = useState('');
    const [courseParticipants, setCourseParticipants] = useState([]);
    const [enrollSize, setEnrollSize] = useState(0);
   

    const uploadImage = async (file, userUid) => {
        if (!file) return null;
    
        try {
            const storageRef = ref(storage, `course_images/${userUid}/course`);
            
            const snapshot = await uploadBytes(storageRef, file);
            
            const downloadURL = await getDownloadURL(snapshot.ref);
            
            return downloadURL;
        } catch (error) {
            console.error("Fotoğraf yüklenirken hata oluştu:", error);
            alert("Profil fotoğrafı yüklenirken bir hata oluştu.");
            return null;
        }
    };

const handleAddCourse = async () => {
        const currentUser = auth.currentUser;

        if (!currentUser) {
            alert("Oturum açmanız gerekiyor!");
            return;
        }

        // Form doğrulama (Sayı kontrolü için enrollSize'ı string olarak da kontrol ettik)
        if (courseName === "" || courseCategory === "" || courseDescription === "" || courseIntroduction === "" || !courseImage || courseLevel === "" || enrollSize === "") {
            alert("Lütfen tüm alanları doldurunuz.");
            return;
        }

        try {
            let uploadedImageUrl = ""; 
            if (courseImage) {
                uploadedImageUrl = await uploadImage(courseImage, currentUser.uid);
            }

            // 2. Veritabanı referansı (Burası tek segment olmalı: "courses")
            const courseRef = collection(db, "courses");
            
            // 3. Veriyi kaydetme
            await addDoc(courseRef, {
                courseName: courseName,
                courseCategory: courseCategory,
                courseDescription: courseDescription,
                courseIntroduction: courseIntroduction,
                courseLevel: courseLevel,
                enrollSize: Number(enrollSize), 
                courseParticipants: [],
                
                courseImage: uploadedImageUrl, 

                instructorUid: currentUser.uid,
                createdAt: new Date()
            });

            alert("Kurs başarıyla eklendi.");
            navigate("/");

        } catch (error) {
            console.error("Kurs ekleme hatası:", error);
            alert("Kurs ekleme hatası oluştu: " + error.message);
        }
    }







    return (
        <div>
            <Navbar />
            
            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-12">
                        <h3 style={{ fontWeight: "600" }}>Kurs Ekle</h3>
                        <hr style={{ borderTop: "2px solid #ccc", width: "200px", margin: "10px 0" }} />
                    </div>
                </div>

                <div className="card shadow-sm border-0 p-4 mb-5" style={{ borderRadius: "15px" }}>
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            
                            <div className="row mb-3  ">
                                <div className="col-md-6  flex-column d-flex align-items-start">
                                    <label htmlFor="courseName" className="form-label" style={{ fontWeight: "500"  }}>Kurs Adı</label>
                                    <input className="form-control" value={courseName} onChange={(e)=>setCourseName(e.target.value)} type="text"  placeholder="Web Programlama"  id="courseName" />
                                </div>
                                <div className="col-md-6 d-flex flex-column d-flex align-items-start">
                                    <label htmlFor="courseCategory" className="form-label" style={{ fontWeight: "500" }}>Kategori</label>
                                    <select id="courseCategory" value={courseCategory} onChange={(e)=>setCourseCategory(e.target.value)} className="form-select form-control">
                                        <option value="">Seçiniz</option>
                                        <option value="Kodlama">Kodlama</option>
                                        <option value="Tasarım">Tasarım</option>
                                        <option value="Matematik">Matematik</option>
                                        <option value="Resim">Resim</option>
                                        <option value="Enstürman">Enstürman</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 d-flex flex-column align-items-start">
                                <label htmlFor="courseDescription" className="form-label" style={{ fontWeight: "500" }}>Kurs Açıklaması</label>
                                <textarea
                                    id="courseDescription"
                                    value={courseDescription} onChange={(e)=>setCourseDescription(e.target.value)} className="form-control" 
                                    rows="5" 
                                    placeholder="Kursunuzun detaylı açıklamasını giriniz..."
                                ></textarea>
                            </div>

                            <div className="mb-3 d-flex flex-column align-items-start">
                                <label htmlFor="courseIntroduction" className="form-label" style={{ fontWeight: "500" }}>Kurs Tanıtımı</label>
                                <textarea 
                                    id="courseIntroduction"
                                    value={courseIntroduction} onChange={(e)=>setCourseIntroduction(e.target.value)} className="form-control" 
                                    rows="2" 
                                    placeholder="Kursunuzun kısa tanıtımını giriniz..."
                                ></textarea>
                            </div>

           

                            <div className="mb-3">
                                <label htmlFor="courseImage" className="form-label d-flex flex-column align-items-start " style={{ fontWeight: "500" }}>Kapak Görseli Yükle</label>
                                <div className="d-flex justify-content-between align-items-center p-3" 
                                     style={{ border: "2px dashed #ced4da", borderRadius: "5px", backgroundColor: "#f8f9fa" }}>
                                    <div className="d-flex align-items-center text-muted">
                                        <span style={{ fontSize: "24px", marginRight: "10px" }}>&#8679;</span> 
                                        <span>Görsel Yükle</span>
                                    </div>
                                    <input id="courseImage" accept='image/' className='form-control' type="file"  onChange={(e)=>setCourseImage(e.target.files[0])}/>
                                </div>
                            </div>

                            <div className="row mb-4 align-items-center">
                                <div className="col-md-8 d-flex align-items-center">
                                    <span style={{ fontWeight: "500", marginRight: "15px" }}>Kurs Seviyesi:</span>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="level" id="baslangic" value="Başlangıç" onChange={(e)=>setCourseLevel(e.target.value)} />
                                        <label className="form-check-label" htmlFor="baslangic">Başlangıç</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"  type="radio" name="level" id="orta" value="Orta" onChange={(e)=>setCourseLevel(e.target.value)} />
                                        <label className="form-check-label" htmlFor="orta">Orta</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="level" id="ileri" value="İleri" onChange={(e)=>setCourseLevel(e.target.value)} />
                                        <label className="form-check-label" htmlFor="ileri">İleri</label>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <label htmlFor="enrollSize" className="form-label" style={{ fontWeight: "500", marginRight: "10px", whiteSpace: 'nowrap' }}>Çırak Sayısı:</label>
                                    <select  id="enrollSize" value={enrollSize} onChange={(e)=>setEnrollSize(e.target.value)} className="form-control" style={{ width: "70px" }}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            <button onClick={handleAddCourse} className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#5469d4", borderColor: "#5469d4", fontWeight: "600" }}>
                                Kursu Oluştur
                            </button>

                        </div>

                        <div className="col-lg-5 col-md-12 d-flex align-items-center justify-content-center">
                            <img src={ManImage} alt="Course Illustration" style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourse;