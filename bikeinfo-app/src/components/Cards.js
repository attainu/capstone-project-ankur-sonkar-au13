import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose Your Bands</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bajaj_logo.png'
              text='Some text about the company'
              path='/services'
            />
            <CardItem
              src='images/ktm_logo.png'
              text='Some text about the company'
              path='/services'
            />
            <CardItem
              src='images/Honda-1.jpg'
              text='Some text about the company'
              path='/services'
            />
            <CardItem
              src='images/RE_logo.png'
              text='Some text about the company'
              path='/products'
            />
            <CardItem
              src='images/yamaha_logo.png'
              text='Some text about the company'
              path='/sign-up'
            />
            <CardItem
              src='images/ktm_logo.png'
              text='Some text about the company'
              path='/services'
            />
            <CardItem
              src='images/ktm_logo.png'
              text='Some text about the company'
              path='/services'
            />
            <CardItem
              src='images/ktm_logo.png'
              text='Some text about the company'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
