import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (navbarRef.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          navbarRef.current.style.transform = 'translateY(-150%)';
          navbarRef.current.style.opacity = '0';
        } else {
          navbarRef.current.style.transform = 'translateY(0)';
          navbarRef.current.style.opacity = '1';
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Connect', href: '#connect' }
  ];

  return (
    <>
      {/* DESKTOP DESIGN - EXACTLY AS YOU HAD IT - UNCHANGED */}
      <div 
        ref={navbarRef}
        className="hidden lg:block fixed right-8 top-8 z-50 transition-all duration-500 ease-in-out"
        style={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <nav className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FAF7F2]/80 backdrop-blur-md shadow-lg border border-[#9B8B7A]/20' 
            : 'bg-transparent'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 text-sm font-['Jost'] text-[#5F5B57] hover:text-[#2C2C2C] transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#E6B8A2] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
        </nav>
      </div>

      {/* MOBILE ONLY - NEW DESIGN (DOES NOT AFFECT DESKTOP) */}
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed right-6 top-6 z-50 w-14 h-14 rounded-full bg-[#9B8B7A] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#2C2C2C] shadow-lg ${
          scrolled ? 'backdrop-blur-md bg-opacity-90' : ''
        }`}
        style={{
          transform: lastScrollY.current > 100 && window.scrollY > lastScrollY.current && !isOpen
            ? 'translateY(150%)' 
            : 'translateY(0)',
          opacity: lastScrollY.current > 100 && window.scrollY > lastScrollY.current && !isOpen ? '0' : '1',
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
        }}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#FAF7F2] transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-20">
         
          {/* Brand */}
          <div className="mb-12">
            <h2 className="text-3xl font-['Marcellus'] text-[#2C2C2C]">
              Sandip<span className="text-[#9B8B7A]">.</span>
            </h2>
            <p className="text-sm text-[#5F5B57] font-['Jost'] mt-2">
              Technology Leader
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-2xl font-['Marcellus'] text-[#2C2C2C] hover:text-[#9B8B7A] transition-colors border-b border-[#9B8B7A]/10"
              >
                {item.name}
              </a>
            ))}
          </nav>

         
        </div>
      </div>
    </>
  );
};

export default Navbar;