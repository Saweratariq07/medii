import React from 'react';
import MyMap from './map/MyMap';

function Footer() {
  return (
    <div>
      <footer className="bg-[#f1f9ff] py-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 px-6">
          {/* First Column: Contact */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <img src="logo.png" alt="Logo" className="w-20 mb-4" />
            <h3 className="text-black font-bold text-xl font-pattaya mb-4">Contact</h3>
            <ul className="space-y-2 font-semibold">
              <li>
                <a href="tel:+31 0616784755" className="text-black font-sans font-normal hover:underline">
                  0616784755
                </a>
              </li>
              <li>
                <a href="mailto:medilaserbylucy@gmail.com" className="text-black font-sans font-light hover:underline">
                  medilaserbylucy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column: Map (spans two columns) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h1 className="text-black text-2xl font-bold font-pattaya mb-4">Where to Find Us</h1>
            <p className="text-black font-sans mb-4">
              Dreef 2, 4875 AC Etten-Leur, Netherlands
            </p>
            <MyMap />
          </div>

          {/* Third Column: Opening Hours */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h2 className="font-bold font-destine text-2xl mb-4">Opening Hours</h2>
            <ul className="text-gray-700 font-sans font-normal space-y-1">
              <li>Monday: Closed</li>
              <li>Tuesday: 13.00 to 21.00</li>
              <li>Wednesday: 9.00 to 17.00</li>
              <li>Thursday: 13.00 to 21.00</li>
              <li>Friday: 13.00 to 21.00</li>
              <li>Saturday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t font-sans border-gray-300 mt-8 pt-4 text-center text-gray-600 text-sm">
          © 2025 NL MediLaser. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
