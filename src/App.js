import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
      <Navbar/>
      </nav>
    
    <main>
        
    </main>
    <footer className='footer'>
      <p>This Restaurant website is created by Srivatsan S</p>
      <p><i class="fa fa-envelope" style={{"font-size":"24px"}}></i> srivatsangsm2000@gmail.com</p>
      <p>Copyright @ Srivatsan 2023</p>
    </footer>
    </div>
  );
}

export default App;
