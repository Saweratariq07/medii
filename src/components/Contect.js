
import React from 'react'
import Contact from './Contact'
import Footer from './Footer'

function Contect() {
  return (
    <div>
   
   <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 min-h-screen">
  {/* Form Section */}
  <Contact />
  
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="fo.png"
      alt="Consultation"
      className="rounded-xl  object-cover"
    />
  </div>
</div>
<Footer/>
   
    </div>
  )
}

export default Contect





  