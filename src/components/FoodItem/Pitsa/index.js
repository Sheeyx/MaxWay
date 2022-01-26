import React from "react";
import './style.scss'
import Card from "../Card";




const Pitsa= ({info,app})=>{
    return(
        <div className="pizza">
            <h1>Pitsa</h1>
            <div className="pizza__items">
                {
                    info.map((value)=>{
                        return(
                            <div key={value.id}>
                                <Card data={value} unique={()=>(app(value.id))}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pitsa;