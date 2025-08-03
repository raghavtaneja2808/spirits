import React from 'react';

const CTA = () => {
  return (
    // BACKGROUND CHANGE: Switched to a pure black background
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-landing-serif font-bold text-white">
          Ready to Build Your Portfolio?
        </h2>
        
        {/* TEXT COLOR: Adjusted for optimal contrast on black */}
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Join a new class of investors and own a share of the world's finest spirits. Secure your stake in a growing market today.
        </p>

        <div className="mt-8">
          <button 
            className="
              bg-brand-gold text-white font-bold text-lg 
              py-4 px-8 rounded-md 
              hover:bg-opacity-90 transition-all transform hover:scale-105
            "
          >
            Start Investing Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;