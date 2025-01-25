'use client';
import Link from 'next/link';  
import Slide from './Slide';
import Faq from './Faq';
import Contect from './Contect';
import Tog from './Tog';
import View from './View';

function Section() {
  return (
    <div className=" body ">
      <div className="flex items-center justify-center mt-[10px] mb-[8px]">
        <div className="text-center">
        {/* <div className="bg-white py-12">
  <h2 className="text-center text-3xl md:text-4xl font-pattaya font-bold text-gray-900 mb-12">
    Our Service
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src="1.png"
          alt="Facial Hair Removal"
          className="w-full h-96 object-cover" 
        />
      </div>
      <h3 className="text-lg font-pattaya text-gray-800 mt-4">
        Facial Hair Removal
      </h3>
    </div>

    <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src="2.png"
          alt="Arms Hair Removal"
          className="w-full h-96 object-cover" 
        />
      </div>
      <h3 className="text-lg font-pattaya text-gray-800 mt-4">
        Arms Hair Removal
      </h3>
    </div>

    <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src="3.png"
          alt="Legs Hair Removal"
          className="w-full h-96 object-cover" 
        />
      </div>
      <h3 className="text-lg font-pattaya text-gray-800 mt-4">
        Legs Hair Removal
      </h3>
    </div>
  </div>

  <div className="text-center mt-10">
    <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition">
      View More
    </button>
  </div>
</div> */}
<View/>

        </div>
      </div>
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
      <div className='bg-[#000000] text-center p-4  text-white'>

<div className="flex flex-wrap items-center text-center">
 

  <div className="mx-auto p-4">
    <h1
      className="text-[#ffffff] inline-block text-2xl font-bold font-pattaya sm:text-3xl md:text-4xl lg:text-5xl "
      style={{ borderBottom: "2px solid white" }}
    >
      Before and after
    </h1>
    <h4 className="text-lg sm:text-2xl font-sans md:text-2xl mt-2">
      From underarms to bikini lines and legs to lips, the results of laser hair
      removal at MedLaser are exceptional and truly unrivaled.
    </h4>
    <h6 className="text-[#ffffff] font-sans text-base sm:text-lg md:text-lg text-center mt-4">
      Our laser hair removal treatment is versatile enough to target any area of
      the body and is safe for all skin tones. Whether you have dark or fair
      skin, we can customize our laser settings to deliver the most effective
      results tailored to your complexion.
    </h6>
  </div>

 
</div>
</div>
<Slide/>
<div className="container mx-auto px-4 md:px-6 py-10 text-center">
  <div className="flex flex-col md:flex-row md:space-x-0">
    <div className="md:w-1/2 flex items-center justify-center relative">
      <div className="z-10" />
      <div className="z-10" />
      <div className="relative overflow-hidden rounded-full shadow-inner w-80 h-80">
        {/* Video Player */}
        <video
          className="w-full h-full object-cover rounded-full"
          src="video.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
        />
      </div>
    </div>

    <div className="md:w-1/2 flex flex-col items-center justify-center mt-8 px-4 relative overflow-hidden md:px-6 text-center">
      <div className=""></div>
      <div className="relative z-20 overflow-hidden">
        <h1 className="sm:text-3xl md:text-6xl text-2xl font-bold font-pattaya text-black">
          Benefits of removing hair with laser
        </h1>

        <div className="flex text-black gap-3 py-2 justify-center">
          <img src="cir.png" alt="circle" className="h-3 w-3 mt-2" />
          <h1 className="sm:text-3xl md:text-xl !font-sans text-2xl font-normal text-black">
            Long lasting results
          </h1>
        </div>
        <div className="flex text-black gap-3 py-2 justify-center">
          <img src="cir.png" alt="circle" className="h-3 w-3 mt-2" />
          <h1 className="sm:text-3xl !font-sans md:text-xl text-2xl font-normal text-black">
            Precision and speed
          </h1>
        </div>
        <div className="flex text-black gap-3 py-2 justify-center">
          <img src="cir.png" alt="circle" className="h-3 w-3 mt-2" />
          <h1 className="sm:text-3xl !font-sans md:text-xl text-2xl font-normal text-black">
            Painless procedure
          </h1>
        </div>
        <div className="flex text-black font-sans gap-3 py-2 justify-center">
          <img src="cir.png" alt="circle" className="h-3 w-3 mt-2" />
          <h1 className="sm:text-3xl !font-sans md:text-xl text-2xl font-normal text-black">
            Book appointment with us and get an extra 20% discount
          </h1>
        </div>

        <div className="flex items-center mb-8 justify-center space-x-4 mt-4">
          <a
            href="https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/?locations=Dreef%202%2C%204875%20AC%20Etten-Leur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#d39937] font-sans font-semibold text-white py-2 px-4 rounded-full w-full md:w-auto animate-button">
              Book Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


              <Faq/>
              <Contect/>
    </div>
  );
}

export default Section;

