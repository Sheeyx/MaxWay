import React,{ Component } from 'react';
import Main from './components/Main'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      umumiy:0,
      cart:[],
      index:1,
      pizza:[
        {
          id:1,
          title:'Gavaya',
          image:'pizza1.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:45000,
          count:1
        },
        {
          id:2,
          title:'Mexico',
          image:'pizza2.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:53000,
          count:1

        },
        {
          id:3,
          title:'Hot Achchiko',
          image:'pizza3.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле
          `,
          cost:64000,
          count:1

        },
        {
          id:4,
          title:'Mexica',
          image:'pizza4.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:45000,
          count:1
        },
        {
          id:5,
          title:'Apocalipo',
          image:'pizza5.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:64000,
          count:1
        },
        {
          id:6,
          title:'Sosiskacho',
          image:'pizza6.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:45000,
          count:1
        },
        {
          id:7,
          title:'Mexica',
          image:'pizza7.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле
          `,
          cost:153000,
          count:1
        },
      ],
      burger:[
        {
          id:8,
          title:'Cheeseburger',
          image:'burger.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:23000,
          count:1
        },
        {
          id:9,
          title:'Chili burger',
          image:'burger.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:45000,
          count:1
        },
        {
          id:10,
          title:'Hamburger',
          image:'burger.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:55000,
          count:1
        },
        {
          id:11,
          title:'Double Burger',
          image:'burger.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:95000,
          count:1
        },
      ],
      combo:[
        {
          id:12,
          title:'Kombo-1',
          image:'club.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:25000,
          count:1
        },
        {
          id:13,
          title:'Kombo-2',
          image:'comboburg.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:23000,
          count:1
        },
        {
          id:14,
          title:'Kombo-3',
          image:'club.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:30000,
          count:1
        },
        
      ],

      icimliklar:[
        {
          id:15,
          title:'Sprite 1L',
          image:'sprite.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:6000,
          count:1
        },
        {
          id:16,
          title:'Coca cola 1,5L',
          image:'cola.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:9000,
          count:1
        },
        {
          id:17,
          title:'Fanta 1L',
          image:'fan.png',
          text:`Горячая закуска с митболами
          из говядины, томатами,
          моцареллой и соусом чипотле`,
          cost:6000,
          count:1
        },
      ]
    }
    this.PizzaId = this.PizzaId.bind(this)
    this.pizzaDelete = this.pizzaDelete.bind(this)
    this.burgerValue = this.burgerValue.bind(this)
    this.comboValue = this.comboValue.bind(this)
    this.drinkValue = this.drinkValue.bind(this)
  }

  PizzaId(id){
      this.setState(({pizza})=>{
        const exist = this.state.cart.filter((el)=>el.id == id)
        const temp = pizza.filter((el)=>el.id == id)
        const costs = temp[0].cost
        if(exist.length !== 0){
          const index = this.state.cart.findIndex(item=> item.id == id)
          const newArr = {...this.state.cart[index], count:this.state.cart[index].count+1,cost:this.state.cart[index].cost+costs}
          const newData = [...this.state.cart.slice(0,index),newArr,...this.state.cart.slice(index+1)]
          this.setState(({
            cart: newData
          }))
        } else {
          const data = [...this.state.cart,...temp]
          return{
            cart:data
            }
        }
      })
  }

  burgerValue(id){
    this.setState(({burger})=>{
      const exist = this.state.cart.filter((el)=>el.id == id)
      const temp = burger.filter((el)=>el.id == id)
      const costs = temp[0].cost
      if(exist.length !== 0){
        const index = this.state.cart.findIndex(item=> item.id == id)
        const newArr = {...this.state.cart[index], count:this.state.cart[index].count+1,cost:this.state.cart[index].cost+costs}
        const newData = [...this.state.cart.slice(0,index),newArr,...this.state.cart.slice(index+1)]
        this.setState(({
          cart: newData
        }))
      } else {
        const data = [...this.state.cart,...temp]
        return{
          cart:data
          }
      }
    })
  }

  drinkValue(id){
    this.setState(({icimliklar})=>{
      const exist = this.state.cart.filter((el)=>el.id == id)
      const temp = icimliklar.filter((el)=>el.id == id)
      const costs = temp[0].cost
      if(exist.length !== 0){
        const index = this.state.cart.findIndex(item=> item.id == id)
        const newArr = {...this.state.cart[index], count:this.state.cart[index].count+1,cost:this.state.cart[index].cost+costs}
        const newData = [...this.state.cart.slice(0,index),newArr,...this.state.cart.slice(index+1)]
        this.setState(({
          cart: newData
        }))
      } else {
        const data = [...this.state.cart,...temp]
        return{
          cart:data
          }
      }
    })
  }

  comboValue(id){
    this.setState(({combo})=>{
      const exist = this.state.cart.filter((el)=>el.id == id)
      const temp = combo.filter((el)=>el.id == id)
      const costs = temp[0].cost
      if(exist.length !== 0){
        const index = this.state.cart.findIndex(item=> item.id == id)
        const newArr = {...this.state.cart[index], count:this.state.cart[index].count+1,cost:this.state.cart[index].cost+costs}
        const newData = [...this.state.cart.slice(0,index),newArr,...this.state.cart.slice(index+1)]
        this.setState(({
          cart: newData
        }))
      } else {
        const data = [...this.state.cart,...temp]
        return{
          cart:data
          }
      }
    })
  }

  pizzaDelete(id){
    this.setState(({cart})=>{
      const newArray = [...cart.slice(0,id),...cart.slice(id+1)]
      return{
        cart: newArray
      }
    })
  }

  render(){
    return(
      <div>
        <Main
            pizza = {this.state.pizza} burger={this.state.burger} combo = {this.state.combo} icimliklar={this.state.icimliklar} 
            app={this.PizzaId} korzinka={this.state.cart} burgerValue={this.burgerValue} comboValue={this.comboValue} drinkValue={this.drinkValue}
             pizzaDelete={this.pizzaDelete} umumiy={this.state.umumiy} />
      </div>
    )
  }
}

export default App;
