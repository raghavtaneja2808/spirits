import React from 'react';
import { ShieldCheck, Landmark, LayoutDashboard } from 'lucide-react';

const HowItWorks = () => {
  return (
    // SECTION: Using a slightly different dark background to create separation
    <section className="w-full bg-[#061325] py-16 md:py-24 mt-20"  style={{
        background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(77, 76, 57, 1) 55%, rgba(66, 34, 34, 1) 100%)',
      }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Decorative Dividing Line */}
        <div className="w-full flex justify-center mb-12">
            <div className="w-24 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* TEXT: Reverted to white/light text for high contrast */}
        <h2 className="text-3xl md:text-4xl font-landing-serif font-bold text-white">
          A Simple Path to Ownership
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          Start your investment journey in three straightforward steps.
        </p>
        
        <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Step 1: Verify */}
          <div className="flex flex-col items-center">
            {/* ICONS: Reverted to dark theme style */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md border-2 border-brand-gold">
              <ShieldCheck className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">1. Verify Identity</h3>
            <p className="mt-2 text-gray-400">
              Complete our secure and compliant KYC/AML verification process.
            </p>
          </div>
          
          {/* Step 2: Invest */}
          <div className="flex flex-col items-center">
             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md border-2 border-brand-gold">
              <Landmark className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">2. Acquire Tokens</h3>
            <p className="mt-2 text-gray-400">
              Purchase SpiritsToken (SPIR) to gain fractional ownership of our assets.
            </p>
          </div>
          
          {/* Step 3: Manage */}
          <div className="flex flex-col items-center">
             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md border-2 border-brand-gold">
              <LayoutDashboard className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">3. Manage & Trade</h3>
            <p className="mt-2 text-gray-400">
              View your holdings on your dashboard and prepare for future trading.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;