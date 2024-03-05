import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'



const Navbar = () => {

    const[nav, setNav] = useState(false);
  return (
    <div className='w-full max-w-[1000px] m-auto flex justify-between items-center p-4 '>
      {/* left side */}
    <div className='flex items-center'>
      <div
      onClick={()=> setNav(!nav)}
       className='cursor-pointer'>
        <AiOutlineMenu size={30}/>
      </div>
      <h1 className='justify-center  text-[40px] ml-5 text-center '><span className='font-bold text-purple-900'>a</span>mastore</h1>


    </div> 
    {/* search input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <AiOutlineSearch size={25}/>
      <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Product'/>
    </div>
    {/* cart */} 

    <button className='bg-purple-900 border-none shadow-lg text-white hidden md:flex items-center py-2 rounded-full'>
      <BsFillCartFill size={20} className='mr-2'/> Cart
    </button>

    {/* mobile Menu */}
    {/* overlay */}
{nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
    </div>  : '' }
    

    {/* side drawer menu */}

    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 text-white' }>
<AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4
top-4 cursor-pointer text-white'/>

<h1 className='justify-center w-full text-[30px] border-b-2 border-purple-700/20 p-5 bg-black text-white'><span className='font-bold text-purple-900'>a</span>mastore</h1>

<nav>
    <ul className='flex flex-col p-4 text-gray-800 cursor-pointer'>
        <li className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4 cursor-pointer'/>Orders</li>
        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4 cursor-pointer'/>Favourites</li>
        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4 cursor-pointer'/>Wallet</li>
        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4 cursor-pointer'/>  Help</li>
        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4 cursor-pointer'/>Orders</li>
        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4 cursor-pointer'/>Promotions</li>
        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4  cursor-pointer'/>Invite Friends</li>
    </ul>
</nav>
    </div>







    </div>
  )
}

export default Navbar