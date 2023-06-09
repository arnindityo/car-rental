import React from "react";
import { useHistory } from "react-router-dom";
import './section1.css';
import img from '../img_car.png';

const Section1 = () => {
    const { push } = useHistory()
    const pathName = window.location.href
    
    return(
        <div className="section1">
            <div className="">
                <div className="row">
                    <div className="col-lg-5 pe-5 align-self-center">
                        <h1>Sewa & Rental Mobil Terbaik di Kawasan JAKARTA</h1>
                        <br />
                        <h6>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam
                        </h6>
            
                        <br />
            
                        {
                            !/cari-mobil/.test(pathName) && <button onClick={() => push('/cari-mobil')} type="button" className="btn btn-success mt-">
                            <a>Mulai Sewa Mobil</a>
                            </button>
                        }
                        
                    </div>
            
                    <div className="col-lg-7">
                        <img src={img} alt="Car" style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default Section1;