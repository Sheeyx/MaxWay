import React from "react";
import Menu from "./Menu";
import Pizza from './Pitsa'
import Burger from './Burger'
import './style.scss'
import Combo from "./Combo";
import Ichimlik from "./Icimliklar";




const FoodItem= ({pizza,burger,combo,icimliklar,unique,burgerValue,comboValue,drinkValue})=>{
    return(
        <div className="fooditem">
            <Menu />
            <Pizza info={pizza}  app={unique} />
            <Burger info={burger} burgerValue={burgerValue} />
            <Combo info={combo} comboValue={comboValue}/>
            <Ichimlik info={icimliklar} drinkValue={drinkValue} />
        </div>
    )
}

export default FoodItem;