import React from "react";
import logo from "../../assets/header/logo.svg"
import phone from "../../assets/header/phone.svg"
import cart_img from "../../assets/header/cart_img.svg"
import karzinka from "../../assets/header/karzinka.svg"
import bin from "../../assets/header/bin.svg"
import imag from '../../assets/Card/pizza_1.png'
import "./style.scss"


const Header = ({korzinka,pizzaDelete,umumiy}) => {
   console.log(korzinka)
   let narx = 0
   for(let i=0;i<korzinka.length;i++){
       narx+=korzinka[i].cost
   }
   console.log(narx)
    return (
            <div className="header">
                <div className="header__logo">
                    <img src={logo} />
                </div>
                <div className="header__menu">
                    <ul className="header__menu--items">
                        <li><a>Menyu</a></li>
                        <li><a>Bolalar uchun</a></li>
                        <li><a>Filiallar</a></li>
                    </ul>
                    <div className="header__menu--contacts">
                        <div className="call">
                            <div><img src={phone} /></div>
                            <div>
                                <p>(+99871)</p>
                                <h2>200-54-00</h2>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="cart__img">
                                <div className="circle" style={{display:korzinka.length>0 ? "flex" : "none"}}>
                                    <p>{korzinka.length}</p>
                                </div>
                                <img src={karzinka} />
                                <div className="korzinka">
                                        <div className="korzinka__inner">
                                        <div className="korzinka__inner--img" style={{display:korzinka.length>0 ? "none" : "flex"}}>
                                            <img src={cart_img} />
                                            <h2>Korzinka bosh</h2>
                                        </div>
                                            {
                                                korzinka.map((value,index)=>{
                                                    return (
                                                        <div key={index}>
                                                            <div className="korzinka__inner--items">
                                                                <div className="image">
                                                                    <img src={require('../../assets/image/'+value.image)} />
                                                                </div>
                                                                <div className="data">
                                                                    <h1>{value.title}</h1>
                                                                    <p>{value.cost}</p>
                                                                </div>
                                                                <div className="button">
                                                                    <button onClick={()=>{pizzaDelete(index)}}><img src={bin} /></button>
                                                                    <p>{value.count}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <button className="korzinka__inner--price" style={{display:narx>0 ? 'flex' : 'none'}}>
                                                <p>Заказать</p>
                                                <span>{narx} cум</span>
                                            </button>
                                        </div>
                                        
                                </div>
                            </div>
                            <div>
                                <h2>Korzina</h2>
                                <p style={{display:narx>0 ? 'flex' : 'none'}}>{narx} UZS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;