import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';


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
          <img  loading="lazy" className='w-[45px] h-40' alt='' src={'https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://images.pexels.com/photos/6995902/pexels-photo-6995902.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://cdn.pixabay.com/photo/2018/05/28/05/59/whitespace-3435343_1280.jpg'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://images.pexels.com/photos/15979642/pexels-photo-15979642/free-photo-of-golden-phone-stand-in-the-shape-of-a-cobra-with-a-tablet-on-a-table-by-coffee-cup.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        </div>
        <div>
          <img  loading="lazy" alt='' className='w-[45px] h-40'  src={'https://cdn.pixabay.com/photo/2018/02/20/11/49/water-3167440_1280.jpg'} />
        </div>



        
      </InfiniteCarousel>
    </div>

  
  );
};

export default SecoundCarousel;
