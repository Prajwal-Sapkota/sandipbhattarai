import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpandAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import usePageTitle from "../hooks/usePageTitle";

const Gallery = () => {
  usePageTitle('Gallery')
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    { id: 1, src: "/images/gallery1.jpg" },
    { id: 2, src: "/images/gallery2.jpg" },
    { id: 3, src: "/images/gallery3.jpg" },
    { id: 4, src: "/images/gallery4.jpg" },
    { id: 5, src: "/images/gallery5.jpg" },
    { id: 6, src: "/images/gallery6.jpeg" },
    { id: 7, src: "/images/gallery7.jpeg" },
    { id: 8, src: "/images/gallery8.jpeg" },
    { id: 9, src: "/images/gallery9.jpeg" },
    { id: 10, src: "/images/gallery10.jpeg" },
    { id: 11, src: "/images/gallery11.jpeg" },
    { id: 12, src: "/images/gallery12.jpeg" }
  ];

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
      setSelectedImage(images[(currentIndex + 1) % images.length]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
      setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    }
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    }
    if (touchStart - touchEnd < -50) {
      prevImage();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Navbar />
      <section className="relative pt-20 pb-16 md:py-24 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* HEADER */}
          <div className="mb-8 md:mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#9B8B7A] text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold block mb-2 md:mb-4"
            >
              Visual Portfolio
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl    text-[#2C2C2C]">
              Curated <span className="italic text-[#9B8B7A]">Gallery.</span>
            </h2>
            <div className="mt-4 md:mt-8 w-16 md:w-24 h-px bg-[#E6B8A2]" />
          </div>

          {/* GALLERY GRID - 1 column on mobile, 3/4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-10">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 aspect-square"
              >
                <img
                  src={image.src}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <FaExpandAlt size={12} className="md:text-base" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX MODAL - With Swipe Support */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors text-xl md:text-2xl z-20 bg-black/30 rounded-full p-2 md:p-3" 
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              
              {/* Previous Button */}
              <button 
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl md:text-4xl transition-all z-20 bg-black/30 rounded-full p-2 md:p-3" 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <FaChevronLeft />
              </button>
              
              {/* Next Button */}
              <button 
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl md:text-4xl transition-all z-20 bg-black/30 rounded-full p-2 md:p-3" 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <FaChevronRight />
              </button>

              {/* Image */}
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage.src}
                className="max-w-[90%] max-h-[80vh] md:max-w-full md:max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Swipe Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-[10px] md:hidden flex gap-4">
                <span>← swipe →</span>
              </div>
              
              {/* Counter */}
              <div className="absolute bottom-4 right-4 text-white/30 text-[10px] md:block hidden">
                {images.findIndex(img => img.id === selectedImage?.id) + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;