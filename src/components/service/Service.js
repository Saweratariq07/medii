
'use client'
import React, { useState } from 'react';

const Service = () => {
  const [activeTab, setActiveTab] = useState('women');
  const [activeSubTab, setActiveSubTab] = useState('all');

  const servicesWomen = [
    {
      section: 'face',
      image: '/img/7.png',
      title: 'Complete Face',
      price: '€69',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/gelaat',
      details: [
        { name: 'Nose', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/neus' },
        { name: 'Upper Lip', price: '€30', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenlip' },
        { name: 'Throat', price: '€35', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/throat' },
        { name: 'Chin', price: '€35', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/chin' },
        { name: 'Neck', price: '€40', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/neck' },
      ],
    },
    {
      section: 'arms',
      image: '/img/8.png',
      title: 'Complete Arms',
      price: '€69',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/armen',
      details: [
        { name: 'Armpits', price: '€35', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/oksels' },
        { name: 'Fingers', price: '€20', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/vingers' },
        { name: 'Forearms', price: '€50', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderarmen' },
        { name: 'Upper Arms', price: '€50', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenarmen' },
      ],
    },
    {
      section: 'legs',
      image: '/img/9.png',
      title: 'Complete Legs',
      price: '€79',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/benen',
      details: [
        { name: 'Toes', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/tenen' },
        { name: 'Lower Legs', price: '€65', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderbenen' },
        { name: 'Upper Legs', price: '€55', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenbenen' },
      ],
    },
    {
      section: 'bikini',
      image: '/img/33.jpg',
      title: 'Bikini',
      price: '€79',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/bikiny',
      details: [
        // { name: 'Toes', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/tenen' },
        // { name: 'Lower Legs', price: '€65', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderbenen' },
        // { name: 'Upper Legs', price: '€55', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenbenen' },
      ],
    },
    {
      section: 'body',
      image: '/bodi.jpeg',
      title: 'Complete Body',
      price: '€149',
      btns:'Book Now!', link:'https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/appointment/66294077/calendar/10421916?appointmentTypeIds[]=66294077',
      details: [
        // { name: 'Toes', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/tenen' },
        // { name: 'Lower Legs', price: '€65', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderbenen' },
        // { name: 'Upper Legs', price: '€55', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenbenen' },
      ],
    },
  ];

  const servicesMen = [
    {
      section: 'face',
      image: '/img/face.jpg',
      title: 'Complete Face',
      price: '€69',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/gelaat',
      details: [
        { name: 'Nose', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/neusheren' },
        { name: 'Eyebrow Bridge', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/wenkbrouwen' },
        { name: 'Throat', price: '€40', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/nekhalsbaardlijn' },
        { name: 'Neck', price: '€40', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/nekhalsbaardlijn' },
      ],
    },
    {
      section: 'arms',
      image: '/img/arm.jpg',
      title: 'Complete Arms',
      price: '€69',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/completearmsheren',
      details: [
        { name: 'Armpits', price: '€35', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/okselsheren' },
        { name: 'Fingers', price: '€20', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/vingersheren' },
        { name: 'Forearms', price: '€55', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderarmenheren' },
      ],
    },
    {
      section: 'legs',
      image: '/img/legs.jpg',
      title: 'Complete Legs',
      price: '€99',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/benenbillen',
      details: [
        { name: 'Toes', price: '€30', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/tenenheren' },
        { name: 'Lower Legs', price: '€75', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderbenenheren' },
        { name: 'Upper Legs', price: '€70', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenbenenheren' },
      ],
    },
   
    {
      section: 'chest',
      image: '/img/11.jpg',
      title: 'Complete Chest/Abdominal',
      price: '€99',
      btns:'Book Now!', link:'https://Medi-Laser-aesthetic-Lucy.as.me/borst',
      details: [
        // { name: 'Toes', price: '€25', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/tenenheren' },
        // { name: 'Lower Legs', price: '€65', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/onderbenenheren' },
        // { name: 'Upper Legs', price: '€55', link: 'https://Medi-Laser-aesthetic-Lucy.as.me/bovenbenenheren' },
      ],
    },
    {
      section: 'back',
      image: '/img/1.jpg',
      title: 'Complete Back /Shoulders',
      price: '€99',
      btns:'Book Now!', link:'https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/appointment/67220602/calendar/10421916?appointmentTypeIds[]=67220602',
      details: [
      
      ],
    },
    {
      section: 'body',
      image: '/body.jpeg',
      title: 'Complete Body',
      price: '€199',
      btns:'Book Now!', link:'https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/appointment/67185622/calendar/10421916?appointmentTypeIds[]=67185622',
      details: [
      
      ],
    },
  ];

  const activeServices = activeTab === 'women' ? servicesWomen : servicesMen;

  const availableTabs =
    activeTab === 'women'
      ? ['all', 'face', 'arms', 'legs', 'bikini','body']
      : ['all', 'face', 'arms', 'legs', 'chest', 'back','body'];

  const filteredServices =
    activeSubTab === 'all'
      ? activeServices
      : activeServices.filter((service) => service.section === activeSubTab);

  return (
    <div className="relative text-[#000000] min-h-screen py-12">
   

      <div className="text-center mb-8">
        <button
          className={`text-2xl font-bold px-6 font-pattaya py-2 focus:outline-none ${
            activeTab === 'women'
              ? 'text-[#38271d] border-b-2 border-[#38271d]'
              : 'text-gray-700'
          }`}
          onClick={() => {
            setActiveTab('women');
            setActiveSubTab('all');
          }}
        >
          Women
        </button>
        <button
          className={`text-2xl font-bold px-6 font-pattaya py-2 focus:outline-none ${
            activeTab === 'men'
              ? 'text-[#38271d] border-b-2 border-[#38271d]'
              : 'text-gray-700'
          }`}
          onClick={() => {
            setActiveTab('men');
            setActiveSubTab('all');
          }}
        >
          Men
        </button>
      </div>

      {/* Secondary Tabs */}
      <div className="text-center mb-8">
        {availableTabs.map((section) => (
          <button
            key={section}
            className={`text-xl font-semibold px-4 py-2 mx-2 focus:outline-none ${
              activeSubTab === section
                ? 'text-[#38271d] border-b-2 border-[#38271d]'
                : 'text-gray-700'
            }`}
            onClick={() => setActiveSubTab(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="relative text-[#38271d] rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-pattaya font-bold mb-2">{service.title}</h3>
                <p className="text-xl font-light text-[#38271d] font-sans mb-4">
                  {service.price}
                </p>
                <ul className="mb-4 space-y-1 font-sans">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex font-normal justify-between">
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38271d] font-semibold underline hover:text-[#38271d]"
                      >
                        {detail.name}
                      </a>
                      <span>{detail.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
  href={service.link}  
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="animate-button font-semibold bg-yellow-600 font-sans text-white py-2 px-4 rounded-md w-full md:w-auto mt-auto">
    {service.btns}
  </button>
</a>

            </div>
          </div>
        ))}
    
      </div>
      
      {/* <div className="flex justify-end items-center">
  <img src="fl2.png" alt="" className="w-auto h-auto object-contain" />
</div> */}

    </div>

  );
};

export default Service;
