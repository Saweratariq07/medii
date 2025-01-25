'use client'
import { useState } from "react";

function Laser() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            {/* Header Section */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gradient-to-r from-[#000000] via-[#000000] font-pattaya to-[#000000] text-white font-bold text-2xl py-2 px-4"
            >
                How Does Laser Hair Removal Process Work?
                <span className="float-right">{isOpen ? "▲" : "▼"}</span>
            </button>

            {/* Collapsible Content */}
            {isOpen && (
                <div className="flex bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] font-sans p-4 space-x-4 rounded-b-lg">
                    <div className="text-start flex-1 pt-8 text-white">
                        <strong>Preparation:</strong>
                        <p className="mb-8">
                            Shave the area 1-2 days before, avoid sun exposure, and attend a consultation. Ensure the skin is clean, dry, and free of makeup, creams, or lotions on the treatment day.
                        </p>
                        <strong>Treatment:</strong>
                        <p className="mb-8">
                            During the session, a laser device is passed over the skin, targeting hair follicles with concentrated light energy. This damages the follicle, inhibiting hair growth. Most people describe the sensation as a mild snapping or tingling feeling.
                        </p>
                        <strong>Aftercare:</strong>
                        <p className="mb-8">
                            Apply a soothing gel or aloe vera to reduce redness and inflammation. Avoid hot showers, direct sunlight, and exfoliation for at least 48 hours. Sunscreen is essential to protect treated areas.
                        </p>
                        <strong>Results:</strong>
                        <p className="mb-8">
                            Results vary, but most individuals notice a significant reduction in hair after 6-8 sessions spaced 4-6 weeks apart. Some areas may require maintenance treatments for long-term smoothness.
                        </p>
                        <strong>YouTube Tutorial:</strong>
                        <p className="mb-8">
                            Watch a detailed video about the laser hair removal process:{" "}
                            <a
                                href="https://www.medilaser.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                www.MediLaser.YouTube.com
                            </a>
                        </p>

                        {/* View More Details Button */}
                        <button
                            onClick={() => window.open('https://www.medilaser.details.com', '_blank')}
                            className="bg-[#D39937] text-white font-semibold py-2 px-6 rounded mt-4"
                        >
                            View More Details
                        </button>
                    </div>
                    <div className="w-1/3">
                        <img
                            src="/img/laze.png" // Replace with your image URL
                            alt="Laser Hair Removal Process"
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Laser;
