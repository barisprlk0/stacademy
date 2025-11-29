import React from 'react';
import Navbar from '../components/Navbar.jsx'; 
import CourseDetailInfoCard from '../components/courseDetailInfoCard.jsx'; 

const CourseDetailPage = () => {
  return (
    <div className="bg-light min-vh-100 pb-5">
      <Navbar />

      <div 
        style={{ 
          height: '350px', 
          width: '100%',
          backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-background-futuristic-technology-concept_23-2149122394.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
      </div>

      <div className="container">
        <div style={{ marginTop: '-120px', position: 'relative', zIndex: 10 }}>
            <CourseDetailInfoCard />
        </div>

        <div className="row g-4 mt-2">
          
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4 p-4 h-100">
      <h4 className="fw-bold mb-3">Kurs Açıklaması</h4>
      <div className="text-muted">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper consequat varius. 
          Praesent a tortor tellus. Phasellus id augue eros. Aenean molestie blandit eleifend. 
          Pellentesque a turpis erat. Vestibulum condimentum, sem at viverra elementum, 
          nulla erat ultrices diam, et feugiat eros ex et urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales euismod erat 
          vitae ultrices. Sed nec lectus rhoncus, blandit sapien in, vehicula mauris. Nam congue 
          sit amet arcu in euismod. Phasellus vel ultricies erat, sit amet suscipit ipsum. 
          Praesent et fringilla purus. Cras et egestas felis, sit amet ultricies dui.
        </p>
      </div>
    </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border-0 rounded-4 p-4 mb-4 text-center">
      <div className="d-flex justify-content-center mb-3">
        <img 
          src="https://picsum.photos/id/64/200/200" 
          alt="Instructor" 
          className="rounded-circle"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </div>
      <h4 className="fw-bold mb-1">Murat Kazancıoğlu</h4>
      <p className="text-muted small mb-3">
        Akdeniz Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. 
        Bildiklerimi siz arkadaşlarımla paylaşmaktan mutluluk duyarım.
      </p>
    </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;