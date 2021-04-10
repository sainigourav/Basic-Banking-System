import React from 'react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <section id='home-sec'>
      <div id='msg-div'>
        <span id='msg'>Welcome to The Banking System</span>
        <marquee>
          Here you can easily transfer money between multiple users.
        </marquee>
      </div>

      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <Carousel />
        <div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
