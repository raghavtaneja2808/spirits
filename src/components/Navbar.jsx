import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// For cleaner code, we can manage links in an array
const navLinks = [
  { text: "What's included", href: "#whats-included" },
  { text: "Stories", href: "#stories" },
  { text: "Our Why", href: "#our-why" },
  { text: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'sticky' makes the navbar stay at the top. 'z-50' keeps it on top of other content.
    // 'bg-black/30 backdrop-blur-lg' creates the modern glass effect.
    <nav className="mt-0 sticky top-4 z-50 max-w-6xl mx-auto my-5 rounded-full bg-black/30 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl sm:text-[28px] font-bold text-white">
            Spirits Sto
          </a>
        </div>

        {/* Desktop Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.text} href={link.href} className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
              {link.text}
            </a>
          ))}
        </div>
        
        {/* Desktop Actions - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#login" className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
            Login
          </a>
              <Link
  to="/dashboard"
  className="w-full text-left bg-[#ff6f3c] hover:bg-[#f05e2a] text-white font-medium my-2 py-2 px-3 rounded-md transition-colors block"
>
  Start Trade
</Link>
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              // X icon
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Slides down from the top */}
      <div className={`transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.text} href={link.href} className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {link.text}
            </a>
          ))}
          <div className="border-t border-gray-700 my-2"></div>
           <a href="#login" className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Login
          </a>
         <Link
  to="/dashboard"
  className="w-full text-left bg-[#ff6f3c] hover:bg-[#f05e2a] text-white font-medium my-2 py-2 px-3 rounded-md transition-colors block"
>
  Start Trade
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;