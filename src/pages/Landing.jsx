import React from 'react'
import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Credibility from '../components/Creditbility'
import TokenStats from '../components/TokenStats'
import CTA from '../components/CTA'

const Landing = () => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)',
      }}
    >
      <Navbar />

      <main className="flex-grow flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* ✅ Wrap only text inside this div */}
            <div className="lg:w-1/2 text-center lg:text-left lavishly-yours-regular">
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-white leading-tight drop-shadow-md">
                Invest in <span className="text-[#ff6f3c]">Premium</span> Spirits
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-200 drop-shadow-sm anton-regular">
                via Tokenized Assets
              </p>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img 
                src="/wine1.webp"
                alt="Premium spirits bottle" 
                className="w-full max-w-sm mx-auto md:max-w-md"
              />
            </div>

          </div>
        </div>
      </main>
      <HowItWorks/>
      <Credibility/>
      <TokenStats/>
      <CTA/>
    </div>
  )
}

export default Landing
