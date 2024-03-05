import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Products from './Components/Products'
import  Category from './Components/Category'
import Footer from './Components/Footer'
import FooterTwo from './Components/FooterTwo'
import FooterThree from './Components/FooterThree'
import Developer from './Components/Developer'
import SecoundCarousel from './Components/SecoundCarousel'


const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Products/>
     <SecoundCarousel/>
      <Category/>
      <Footer/>
      <FooterTwo/>
      <FooterThree/>
      <Developer/> 
    </div>
  )
}

export default App
