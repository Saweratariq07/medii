// src/FAQ.js

import React, { useState } from 'react';

const FAQ = ({ faqs, openIndex, toggleFAQ }) => {
    return (
        <div className="flex flex-col space-y-4"> 
            {faqs.map((faq, index) => (
                <div key={index} className="bg-[#f5f0ed] text-black rounded-lg shadow-md">
                    <div className={`border-b border-[#886d55] ${openIndex === index ? 'bg-[#38271d] ' : ''}`}>
                        <button
                            className="w-full text-left py-4 px-4 bg-[#f5f0ed]"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Faq = () => {
    const faqs = [
        {
            question: "How Does Laser Hair Removal Work?",
            answer: "Laser hair removal uses concentrated light to target hair follicles, providing a quick and efficient method to reduce hair growth."
        },
        {
            question: "Does Laser Hair Removal Hurt?",
            answer: "The treatment is virtually painless, especially compared to waxing. Each pulse lasts less than a second."
        },
        {
            question: "How Many Sessions Are Needed?",
            answer: "Most clients require 6-8 sessions for optimal results."
        },
        {
            question: "Is It Safe For All Skin Types?",
            answer: "Yes, but it's important to consult a professional for personalized advice."
        },
        {
            question: "Why You Choose Us?",
            answer: "We offer advanced technology and personalized treatments for the best results."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 font-sans gap-4">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center justify-center space-x-4">
                        <h1 className="text-xl font-bold font-destine text-center text-[#000000]">
                            We Have Answers Of
                        </h1>
                    </div>

                    <FAQ faqs={faqs} openIndex={openIndex} toggleFAQ={toggleFAQ}  className=""/>
                </div>

                <div className="relative col-span-1 md:col-span-2 font-sans rounded-md text-black px-6 py-4">
  <video 
    className="absolute inset-0 w-full h-full object-cover z-0" 
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="https://videos.pexels.com/video-files/4264904/4264904-sd_640_360_30fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 font-sans bg-[#cfc5bb] opacity-80 z-10"></div>

  <div className="relative z-20">
    {openIndex !== null ? (
      <div>
        <h1 className="text-2xl pt-14 !font-sans  z-20 md:text-xl font-bold text-black" >
          {faqs[openIndex].answer}
        </h1>
      </div>
    ) : (
      <div>
       <h1 
  className="text-2xl md:text-xl font-bold pt-14 !font-sans text-black z-20" 

>
  One of the benefits of Laser Hair Removal is that the treatment is virtually painless, especially compared to waxing. Each pulse lasts less than a second, producing a slight tingling feeling. In particularly sensitive areas, such as the upper lip, it may feel like a rubber band snap on the skin. We use an advanced cooling machine in conjunction with our laser device to reduce the heat sensation on the skin and minimize any discomfort.
</h1>

      </div>
    )}
  </div>
</div>


            </div>
        </div>
    );
};

export default Faq;
