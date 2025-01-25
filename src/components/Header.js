'use client';
import Link from 'next/link';  
import { FaPlayCircle } from "react-icons/fa";
import Video from './Video';
function Header() {
  return (
    <div className="container body p-5">
    <div className="flex items-center justify-center mt-[10px] mb-[8px]">
  <div className="text-center">
    <div className="py-12 px-6 md:px-20 lg:px-40">
    <div className="flex flex-col-reverse md:flex-row items-center gap-24"> {/* Increased gap here */}
  <div className="text-center md:text-left">
    <h3 className="text-sm font-normal !font-sans uppercase tracking-wide text-gray-600">
      Welcome to Medilaser
    </h3>
    <h1 className="text-4xl md:text-5xl font-destine  leading-snug text-gray-900 mt-4">
      Revolutionizing Care <br />
      with Advanced Laser Technology
    </h1>

    <div className="mt-6 gap-4 flex">
    <a href="https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/?locations=Dreef%202%2C%204875%20AC%20Etten-Leur" target="_blank" rel="noopener noreferrer">
                          <button className="bg-[#d39937] font-sans font-semibold text-white py-2 px-4 rounded-full w-full md:w-auto animate-button">
                            Book Appointment
                          </button>
                        </a>
      <div className="mt-2">
        {/* <FaPlayCircle className="text-xl" /> */}
        <Video/>
      </div>
    </div>
  </div>

  {/* Responsive Image Section */}
  <div className="relative">
    <div className="rounded-lg">
      <img
        src="wom.png"
        alt="Woman relaxing"
        className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
      />
    </div>
  </div>
</div>

    </div>
  </div>
</div>

    

    </div>
  );
}

export default Header;
