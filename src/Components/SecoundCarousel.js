import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import O1 from '../assets/O1.jpg';
import O3 from '../assets/O3.jpg';
import O4 from '../assets/O4.jpg';

const SecoundCarousel = () => {
  return (
    
<div  className='max-w-[1000px] m-auto px-4 py-8  border-b-2 border-purple-700/20 '>
<h1 className='text-purple-900 font-bold text-4xl text-center py-9'>Show Room</h1>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.5}
        slidesToScroll={4}
        slidesToShow={5}
        scrollOnDevice={true}
        infinite={true} // Add this prop to make the carousel slide infinitely
        autoplay={true} // Add this prop to enable autoplay
        autoplaySpeed={2000} // Add this prop to set the autoplay speed in milliseconds (2 seconds)
      >
        <div className='w-full  h-50' >
          <img  loading="lazy" className='w-[45px] h-40' alt='' src={O4} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={O1} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={O3} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={O4} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={O1} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={O3} />
        </div>
      </InfiniteCarousel>
    </div>

  
  );
};

export default SecoundCarousel;
