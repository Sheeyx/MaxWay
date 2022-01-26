import React from "react";
import './style.scss'
import Card from "../Card";




const Combo= ({info,comboValue})=>{
    return(
        <div className="combo">
            <h1>Combo</h1>
            <div className="combo__items">
                {
                    info.map((value)=>{
                        return(
                            <div key={value.id}>
                                <Card data={value} unique={()=>(comboValue(value.id))}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Combo;