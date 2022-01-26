import React from "react";
import './style.scss'
import Header from '../Header'
import yellow from '../../assets/enterance/yello.png'
import purple from '../../assets/enterance/purple.png'
import burger from '../../assets/enterance/gamburger.png'



const Entarance= ({cart,pizzaDelete,umumiy})=>{
    return(
        <div className="entarance">
            <Header korzinka={cart} pizzaDelete={pizzaDelete} umumiy={umumiy} />
            <div className="text">
                <h1>Siz izlagan <br/> mazzali <br/> ta’mlar</h1>
                <p>When an unknown printer took a galley of type<br />
                    scrambled it to make a type specimen </p>
            </div>
            <div className="images">
                <div className="yellow"><img src={yellow} /></div>
                <div><img src={purple} /></div>
            </div>
            <div className="left">
                <div className="left__burger">
                    <img src={burger} />
                </div>
            </div>
        </div>
    )
}

export default Entarance;
