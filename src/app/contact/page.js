
import React from 'react'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import Footer from '@/components/Footer'
function Contect() {
  return (
    <div className="relative bg-white overflow-hidden">
    <Navbar/>
    <div
     className="relative z-10 py-16 w-full bg-no-repeat bg-center"
     style={{
       backgroundImage: "url('bg.png')",
       backgroundSize: "cover", // Ensures the image fills the entire area
     }}
   >
     <div className="absolute inset-0 bg-[#000000] opacity-40 z-0"></div>
   
     <div className="relative z-10 container mx-auto flex flex-col justify-center px-6 items-center py-12">
       <div>
         <h3 className="text-center font-semibold font-pattaya md:text-5xl text-white">
           Contact Us
         </h3>
       </div>
     </div>
   </div>
   <Social/>
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





  