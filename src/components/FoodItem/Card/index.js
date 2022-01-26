import React from "react";
import './style.scss'
import cheese from '../../../assets/Card/cheese.svg'



const Card= ({data,unique})=>{
    return(
        <div className="card">
            <div className="card__items innner__container">
                <div className="card__items--img">
                    <img src={require('../../../assets/image/'+data.image)} />
                </div>
                <div className="card__items--info">
                    <div className="head">
                        <h2>{data.title}</h2>
                        <img src={cheese} />
                    </div>
                    <div>
                        <p className="text">
                            {data.text}
                        </p>
                    </div>
                    <div className="bottom">
                        <p>{data.cost}</p>
                        <button onClick={unique}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;