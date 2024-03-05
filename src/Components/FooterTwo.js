import React from 'react'

const FooterTwo = () => {
  return (
    <div className=' w-full bg-gray-900 '>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 py-4 p-5 text-white justify-center text-[15px]  max-w-[1000px] m-auto h-[400px] md:h-[300px]'>
        {/* first */}
        <div className=''>
            <div>
            <h1 className=' py-2 x'>NEED HELP?</h1>

            <ul className='cursor-pointer font-light  '>
                <li>Chat With us</li>
                <li>Help Center</li>
            </ul>
            </div>
            <div className='mt-5'>
                <h1 className='py-2 '>USEFUL LINKS</h1>
                <ul className='cursor-pointer font-light '>
                <li>Service Center</li>
                <li>How to Shop on Amastore</li>
                <li>Report a Product</li>
            </ul>
                
        
            </div>
        </div>

{/* secound */}
        <div>
            <h1 className=' py-2'>ABOUT AMASTORE</h1>
            <ul className='cursor-pointer font-light '>
                <li>About Us</li>
                <li>Flash Sales</li>
                <li>Privacy Notice</li>
            </ul>
        </div>


        {/* third row */}

        <div>
            <h1 className='py-2 '>MAKE MONEY WITH AMASTORE</h1>

            <ul className='cursor-pointer font-light'>
                <li>Vendor Hub</li>
                <li>Sell on amastore</li>
                <li>Join the Amastore Academy</li>
            </ul>
        </div>
{/* forth */}

<div>
    <h1 className=' text-white py-2'>AMASTORE INTERNATIONAL</h1>

    <div className='flex gap-5'>
        <div>
        <ul className='cursor-pointer font-light'>
                <li>Nigeria</li>
                <li>United State</li>
                <li>Pakistan</li>
            </ul>
        </div>
        <div>
        <ul className='cursor-pointer font-light'>
                <li>Ghana</li>
                <li>Canada</li>
                <li>France</li>
            </ul>
        </div>
    </div>
</div>

    </div>
    </div>
  )
}

export default FooterTwo