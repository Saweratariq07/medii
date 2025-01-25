'use client';
import React, { useState } from 'react';

const View = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true); // Show the additional row
  };

  return (
    <div className="bg-white py-12">
      <h2 className="text-center text-3xl md:text-4xl font-pattaya font-bold text-gray-900 mb-12">
        Our Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Row */}
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

      {/* Additional Row - Initially Hidden */}
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/img/back.jpg"
                alt="Back Hair Removal"
                className="w-full h-96 object-cover" 
              />
            </div>
            <h3 className="text-lg font-pattaya text-gray-800 mt-4">
              Back Hair Removal
            </h3>
          </div>

          <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="img/arm.jpg"
                alt="Underarm Hair Removal"
                className="w-full h-96 object-cover" 
              />
            </div>
            <h3 className="text-lg font-pattaya text-gray-800 mt-4">
              Underarm Hair Removal
            </h3>
          </div>

          <div className="bg-white rounded-br-3xl border-b-2 border-r-2 p-6 text-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="body.jpeg"
                alt="Full Body Hair Removal"
                className="w-full h-96 object-cover" 
              />
            </div>
            <h3 className="text-lg font-pattaya text-gray-800 mt-4">
              Full Body Hair Removal
            </h3>
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        {!showMore && (
          <button
            onClick={handleViewMore}
            className="border border-yellow-500 font-sans text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default View;
