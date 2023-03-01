import React from 'react'
import logo from './logo.svg';
import About from './About';
import {Link,Route,Routes}  from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Menu from './Menu';
import ConfirmedBooking from './ConfirmedBooking';
import Login from './Login';
import { useRef} from 'react';
import { useState } from 'react';

const Navbar = () => {
  const clickRef=useRef("")
  const [click,setClick]=useState("")
  const Home=()=>{
       clickRef.current="Home";
       setClick(clickRef.current);
  }
  const about=()=>{
    clickRef.current="About"
    setClick(clickRef.current);
}
const menu=()=>{
  clickRef.current="Menu" 
  setClick(clickRef.current);
}
const Reservation=()=>{
  clickRef.current="Reservation"
  setClick(clickRef.current);
}

const login=()=>{
  clickRef.current="Login"
  setClick(clickRef.current);
}
  return (
    <div className='body'>
      <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      </header>
      <nav className='nav'>
    
    <ul>
      <li>
        <Link className={click==="Home"?'click':'Link'} onClick={Home} to='/'><i className="fa fa-home" style={{"font-size":"24px"}}></i> Home</Link>
      </li>
      <li>
        <Link  className={click==="About"?'click':'Link'} onClick={about} to="/about"><i class="fa fa-info-circle" style={{"font-size":"24px"}}></i> About</Link>
      </li>
      <li>
      <Link className={click==="Menu"?'click':'Link'} onClick={menu}  to="/menu"><i class='fas fa-hamburger' style={{'font-size':'24px'}}></i> Menu</Link>
      </li>
      <li>
        <Link className={click==="Reservation"?'click':'Link'} onClick={Reservation} to="/reservation"><i class='fas fa-utensils' style={{'font-size':'24px'}}></i> Reservation</Link>
      </li>
     
      <li>
      <Link className={click==="Login"?'click':'Link'} onClick={login} to="/Login"><i class='fas fa-sign-in-alt' style={{"font-size":"24px"}}></i> Login</Link>
      </li>
    </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<About/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='reservation' element={<BookingPage/>}/>
        <Route path='confirmation/:date/:time/' element={<ConfirmedBooking />}/>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default Navbar
