import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbars from './Components/Navbars'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Menu from './Components/Menu'
import Products from './Components/Products'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
Navbars

function App() {


  return (
    <>
      
      <Navbars/>
      <Home/>
      <AboutUs/>
      <Menu/>
      <Products/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
      
      
    </>
  )
}

export default App
