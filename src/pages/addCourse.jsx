import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ManImage from '../assets/addCourseMan.png';
function AddCourse() {
    return(
        <div>
            <Navbar/>
        <div className="row">
        <div className="col-6">
            <div className="card customCard mt-3 w-100  justify-content-center align-items-center mx-auto p-4">
                <div className="d-flex flex-row form-group">
                    <div className="d-flex flex-column align-items-start mx-2">
                    <h5 className="m-0 ">Kurs Adı </h5> 
                    <input type="text" placeholder="Web Programlama" className="authInput form-control w-100 mb-3" />
                    </div>

                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 ">Kategori </h5> 
                    <select className=" form-control  mb-3"  style={{width: '250px'}}>
                                <option>Kategori Seçiniz</option>
                                    <option key={0} disabled> Seçiniz </option>
                                    <option key={1} value={"Kodlama"}> Kodlama </option>
                                    <option key={2} value={"Tasarım"}> Tasarım </option>
                                    <option key={3} value={"Matematik"}> Matematik </option>
                                    <option key={4} value={"Resim"}> Resim </option>
                                    <option key={5} value={"Enstürman"}> Enstürman </option>
                    </select>
                    </div>
                </div>

                  <div className="d-flex flex-column align-items-start  w-75">
                    <h5 className="m-0 ">Kurs Tanıtımı </h5> 
                   <textarea 
                    placeholder="Kursunuzun kısa tanıtımını giriniz..." 
                    className="authInput form-control w-100 mb-3"
                    rows="2" 
                ></textarea>


                    </div>
                  <div className="d-flex flex-column align-items-start  w-75">
                    <h5 className="m-0"> Kurs Açıklaması </h5> 
                   <textarea 
                    placeholder="Kursunuzun detaylı açıklamasını giriniz..." 
                    className="authInput form-control w-100 mb-3"
                    rows="5" 
                ></textarea>                
                    </div>
                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Kurs Adı </h5> 
                    <input type="text" placeholder="Web Programlama" className="authInput form-control w-100 mb-3" />
                    </div>

            </div>
            </div>
        <div className="col-6">
            <img src={ManImage} alt="" />
        </div>
        </div>

        </div>
    )

}
export default AddCourse;