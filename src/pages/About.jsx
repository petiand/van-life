import React from "react"

export default function About(){
    return(
      <div className='about'>
        <img src="./assets/image/about-img.webp" alt="van with a view" hight="233" width="550" />
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