import React from "react";
import './style.scss'
import Card from "../Card";




const Burger= ({info,burgerValue})=>{
    return(
        <div className="burger">
            <h1>Burger</h1>
            <div className="burger__items">
                {
                    info.map((value)=>{
                        return(
                            <div key={value.id}>
                                <Card data={value}  unique={()=>(burgerValue(value.id))}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Burger;