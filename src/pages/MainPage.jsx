import React from 'react';
import '../css/mainPage.css';
import MainCardComponent from '../components/MainCardComponent.jsx';
import Navbar from '../components/Navbar.jsx';
import {IoMdSearch , IoMdCodeWorking} from "react-icons/io";
import { LuPenTool } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { FaPaintBrush,FaGuitar } from "react-icons/fa";

function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="search-container">
        <div className="search-box">
          <input type="text" placeholder="Ne öğrenmek istersin?" className="search-input" />
          <span className="search-icon"> <IoMdSearch size={25} /> </span>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn">  <IoMdCodeWorking size={25} /> Kodlama</button>
          <button className="filter-btn"><LuPenTool size={25} /> Tasarım</button>
          <button className="filter-btn"><BiMath size={25} />Matematik</button>
          <button className="filter-btn"><FaPaintBrush size={25} /> Resim</button>
          <button className="filter-btn"> <FaGuitar size={25} />Enstrüman</button>
        </div>
      </div>
      <div className="title-section">
        <h2 className="lastAdds">Son Eklenenler</h2>
        <hr />
      </div>

      <div className="row mt-3 ">
        <div className="col-9">
    <div className="row">

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
        <div className="col-3">
          <div className="row">
            <div className="col-12 mb-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;