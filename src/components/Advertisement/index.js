import React from "react";
import './style.scss'
import phone from '../../assets/advert/iphone.png'
import line from '../../assets/advert/line.png'
import google from '../../assets/advert/app.svg'
import app from '../../assets/advert/google.svg'



const Advertisement= ()=>{
    return(
        <div className="advert">
            <div className="inner__container">
                <div className="advert__content">
                    <h2>Mobil ilovamiz
                        orqali buyurtma
                        berish yanada osonroq</h2>
                        <div className="advert__content--btn">
                            <button>
                                <img src={google} />
                                <p>Google <span>play</span></p>
                            </button>
                            <button>
                                <img src={app} />
                                <p>App store</p>
                            </button>
                        </div>
                </div>
                <div className="line">
                            <img src={line}></img>
                </div>
                <div className="phone">
                        <img src={phone}></img>
                </div>
            </div>
        </div>
    )
}

export default Advertisement;