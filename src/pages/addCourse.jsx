import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ManImage from '../assets/addCourseMan.png';

function AddCourse() {
    return (
        <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
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
                                    <label className="form-label" style={{ fontWeight: "500" }}>Kurs Adı</label>
                                    <input type="text" className="form-control" placeholder="Web Programlama" />
                                </div>
                                <div className="col-md-6 d-flex flex-column d-flex align-items-start">
                                    <label className="form-label" style={{ fontWeight: "500" }}>Kategori</label>
                                    <select className="form-select form-control">
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
                                <label className="form-label" style={{ fontWeight: "500" }}>Kurs Açıklaması</label>
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    placeholder="Kursunuzun detaylı açıklamasını giriniz..."
                                ></textarea>
                            </div>

                            <div className="mb-3 d-flex flex-column align-items-start">
                                <label className="form-label" style={{ fontWeight: "500" }}>Kurs Tanıtımı</label>
                                <textarea 
                                    className="form-control" 
                                    rows="2" 
                                    placeholder="Kursunuzun kısa tanıtımını giriniz..."
                                ></textarea>
                            </div>

           

                            <div className="mb-3">
                                <label className="form-label d-flex flex-column align-items-start " style={{ fontWeight: "500" }}>Kapak Görseli Yükle</label>
                                <div className="d-flex justify-content-between align-items-center p-3" 
                                     style={{ border: "2px dashed #ced4da", borderRadius: "5px", backgroundColor: "#f8f9fa" }}>
                                    <div className="d-flex align-items-center text-muted">
                                        <span style={{ fontSize: "24px", marginRight: "10px" }}>&#8679;</span> 
                                        <span>Görsel Yükle</span>
                                    </div>
                                    <button className="btn btn-outline-secondary btn-sm bg-white text-dark">Dosya Seç</button>
                                </div>
                            </div>

                            <div className="row mb-4 align-items-center">
                                <div className="col-md-8 d-flex align-items-center">
                                    <span style={{ fontWeight: "500", marginRight: "15px" }}>Kurs Seviyesi:</span>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="level" id="baslangic" />
                                        <label className="form-check-label" htmlFor="baslangic">Başlangıç</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="level" id="orta" />
                                        <label className="form-check-label" htmlFor="orta">Orta</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="level" id="ileri" />
                                        <label className="form-check-label" htmlFor="ileri">İleri</label>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <span style={{ fontWeight: "500", marginRight: "10px", whiteSpace: 'nowrap' }}>Çırak Sayısı:</span>
                                    <select className="form-control" style={{ width: "70px" }}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <button className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#5469d4", borderColor: "#5469d4", fontWeight: "600" }}>
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