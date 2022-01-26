import React from "react";
import './style.scss'
import Entarance from "../Enterance";
import FoodItem from "../FoodItem";
import Advertisement from "../Advertisement";
import Footer from '../Footer'



const Main= ({pizza,burger,combo,icimliklar,app,korzinka,pizzaDelete,burgerValue,comboValue,drinkValue,umumiy})=>{
    return(
        <div className="container main">
            <div className="inner__container">
                <Entarance cart={korzinka} pizzaDelete={pizzaDelete} umumiy={umumiy}/>
                <FoodItem  
                pizza={pizza} burger={burger} combo={combo} icimliklar={icimliklar} 
                unique={app} burgerValue={burgerValue} comboValue={comboValue} drinkValue={drinkValue} />
            </div>
                <Advertisement />
            <div className="inner__container">
                <Footer />
            </div>


        </div>
    )
}

export default Main;
