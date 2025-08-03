import React from 'react';
import { Quote } from 'lucide-react';

// LOGO FIX: Added fill="currentColor" to make the text color apply correctly.
const TaurusLogo = () => (
  <svg role="img" viewBox="0 0 200 40" className="h-8 w-auto text-white">
    <title>Taurus</title>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="35" fontWeight="bold" fill="currentColor">TAURUS</text>
  </svg>
);

const ChainlinkLogo = () => (
  <svg role="img" viewBox="0 0 200 40" className="h-9 w-auto text-white">
    <title>Chainlink</title>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="35" fontWeight="bold" fill="currentColor">chainlink</text>
  </svg>
);

const LexdaoLogo = () => (
  <svg role="img" viewBox="0 0 200 40" className="h-8 w-auto text-white">
     <title>LEXDAO</title>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="35" fontWeight="bold" fill="currentColor">LEXDAO</text>
  </svg>
);


const Credibility = () => {
  return (
    // Using your provided gradient background
    <section className="w-full py-16 md:py-24" style={{background:'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'}}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        {/* PART 1: PARTNER LOGOS */}
        <div className="lg:col-span-2">
          <h3 className="text-center lg:text-left text-sm font-bold uppercase tracking-wider text-gray-300">
            Trusted by Industry Leaders
          </h3>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-6">
            <TaurusLogo />
            <ChainlinkLogo />
            <LexdaoLogo />
          </div>
        </div>

        {/* PART 2: TESTIMONIAL (Dark Theme) */}
        <div className="lg:col-span-3">
          {/* CARD FIX: Restyled for a dark background */}
          <div className="relative rounded-lg border border-gray-700 bg-black bg-opacity-20 p-8 shadow-lg backdrop-blur-sm">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-gray-600" aria-hidden="true" />
            <blockquote className="relative">
              {/* TEXT FIX: Changed to light text for readability */}
              <p className="text-lg md:text-xl text-gray-200 font-landing-sans">
                "SpiritsSTO is pioneering a new era for alternative asset investment. Their commitment to regulatory compliance and transparency is exactly what the Web3 space needs to mature."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-700">
                {/* Placeholder for an image */}
              </div>
              <div>
                <p className="font-bold text-white">Alexandra Chen</p>
                <p className="text-sm text-gray-500">Partner at CryptoValley Ventures</p>
              </div>
            </figcaption>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Credibility;