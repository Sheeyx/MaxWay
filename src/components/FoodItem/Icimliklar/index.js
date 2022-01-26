import React from "react";
import './style.scss'
import Card from "../Card";




const Ichimlik= ({info,drinkValue})=>{
    return(
        <div className="icimliklar">
            <h1>icimliklar</h1>
            <div className="icimliklar__items">
                {
                    info.map((value)=>{
                        return(
                            <div key={value.id}>
                                <Card data={value} unique={()=>(drinkValue(value.id))}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ichimlik;