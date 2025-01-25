import React from "react";
import Footer from "@/components/Footer";
import { FaGift, FaTags, FaCalendarAlt, FaHeart, FaLeaf } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import Navbar from "@/components/Navbar";

function Special() {
  const promotions = [
    {
      title: "King’s Day (Koningsdag)",
      offers: [
        "Orange Glow Special: 20% off all laser treatments during King’s Day week.",
        "Royal Treatment Package: Book two services and get the third one free.",
        "Festive Giveaway: Enter a King’s Day raffle to win a free laser session.",
      ],
      icon: <FaGift className="text-orange-500 text-4xl" />,
      image: "/ki.png",
    },
    {
      title: "Liberation Day (Bevrijdingsdag)",
      offers: [
        "Freedom from Hair Deal: 15% off on laser hair removal treatments booked in the first week of May.",
        "Thank You Discount: Special offers for healthcare workers and students on this day.",
      ],
      icon: <FaTags className="text-red-500 text-4xl" />,
      image: "/dance.png",
    },
    {
      title: "Dutch Mother’s Day (Moederdag)",
      offers: [
        "Treat Your Mom Package: Book a treatment for yourself and get a 50% discount for your mother.",
        "Complimentary Gift: Free skincare consultation with every Mother’s Day booking.",
      ],
      icon: <FaHeart className="text-pink-500 text-4xl" />,
      image: "/mother.png",
    },
    {
      title: "Sinterklaas",
      offers: [
        "Festive Deals: Up to 25% off on select laser services during the Sinterklaas season.",
        "Surprise Gift: Free small skincare product with every booking in December.",
        "Group Discounts: Bring two friends and get an additional 10% discount for everyone.",
      ],
      icon: <FaGift className="text-green-500 text-4xl" />,
      image: "/cris.png",
    },
    {
      title: "Spring Specials",
      offers: [
        "Bloom Into Confidence: 20% off on laser hair removal to prepare for the sunny season.",
        "Beach Ready Offers: Special bundles for full-body treatments.",
      ],
      icon: <IoSunny className="text-yellow-400 text-4xl" />,
      image: "spring.png",
    },
    {
      title: "New Year’s Eve (Oudejaarsavond)",
      offers: [
        "Countdown to Smooth Skin: Discounts of up to 30% in the last two weeks of December.",
        "Year-End Sale: Reduced rates on package deals for bookings made before New Year’s Eve.",
      ],
      icon: <FaCalendarAlt className="text-blue-500 text-4xl" />,
      image: "/img/new.png",
    },
    {
      title: "Summer Holiday Deals",
      offers: [
        "Summer-Ready Skin: Up to 20% off for students and travelers preparing for their vacations.",
        "Family Package: Book multiple sessions for family members and receive a group discount.",
      ],
      icon: <GiBeachBag className="text-orange-400 text-4xl" />,
      image: "/joy.png",
    },
    {
      title: "Valentine’s Day",
      offers: [
        "Dutch Love Promo: Book a couples’ laser session and get 25% off.",
        "Romantic Gift Cards: Purchase Valentine-themed gift cards for a special bonus value.",
      ],
      icon: <FaHeart className="text-red-500 text-4xl" />,
      image: "/img/val.png",
    },
    {
      title: "National Tulip Day (Nationale Tulpendag)",
      offers: [
        "Fresh as a Tulip Offer: Celebrate with 15% off for all clients on this day.",
        "Seasonal Bundle: Combine a laser session with a skincare treatment for a discounted price.",
      ],
      icon: <FaLeaf className="text-green-400 text-4xl" />, // Replaced problematic tulip icon
      image: "/tulip.png",
    },
    {
      title: "Black Friday / Cyber Monday",
      offers: [
        "Dutch Flash Sale: Up to 50% off for 48 hours only.",
        "Cyber Savings: Special deals exclusively for online bookings.",
      ],
      icon: <FaTags className="text-black text-4xl" />,
      image: "/img/black.png",
    },
  ];

  return (
    <div>
      <div className="bg-[#f5f0ed] relative overflow-hidden">
    <Navbar/>
      <div
  className="relative z-10 py-16 w-full bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('bg.png')",
    backgroundSize: "cover", // Ensures the image fills the entire area
  }}
>
  <div className="absolute inset-0 bg-[#000000] opacity-40 z-0"></div>

  <div className="relative z-10 container mx-auto flex flex-col justify-center px-6 items-center py-12">
    <div >
    <h3 className="text-center font-destine font-semibold md:text-5xl text-white">
  Special Offers
</h3>

    </div>
  </div>
</div>

        <div className="relative z-10">
          <div className="container mx-auto flex flex-col justify-center px-6 pt-14 items-center py-8">
            <div className="py-10">
              <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-pattaya font-bold text-black mb-8">
                  Seasonal Promotions
                </h1>
                <div className="grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-3 gap-6">
  {promotions.map((promo, index) => (
    <div
      key={index}
      className="bg-transparent shadow-2xl rounded-lg overflow-hidden justify-center align-middle transform hover:scale-105 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-48 object-cover"
        />
        {/* Centered Icon */}
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md">
          {promo.icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-center mt-4 text-black mb-2">{promo.title}</h3>
        <ul className="text-black">
          {promo.offers.map((offer, idx) => (
            <li key={idx} className="mb-2 text-center font-light">
              - {offer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Special;
