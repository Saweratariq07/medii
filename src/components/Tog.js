import React, { useState } from 'react';

function Tog() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Toggle
      </button>

      {/* Section */}
      {isVisible && (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 shadow-md rounded-md">
          {/* Text Section */}
          <div className="text-left">
            <h2 className="text-xl font-bold mb-2">Welcome to the Section</h2>
            <p className="text-gray-700">
              This is a description or content that you can toggle on and off
              using the button above.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-4 sm:mt-0">
            <img
              src="1.png"
              alt="Placeholder"
              className="w-40 h-40 rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tog;
