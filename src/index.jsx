import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return ( 
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>  
  )
}
function Home(){
  return(
    <main className='home'>
        <h1 className="home-title">You got the travel plans, we got the travel vans.</h1>
        <p className="home-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button className="home-btn">Find your van</button>
    </main>
  )
}

function Header(){
  return (
    <nav className='header'>
        <Link to= "/"> <a className="header-title"> #VANLIFE</a></Link>
        <div className="header-list">
        <Link to="/about">About</Link>
        <p>Vans</p>
        </div>
      </nav>
  )
}

function Footer(){
  return (
    <footer className='home-footer'>
        <p>Ⓒ 2022 #VANLIFE</p>
    </footer>
  )
}

function About(){
  return(
    <div className='about'>
      <img src="./image/about-img.webp" alt="van with a view" hight="233" width="550" />
      <h1 className='about-text'> Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p className='about-text'> Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
      (Hitch costs extra 😉) <br/> <br/> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p> 
      <div className='about-box'>
        <h2 className='about-box-text'>Your destination is waiting. <br />Your van is ready.</h2>
        <button className='about-box-btn'>Explore our vans</button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
