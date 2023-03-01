import React from 'react'
import banner from './assets/restauranfood.jpg';
import card1 from './assets/greek salad.jpg';
import card3 from "./assets/lemon dessert.jpg";
import { useNavigate} from "react-router-dom";
const HomePage = () => {
  const navigate=useNavigate();
  const handle=()=>{
    navigate('/reservation')
  }
  return (
    <div className='home-background'>
      <section>
          <article className='banner'>
          <h2 className='heading'>Little Lemon</h2>
          <img className='bannerImage' src={banner} alt="banner"/>
          <h3 className='subheading'>Chicago</h3>
        
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <footer className='banner-footer'>
          <button className='Reserve-btn' onClick={handle}>Reserve a Table</button>
          </footer>
          </article>
        </section>
        <h3 className='heading2'>This week Specials !!!</h3> 
        <section className='spl-section'>
          <div className='card'>
           <img src={card1} alt="dish1" />
           <h3>Greek salad</h3>
           <h4>$12.99</h4>
           <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
           
          </div>
          <div className='card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg" alt="dish1" />
           <h3>Bruchetta</h3>
           <h4>$ 5.99</h4>
           <p>Our Bruschetta is made from grilled bread that has been smeared with garlic.every last ingredient has been sourced and is as authentic as can be imagined. </p>
          
           </div>
           <div className='card'>
           <img src={card3} alt="dish1" />
           <h3>Lemon Dessert</h3>
           <h4>$ 5.00</h4>
           <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
          
           </div>
        </section>
    </div>
  )
}

export default HomePage
