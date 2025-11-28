import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../css/authPage.css';
import CustomButton from '../components/CustomButton.jsx';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate('/register');
    };
    return (
        <div className="registerPage">
            <Navbar  />
                <div className="row mt-5">
        <div className="col-4 ">
            <div className="authContainer ">
                <h2 className="authTitle">Giriş Yap</h2>
                <div className="form-group">


                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">E-Posta </h5> 
                    <input type="email" placeholder="kaanbese@gmail.com" className="authInput form-control w-100 mb-3" />
                    </div>

                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Şifre </h5> 
                    <input type="password" placeholder="•••••••••••" className="authInput form-control w-100 mb-3" />
                    </div>

                    





                </div>

            </div>

            <div class="d-flex justify-content-between align-items-start mt-3" >
                <p className='btn btn-link' onClick={goToRegister} > Hesabınız yok mu, kayıt olun. </p>
                <CustomButton text="Giriş Yap" />
                </div>            



            
            </div>
            
            <div className="col-8">
                <img src="https://picsum.photos/800/600" alt="Register" className=" authImage " />
            </div>

            </div>
        </div>
    )
}

export default LoginPage;