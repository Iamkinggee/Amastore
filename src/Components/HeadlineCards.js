import React from 'react'


const HeadlineCards = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* Overlay */}

            <div className='absolute w-full h-full bg-black/20 rounded-xl text-white shadow-lg'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's out, BOGO'S Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 hover:bg-purple-900 border-none font-bold hover:text-white absolute  bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={'https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="/" />
        </div>



         {/* card */}
         <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* Overlay */}

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white shadow-lg'>
                <p className='font-bold text-2xl px-2 pt-4'>New Products</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute  bottom-4 hover:bg-purple-900 border-none font-bold hover:text-white'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={'https://cdn.pixabay.com/photo/2018/03/12/22/15/clothing-3221103_1280.jpg'} alt="/" />
        </div>




         {/* card */}
         <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* Overlay */}

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white shadow-lg'>
                <p className='font-bold text-2xl px-2 pt-4'>Premuim Gadgets</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute  bottom-4 hover:bg-purple-900 border-none font-bold hover:text-white'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={'https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045_1280.jpg'} alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards