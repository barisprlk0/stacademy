import React from 'react';
import '../css/mainPage.css';
import MainCardComponent from '../components/MainCardComponent.jsx';
import Navbar from '../components/Navbar.jsx';

function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="search-container">
        <div className="search-box">
          <input type="text" placeholder="Ne öğrenmek istersin?" className="search-input" />
          <span className="search-icon"> ICON </span>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn"> Kodlama</button>
          <button className="filter-btn"> Tasarım</button>
          <button className="filter-btn">Matematik</button>
          <button className="filter-btn"> Resim</button>
          <button className="filter-btn"> Enstrüman</button>
        </div>
      </div>
      <div className="title-section">
        <h2 className="lastAdds">Son Eklenenler</h2>
        <hr />
      </div>
      <div className="row mt-3 ">
        <div className="col-4 mb-3">
          <MainCardComponent />
        </div>
        <div className="col-4 mb-3">
          <MainCardComponent />
        </div>
        <div className="col-4 mb-3">
          <MainCardComponent />
        </div>
        <div className="col-4 mb-3">
          <MainCardComponent />
        </div>
      </div>
    </div>
  );
}

export default MainPage;