import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CoinFlipper from './CoinFlipper';

import imageUrl1 from './assets/vimal front.jpg'
import imageUrl2 from './assets/vimal back.jpg'


function App() {
  

 
  return (

    
    <div className="flex flex-col justify-center items-center h-screen">
      
      <CoinFlipper headsImageUrl={imageUrl1} tailsImageUrl={imageUrl2} />
    </div>
  
   
  
  )
}

export default App
