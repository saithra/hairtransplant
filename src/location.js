import React from 'react'
import "./location.css"
import Footer from './footer';
import Navbar from './navbar';



function Locationpage() {

 
  return (
    <>
    <Navbar/>
    
      
        <div class="location" style={{width: "100%",marginTop:"-20px"}}><iframe width="100%" height="600" title='map' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dr.Prabhakar%20Hair%20Transplant%20clinic,%202nd%20floor,%20kovai%20ENT%20building%20complex,%20CMS%20bus%20stop,%20sathy%20main%20road,%20ganapathy%20,%20coimbatore-%20641006+(Hair%20Transplant%20clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
      
   
  <Footer/>

    </>
  )
}

export default Locationpage
