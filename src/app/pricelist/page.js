import React from 'react';
import Service from '../../components/service/Service';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Price() {
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
        PriceList
      </h3>
    </div>
  </div>
</div>

<div className="container  mx-auto flex flex-col justify-center px-6 items-center py-8">
  
    <div>
      <h3 className="text-center font-normal md:text-2xl mb-4 text-black">
        Personalized Treatment Plan With The Latest Laser Technology For
        Permanent Hair Removal
      </h3>
      <p className="text-center md:text-3xl font-pattaya font-semibold mb-4 text-black">
        Our Triple Ice Quattaro Diode Laser Ensure A
      </p>
      <p className="text-center md:text-3xl mb-4 font-pattaya font-semibold text-black">
        Painless And Effective Treatment
      </p>
      <div className="flex justify-center items-center">
  <a
    href="https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/?locations=Dreef%202%2C%204875%20AC%20Etten-Leur"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#d39937] rounded-full font-semibold text-white py-2 px-4 w-full md:w-auto animate-button">
      Book an Appointment
    </button>
  </a>
</div>
    </div>
  </div>

  <div className="bg-black py-6">
  <h2 className="text-center text-white font-pattaya text-2xl md:text-3xl font-semibold">
    Categories
  </h2>
</div>

      <div className="container justify-center align-middle text-center mx-auto px-12">
      <Service />
      </div>
      <Footer/>
    </div>
  );
}

export default Price;
