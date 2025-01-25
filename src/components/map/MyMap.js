import React from 'react';

function MyMap() {
  return (
    <div className="relative w-full h-[200px] sm:h-[280px] md:w-[400px] md:h-[200px] border-2 border-[#38271d]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.271623946271!2d4.632341416134256!3d51.5706523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c41f1fb28627ed%3A0xb88c2700dc069960!2sMedi%20laser%20by%20lucy!5e0!3m2!1sen!2s!4v1691234567890!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MyMap;
