import React from "react";
import './style.scss'
import youtube from '../../assets/Footer/youtube.svg'
import facebook from '../../assets/Footer/facebook.svg'
import insta from '../../assets/Footer/insta.svg'
import tg from '../../assets/Footer/tg.svg'
import tiktok from '../../assets/Footer/tiktok.svg'
import logo from '../../assets/header/logo.svg'



const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content--info">
                        <div className="logo">
                            <img src={logo} />
                        </div>
                </div>
                <div className="footer__content--text">
                        <div className="asosiy">
                            <h2>Asosiy</h2>
                            <p>Kompaniya haqida</p>
                            <p>Filiallar</p>
                            <p>Bolalar uchun</p>
                        </div>
                        <div className="qoshimca">
                            <h2>Qo’shimcha</h2>
                            <p>Menyu</p>
                            <p>Bonusli karta</p>
                            <p>Bu qanday ishlaydi?</p>
                        </div>
                </div>
                <div className="footer__content--contact">
                        <div className="aloqa">
                            <h2>Biz bilan aloqa</h2>
                            <p>(+998 71) 200-54-00</p>
                            <span>100011, Toshkent sh. Shayxontohur tumani,
                                Zarqaynar ko’chasi, 3B-uy</span>
                        </div>
                </div>
            </div>
                 <div className="footer__social">
                    <div>© Maxway, 2020</div>
                    <div className="media">
                        <a href=""><img src={youtube}/></a>
                        <a href=""><img src={facebook}/></a>
                        <a href=""><img src={insta}/></a>
                        <a href=""><img src={tg}/></a>
                        <a href=""><img src={tiktok}/></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer;