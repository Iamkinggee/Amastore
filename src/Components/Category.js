import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  return (
    <div className='max-w-[1000px] px-4 py-12 m-auto'>
        <h1 className='text-purple-900 font-bold text-4xl text-center '>Hot Deals</h1>
        {/* categories */}

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-9 '>
            {categories.map((item, index)=>(
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 shadow-lg'>
                    <h2 className=' sm:text-[15px]'>{item.name}</h2>
                    <img 
                    className='w-20'
                    src={item.image} alt={item.name} />
                </div>
            ))}

        </div>
    </div>
  )
}

export default Category