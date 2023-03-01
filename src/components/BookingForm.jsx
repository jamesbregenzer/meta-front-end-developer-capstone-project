import React from 'react'
import { useState } from 'react';
const BookingForm = (props) => {
  const [error1,setError1]=useState('')
  const [error2,setError2]=useState('')
  const [error3,setError3]=useState('')
  const [error4,setError4]=useState('')
  const {time,
    dispatch,
    timeData,
    submitForm,
    date,
    setDate,
    guests,
    setGuests,
    occasion,
    setOccation

  }=props;
  
  const handleDate=(e)=>{
   setDate(e.target.value)
   dispatch(e.target.value)
  }
  
  const handleTime=(e)=>{
    dispatch(e.target.value)
  } 
  const today=()=>{
    let today = new Date().toLocaleDateString();
    var arr=today.split("/");
    if(arr[0].length===1){
      var mon=`0${arr[0]}`
    }
    else{
      mon=arr[0]
    }
    var day=`${arr[2]}-${mon}-${arr[1]}`
    day=day.toString();
    return day;
  }
const handleBlur1=(e)=>{
  const val=e.target.value.trim()
  if(val===''){
    setError1("**Please enter your reservation DATE**");
  }
  else{
    setError1("")
  }
}
const handleBlur2=(e)=>{
  const val=e.target.value.trim()
  if(val===''){
    setError2("**Enter time**");
  }
  else{
    setError2("")
  }
} 
const handleBlur3=(e)=>{
  const val=e.target.value.trim()
  if(val===''){
    setError3("**Please enter members count**");
  }
  else{
    setError3("")
  }
}
const handleBlur4=(e)=>{
  const val=e.target.value.trim()
  if(val===''){
    setError4("**Please enter some value**");
  }
  else{
    setError4("")
  }
}
const handleSubmit=()=>{
  if(date==="" || time===undefined || guests==="" || occasion===""){
    return true;
  }
  else{
    return false;
  }
}

  return (
   
    <section className='form-component'>
      <form className='form' />
      <div className='form-container'>
   <label className='label' htmlFor="res-date" aria-label="Choose Date here">Choose date</label>
   <input className='input' type="date" id="res-date" value={date} onChange={handleDate} min={today()} onBlur={handleBlur1} />
   {error1 ?<p className='error'>ERROR :</p>:<p></p>}
   {error1 ?<p className='error'>{error1}</p>:<p></p>}
   <label className='label' htmlFor="res-time" aria-label="Choose Time here">Choose time</label>
   <select className='input' id="res-time" value={time} onChange={handleTime} onBlur={handleBlur2}>
    <option key="select"></option>
     {
      timeData.map((data)=>(
         <option key={data}>{data}</option>
      )     
      )
     }
   </select>
   {error2 ?<p className='error'>ERROR :</p>:<p></p>}
   {error2 ?<p className='error'>{error2}</p>:<p></p>}
   <label className='label' htmlFor="guests">Number of guests</label>
   <input className='input' type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onBlur={handleBlur3} onChange={e=>setGuests(e.target.value)}/>
   {error3 ?<p className='error'>ERROR :</p>:<p></p>}
   {error3 ?<p className='error'>{error3}</p>:<p></p>}
   <label className='label' htmlFor="occasion">Occasion</label>
   <select className='input' id="occasion" value={occasion} onChange={e=>setOccation(e.target.value)} onBlur={handleBlur4}>
   <option key="select"></option>
      <option key="Birthday">Birthday</option>
      <option key="Anniversary">Anniversary</option>
   </select>
   {error4 ?<p className='error'>ERROR :</p>:<p></p>}
   {error4 ?<p className='error'>{error4}</p>:<p></p>}
   
   </div>
   <input className={handleSubmit()?'disable-btn':'Book-btn'} 
   type="submit" 
   onClick={submitForm} 
   value="Make Your reservation" 
   disabled={handleSubmit()} />
    
</section>

  )
}

export default BookingForm
