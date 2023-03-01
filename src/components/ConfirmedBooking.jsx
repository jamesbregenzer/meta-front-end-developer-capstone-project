import React from 'react'
import {useParams} from 'react-router-dom'
import gif from './assets/gif.gif'
const ConfirmedBooking = () => {
  let { date,time} = useParams();
  return (
    <main className='endPage'>
      <img className='gif' src={gif} alt="gif"/>
      <section className='msg'>
      <h1>Your Booking confirmed !!!</h1>
      <h1>THANKS FOR CHOOSING OUR RESTAURANT</h1>
      <h2>See you on <span>{date}</span> at <span>{time}</span></h2>
      </section>
    </main>
  )
}

export default ConfirmedBooking;
