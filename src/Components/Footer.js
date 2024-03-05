import React from 'react'
import applestore from '../../src/assets/brandlogos/applestore.png'
import googleplay from '../../src/assets/brandlogos/googleplay.png'

const Footer = () => {
  return (
 
    <div className=' bg-purple-900 w-full h-[400px] md:h-[200px] p-5 '>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4  text-white justify-center items-center  max-w-[1000px] m-auto'>


        <div ><h1 className='justify-center font- text-[40px] text-center '><span className='font-bold text-black'>a</span>mastore</h1></div>

        <div className='text-start'>
            <h1 className=' text-2xl'>New to amastore?</h1>
            <p className='font-light'>Subscribe to our newsletter to get updates on our latest offers.</p>

            
            <div className='flex py-5 justify-center items-center md:justify-start  md:items-start m-auto  '>
                <input type="text" placeholder='Enter Email Address' className=' p-2 rounded w-[200px]'/>
                
                <button className=' bg-black border-none h-27 p-2 text-white rounded'>Subscribe</button>
               
        
            </div>






            

        </div>


        <div>
            <div className='w-[400px] justify-center items-center m-auto text-center'>
                <h1 className='font-bold text-center'>DOWNLOAD AMASTORE APP</h1>
                <p className='text-center font-light'>Get Access to exclusive  Offers</p>
                <div className='flex gap-3 justify-center items-center p-3 cursor-pointer'>
                 <img src={applestore} alt="/" className='w-[100px] text-end ' />
                 <img src={googleplay} alt="/" className='w-[100px]'  />
                </div>
            </div>
        </div>




    </div>
    </div>
  )
}

export default Footer