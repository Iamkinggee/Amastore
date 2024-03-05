import React from 'react'
import {FaFacebook, FaYoutube,FaTwitter} from "react-icons/fa"
import mastercard from '../../src/assets/brandlogos/mastercard.png'
import interswitch from '../../src/assets/brandlogos/interswitch.png'
import visa from '../../src/assets/brandlogos/visa.png'
import verve from '../../src/assets/brandlogos/verve.png'

const FooterThree = () => {
  return (
    <div className='w-full h-[180px] md:h-[100px] bg-blue-gray-900 '>
     

    <div className=' gap-3 grid grid-cols-1 md:grid-cols-2    text-white m-auto max-w-[1000px] p-5 text-center '>

        <div className='' >
        <h1 className=' text-[13px] text-center '>JOIN US ON</h1>

        <div className='flex py-3 gap-5 items-center justify-center m-auto  md:items-start '>
          
        <FaFacebook size={20} className='text-white '/>
        <FaYoutube size={20} className='text-white '/>
        <FaTwitter size={20} className='text-white '/>
        </div>
        </div>

        <div className='text-[13px]'>
          <h1 className=''>PAYMENT METHODS & DELIVERY PATTERNS</h1>

          <div className='py-2 gap-3 flex items-center justify-center m-auto'>
            <img src={mastercard} alt="/" className='w-[30px] h-[20px]' />
            <img src={verve} alt="/"  className='w-[60px] h-[20px]' />

            <img src={visa} alt="/"  className='w-[60px] h-[20px]' />
      
            <img src={interswitch} alt="/" className='w-[60px] h-[20px]' />
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default FooterThree