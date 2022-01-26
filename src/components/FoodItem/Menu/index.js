import React from "react";
import './style.scss'



const Menu= ()=>{
    return(
        <div className="menu">
            <div className="menu__all">
                <button>Barchasi</button>
            </div>
            <div className="menu__items">
                <ul>
                    <li><a href="#">Pitsa</a></li>
                    <li><a href="#">Burger</a></li>
                    <li><a href="#">Kombo</a></li>
                    <li><a href="#">Salat</a></li>
                    <li><a href="#">Shirinliklar</a></li>
                    <li><a href="#">Ichimliklar</a></li>
                </ul>
            </div>
            <div className="menu__filter">
                <button>
                    <img />
                    <p>Filtr</p>
                </button>
            </div>
        </div>
    )
}

export default Menu;