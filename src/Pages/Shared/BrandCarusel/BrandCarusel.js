import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/Brand1.png'
import brand2 from '../../../assets/brands/Brand2.png'

const BrandCarusel = () => {
    return (
        <Carousel>
        <Carousel.Item>
         <img className='w-100% d-block' src={brand1} alt='image1'/>
          
        </Carousel.Item>
        <Carousel.Item>
        <img className='w-100% d-block ' src={brand2} alt='image1'/>
         
        </Carousel.Item>
       
      </Carousel>
    );
};

export default BrandCarusel;