import React from 'react'

const Login = () => {
  return (
    <div className='login'>
    <section className='form-component'>
      <form className='form' />
      <div className='form-container'>
      <label className='label' htmlFor="res-mail" aria-label="Enter Mail Id" >Enter UserName</label>
      <input className='input' type="text" id="res-mail" placeholder="UserName" />
      <label className='label' htmlFor="res-password" aria-label="Enter Mail Id" >Enter Password</label>
      <input className='input' type="text" id="res-password" placeholder="Password" />
      </div>
    </section>
    </div>
  )
}

export default Login
