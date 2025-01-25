import React from "react";
import Laser from "@/components/Lazer";
import Footer from "@/components/Footer";
import Faqq from "@/components/Faqq";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className=" relative overflow-hidden">
     
     <Navbar/>
      <div className="relative z-10">
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
        About Us
      </h3>
    </div>
  </div>
</div>
<div className="main relative">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          src="https://www.figma.com/file/kTmIZ07jN9UhktVbu2Ngsu/image/f856859e4f95b73645f94f1568e0946aa74c575b"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 z-10"></div>

        <div className="relative z-20">
        <div className="flex items-center justify-center mt-[10px] mb-[8px]">
  <div className="text-center w-full">
    <div className="py-12 px-6 md:px-20 lg:px-40">
    <div className="flex flex-col-reverse md:flex-row items-center gap-16"> 
  <div className="w-full md:w-7/12 text-center md:text-left">
    <h3 className="text-sm font-light uppercase tracking-wide text-gray-600">
      Personalized Treatment Plan With The Latest Laser Technology For Permanent Hair Removal
    </h3>
    <h1 className="text-4xl md:text-5xl font-pattaya font-bold leading-snug text-gray-900 mt-4">
      Our Triple Ice Quattaro Diode Laser Ensure A Painless And Effective Treatment
    </h1>
    <div className="mt-6">
      <a
        href="https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/?locations=Dreef%202%2C%204875%20AC%20Etten-Leur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#d39937] rounded-full font-semibold font-sans text-white py-2 px-4 w-full md:w-auto animate-button">
          Book an Appointment
        </button>
      </a>
    </div>
  </div>

  {/* Image Section taking col-5 equivalent */}
  <div className="w-full md:w-5/12 relative">
    <div className="rounded-lg">
      <img
        src="col.png"
        alt="Woman relaxing"
        className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-full" 
        style={{ maxHeight: "600px" }} 
      />
    </div>
  </div>
</div>

    </div>
  </div>
</div>
        </div>
      </div>



        <Faqq />
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-xl font-bold font-pattaya text-center text-[#38271d]">procedure</h1>
        </div>
        <Laser />
        <div className="main relative">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          src="https://www.figma.com/file/kTmIZ07jN9UhktVbu2Ngsu/image/f856859e4f95b73645f94f1568e0946aa74c575b"
        />
        
        {/* White Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#e8fdf8] opacity-80 z-10"></div>

        {/* Content */}
        <div className="relative py-12 z-20">
        <h2 className="text-center text-3xl md:text-4xl font-pattaya font-bold text-gray-900 mb-12">
    Why Choose Us
  </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className=" rounded-br-3xl  p-6 text-center">
      <div className="rounded-xl overflow-hidden ">
        <img
          src="4.png"
          alt="Facial Hair Removal"
          className="w-full  object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold font-pattaya text-gray-800 mt-4">
        Safety
      </h3>
    </div>

    <div className=" rounded-br-3xl p-6 text-center">
      <div className="rounded-xl overflow-hidden ">
        <img
          src="5.png"
          alt="Arms Hair Removal"
          className="w-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold font-pattaya text-gray-800 mt-4">
       Expertise
      </h3>
    </div>

    <div className="   rounded-br-3xl  p-6 text-center">
      <div className="rounded-xl overflow-hidden  ">
        <img
          src="6.png"
          alt="Legs Hair Removal"
          className="w-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold font-pattaya text-gray-800 mt-4">
  Advanced Technology
</h3>
    </div>
  </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
