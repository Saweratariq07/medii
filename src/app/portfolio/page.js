import React from 'react';
import Navbar from '@/components/Navbar';
import Contect from '@/components/Contect';


function Port() {
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
        Portfolio
      </h3>
    </div>
  </div>
</div>
<div className="container  mx-auto flex flex-col justify-center px-6 items-center py-4">
    <div>
      <h3 className="text-center font-normal md:text-xl mb-4 text-black">
      Before and After Hair Removal at MediLaser
      </h3>
      <p className="text-center md:text-3xl font-pattaya font-semibold mb-4 text-black">
      Prepare thoroughly for your hair removal treatment and revel in the 
      </p>
      <p className="text-center md:text-3xl mb-4 font-pattaya font-semibold text-black">
      remarkable results with our expert care.
      </p>
      
    </div>
  </div>
<div className="container  mx-auto flex flex-col justify-center px-6 items-center py-8">
<div className="container mx-auto   flex flex-col justify-center px-6 pt-4 items-center py-4">
         
         <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
             <div>
               <img src="/img/13.png" alt="Image 13" className="h-96" />
             </div>
             <div>
               <img src="/img/14.png" alt="Image 14" className="h-96" />
             </div>
             <div>
               <img src="/img/15.png" alt="Image 15" className="h-96" />
             </div>
           </div>
         </div>

         <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-2">
             <div>
               <img src="/img/16.png" alt="Image 16" className="h-96" />
             </div>
             <div>
               <img src="/img/17.png" alt="Image 17" className="h-96" />
             </div>
             <div>
               <img src="/img/18.png" alt="Image 18" className="h-96" />
             </div>
           </div>
         </div>
        </div>

  </div>


      <div className="container justify-center align-middle text-center mx-auto px-12">
      <Contect/>
      </div>
    
    </div>
  );
}

export default Port;
