import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locationpage from './location'
import Footer from './footer'
import Privacypolicy from './privacypolicy'
import Termsofservice from './terms'
import Faq from './Faq'
import Webpage from './webpage'


function Routerpage() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Webpage/>}/>
        <Route path='/location' element={<Locationpage/>}/>
        <Route path='/footer' element={<Footer/>}/>  
        <Route path='/privacypolicy' element={<Privacypolicy/>}/>
        <Route path='/terms' element={<Termsofservice/>}/>
        <Route path='/faq' element={<Faq/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default Routerpage
