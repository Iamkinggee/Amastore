import React, {useState}from 'react'
import {data} from '../data/data.js'


const Products = () => {
    // console.log(data)

    const [product, setProduct] = useState(data);

// filter type burger/pizza/etc

const filterType = (category) =>{
    setProduct(
    data.filter((item) =>{
        return item.category === category;
    })
    );
};


// filter by price

const filterPrice = (price)=>{
    setProduct(
        data.filter((item)=>{
            return item.price === price;
        })
    )
}

  return (
    <div  className='max-w-[1000px] m-auto px-4 py-12 '>
<h1 className='text-purple-900 font-bold text-4xl text-center'>Top Rated Products</h1>
{/* Filter Row */}
<div className='flex flex-col lg:flex-row justify-between border-b-2 border-purple-700/20 p-5'>
    {/* Filter Type */}
    <div>
  <p className='font-bold text-blue-gray-800'>Filter Type</p>
  <div className='flex justify-between flex-wrap font-bold '>
    <button 
    
    onClick={()=> setProduct(data)}
    className='m-1 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white' >All</button>
    <button 

    onClick={()=>filterType('intrument')}
    
    className='m-1 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white' >musical Instrument</button>
    <button 
    onClick={()=>filterType('gadget')}
    className='m-1 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white' >Gadget</button>
    <button 
    onClick={()=>filterType('outfit')}
    className='m-1 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white' >Cloths</button>
  </div>

    </div>

    {/* filter Price */}
    <div>
        <p className='font-bold text-blue-gray-800'>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full font-bold'>
            <button 

            onClick={()=>filterPrice('$20')}
            
            className='m-1  border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white'>$20</button>
            <button  onClick={()=>filterPrice('$50')} className='m-1  border-purple-900 text-purple-900 hover:bg-purple-900  hover:text-white'>$50</button>
            <button  onClick={()=>filterPrice('$100')}  className='m-1 border-purple-900 text-purple-900 hover:bg-purple-900   hover:text-white'>$100</button>
            <button  onClick={()=>filterPrice('$500')} className='m-1  border-purple-900 text-purple-900 hover:bg-purple-900  hover:text-white '>$500</button>
           
        </div>
    </div>
</div>

{/* display products */}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer border-b-2 border-purple-700/20 p-5'>
    {product.map((item, index)=>(
    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg '>
        <img  loading="lazy" src={item.image} alt={item.name} 
        className='w-full h-[200px] object-cover rounded-t-lg'
        
        
        />

        <div className='flex justify-between px-2 py-4 cursor-pointer'>
            <p className=''>{item.name}</p>
            <p>
                <span className=' bg-purple-900 fon text-white p-2 rounded-full'>{item.price}</span>
            </p>
        </div>
    </div>

    

    ))}

</div>
    </div>
  )
}

export default Products