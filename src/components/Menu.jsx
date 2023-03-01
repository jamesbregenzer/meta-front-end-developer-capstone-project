import { useState,useEffect, useRef } from "react";
import icecream from "./menus/ice-cream.json"
import drinks from "./menus/drinks.json";
import dessert from "./menus/desserts.json"
import burger from "./menus/burgers.json"
import pizza from "./menus/pizzas.json";
import chocolates from "./menus/chocolates.json"
import breads from "./menus/breads.json"
import defaultDessert from "./assets/dessert.jpg"
const Menu = () => {
  const [category,setCategory]=useState("");
  const [obj,setObj]=useState(dessert);
  const objRef=useRef([]);
   const handleImage=(event)=>{
         event.target.src =defaultDessert;
   }
   const handleCategory=(e)=>{
    setCategory(e.target.value)
   }
   useEffect(()=>{
        if(category==="Ice Cream"){
          objRef.current=icecream
          setObj(objRef.current)
        
        }
        else if(category==="Drink"){
          objRef.current=drinks
          setObj(objRef.current)
        }
        else if(category==="Burger"){
          objRef.current=burger
          setObj(objRef.current)
        }
        else if(category==="Pizza"){
          objRef.current=pizza
          setObj(objRef.current)
        }
        else if(category==="Chocolates"){
          objRef.current=chocolates
          setObj(objRef.current)
        }
        else if(category==="Breads"){
          objRef.current=breads
          setObj(objRef.current)
        }
   },[category])
   
  return (
    <div>
    <form className='form' />
      <div className='form-menu-container'>
      <label className='label' htmlFor="res-time" aria-label="Choose Menu here">Choose category</label>
   <select className='menu-input' value={category} onChange={handleCategory} >
    <option>--SELECT--</option>
    <option>Ice Cream</option>
    <option>Drink</option>
    <option>Burger</option>
    <option>Pizza</option>
    <option>Chocolates</option>
    <option>Breads</option>
    </select>
      </div>
    <section className='menu-container'>
      
    {
        obj.map((data)=>(
            <div className='card'>
           <img src={data.img} alt="dish" onError={handleImage}/>
           <h3>{data.name}</h3>
           <h4>$ {data.price}</h4>
           <p>{data.dsc} </p>
           <footer className="card-footer">
           <button className='online-btn'><i class="fa fa-shopping-cart" style={{"font-size":"36px"}}></i> Order Online</button>
           </footer>
           
          </div>
        ))
    }
    </section>
    </div>
  )
}

export default Menu
