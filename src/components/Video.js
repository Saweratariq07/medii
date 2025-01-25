'use client';
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    console.log('Play button clicked');
    setIsVideoPlaying(true); // Show the video player
  };

  const handleCloseClick = () => {
    console.log('Close button clicked');
    setIsVideoPlaying(false); // Hide the video player
  };

  return (
    <div className="mt-2 relative">
      {isVideoPlaying ? (
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleCloseClick}
            className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 text-sm z-10"
          >
            ✕
          </button>

          {/* Video Player */}
          <video 
            src="/img/video.mp4" // Ensure the file path is correct
            controls 
            autoPlay 
            className="w-full h-auto"
          />
        </div>
      ) : (
        <FaPlayCircle 
          className="text-xl cursor-pointer" 
          onClick={handlePlayClick} 
        />
      )}
    </div>
  );
};

export default Video;
