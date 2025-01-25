import React from 'react'

function Social() {
  return (
    <div>
       <div className="relative bg-white pb-12">
      {/* Background Image */}
     

      {/* Content Section */}
      <div className="container mx-auto px-6 text-center mt-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/medi.png"
            alt="Medi Laser Logo"
            className="h-16 w-16 rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-600 mt-4">
          TRIPLE ICE QUATTRO DIODE LASER ETTEN-LEUR
        </h2>
        <h3 className="text-2xl font-extrabold mt-2 font-pattaya text-gray-800">Medi Laser By Lucy</h3>

        {/* Sub-Heading */}
        <p className="mt-6 text-lg text-gray-700">Visit Our Social Accounts</p>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://www.instagram.com/medi_laser_ettenleur"
            className="rounded-full border-2 border-gray-200 p-2 transition-transform hover:scale-110"
          >
            <img
              src="/insta.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563240778240"
            className="rounded-full border-2 border-gray-200 p-2 transition-transform hover:scale-110"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://medi-laser-aesthetic-lucy.as.me/schedule.php?calendarID=10421916&fbclid=PAZXh0bgNhZW0CMTEAAaYuml8ZcSTOrDxpSqWHN8b76rC-QuFWIcvxO8Fag_EMkrgnwZjv6vNXvw4_aem_7CvsPpEbO5XBgkPWLlQXOw"
            className="rounded-full border-2 border-gray-200 p-2 transition-transform hover:scale-110"
          >
            <img
              src="/cale.png"
              alt="Google Calendar"
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* Linktree Button */}
        <div className="mt-8">
          <a
            href="https://linktr.ee/medilaserbylucy"
            className="bg-[#D4A055] text-white text-sm font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#C2934A] transition-colors"
          >
            Join medialaserbylucy on Linktree
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Social
