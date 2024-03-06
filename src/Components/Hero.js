

import { Carousel, Typography, Button } from "@material-tailwind/react";
 
const Hero = () => {
  return (
    <div className='max-w-[1000px] max-h-[500px] mx-auto p-4'>
      <Carousel className="rounded-xl " autoplay={true} autoplayDelay={3000} loop={true}>
        <div className="relative h-full w-full">
          <img  loading="lazy"
             src={'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D'}
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
            src={'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww'}
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
         src={'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww'}
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
            src={'https://images.pexels.com/photos/2868266/pexels-photo-2868266.jpeg?auto=compress&cs=tinysrgb&w=600'}
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
