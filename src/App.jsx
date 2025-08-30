
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Features from './components/Features'
import Carousel from './components/Carousel'
import LogoSlider from './components/LogoSlider'
import Management from './components/Management'
import WorkSection from './components/WorkSection'
import Bomb from './components/Bomb'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Management/>
      
      
     <Carousel/>
     
     <LogoSlider/>
     <WorkSection/>
     <Bomb/>
     <BlogSection/>
     <Footer/>
    </div>
  )
}

export default App
