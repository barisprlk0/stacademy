import React from 'react';
import '../css/mainPage.css';
import MainCardComponent from '../components/MainCardComponent.jsx';
function MainPage() {
  return (
    <div>
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


  );
}
export default MainPage;
/*

        */