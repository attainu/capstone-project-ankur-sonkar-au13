import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>Explore Your Favourite Bike... </p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
