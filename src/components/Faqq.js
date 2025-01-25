'use client'
import React, { useState } from 'react';

const Faqq = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  const faqs = [
    {
      question: "Will Laser Hair Removal Help With Acne?",
      answer: "Laser hair removal may help reduce acne by minimizing skin irritation caused by shaving or waxing."
    },
    {
      question: "What Is Cost Laser Hair?",
      answer: "The cost of laser hair removal varies depending on the area treated and the number of sessions required."
    },
    {
      question: "What Is Laser Hair Removal?",
      answer: "Laser hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair."
    },
    {
      question: "Is Laser Hair Removal Painful?",
      answer: "Some individuals may experience discomfort during laser hair removal, but it is generally tolerable with cooling systems in place."
    },
    {
      question: "How Many Laser Hair Removal Sessions Do I Need?",
      answer: "The number of sessions varies depending on the area treated, but most people need 6 to 8 sessions for optimal results."
    }
  ];

  const toggleFaq = (index) => {
    setSelectedFaqIndex(selectedFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent  py-10">
      <div className='bg-gradient-to-r from-black via-black to-[#373317] bg-clip-text text-transparent'>
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text font-pattaya text-transparent">❋</span> FAQs{" "}
          <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent">❋</span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto font-sans space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="border border-[#d39937] p-4 text-lg font-semibold hover:bg-gradient-to-r from-[#d39937] via-[#d39937] to-[#d39937] hover:text-white transition duration-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
            </div>
            {selectedFaqIndex === index && (
              <div className="bg-gradient-to-r from-[#d39937] via-[#d39937] to-[#d39937] text-white p-4 mt-1 border-l-4 border-[#d39937]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faqq;
