import React from 'react'
import Img1 from '../../Images/cone.jpg'
import Img2 from '../../Images/ctwo.jpg'
import Img3 from '../../Images/cthree.jpg'

const Carousel = () => {
  return (
    <>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={Img1}
            className='d-block w-100'
            alt='cimg'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={Img2}
            className='d-block w-100'
            alt='cimg'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={Img3}
            className='d-block w-100'
            alt='cimg'
          />
        </div>
      </div>
    </>
  )
}

export default Carousel
