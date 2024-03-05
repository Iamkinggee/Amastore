import man from '../assets/man.jpg'
import G8 from '../assets/G8.jpg'
import I1 from '../assets/I1.jpg'
import Headset from '../assets/Headset.jpg'


import { Carousel, Typography, Button } from "@material-tailwind/react";
 
const Hero = () => {
  return (
    <div className='max-w-[1000px] max-h-[500px] mx-auto p-4'>
      <Carousel className="rounded-xl " autoplay={true} autoplayDelay={3000} loop={true}>
        <div className="relative h-full w-full">
          <img  loading="lazy"
            src={man}
            alt="image 2"
            className="max-h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center   bg-gradient-to-r from-purple-900 to-transparent bg-opacity-50">
            
            
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className=" ml-5"
              >
                <h1 className=' px-4 text-3xl sm:text-4xl p-1  md:text-5xl lg:text-6xl font-normal'>Shopping<span className='text-red-300 font-bold'> Made</span></h1>
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal' >
 
           Very Easy!
          </h1>
              </Typography>
            </div>
          </div>
        </div>









        <div className="relative h-full w-full">
          <img  loading="lazy"
            src={G8}
            className="max-h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center  bg-gradient-to-r from-black to-transparent bg-opacity-80">
            
            
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className=" ml-5"
              >
                <h1 className='px-4 text-3xl sm:text-4xl p-1  md:text-5xl lg:text-6xl font-normal'><span className='text-orange-900 font-bold'> Discover</span> New </h1>
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal' >
 
          Arrivals Today!
          </h1>
              </Typography>
            </div>
          </div>
        </div>





        <div className="relative h-full w-full">
          <img  loading="lazy"
          src={Headset}
            alt="image 2"
            className="max-h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center   bg-gradient-to-r from-purple-900 to-transparent bg-opacity-50">

            
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className=" ml-5"
              >
                <h1 className='px-4 text-3xl sm:text-4xl p-1  md:text-5xl lg:text-6xl font-normal'>We<span className='text-yellow-900 font-bold'> Got</span></h1>
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal' >
 
            You Covered!
          </h1>
              </Typography>
            </div>
          </div>
        </div>








        <div className="relative h-full w-full">
          <img  loading="lazy"
            src={I1}
            alt="image 2"
            className="max-h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center   bg-gradient-to-r from-pink-900 to-transparent bg-opacity-50">
            
            
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className=" ml-5"
              >
                <h1 className='px-4 text-3xl sm:text-4xl p-1  md:text-5xl lg:text-6xl font-normal'> <span className='text-orange-500 font-bold'> Premuim</span> Quality</h1>
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal' >
             Only!
          </h1>
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
