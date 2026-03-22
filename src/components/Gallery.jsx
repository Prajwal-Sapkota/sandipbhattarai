import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: "/images/gallery1.jpg", title: "Leadership" },
    { src: "/images/gallery2.jpg", title: "Collaboration" },
    { src: "/images/gallery3.jpg", title: "Innovation" },
    { src: "/images/gallery4.jpg", title: "Heritage" },
    { src: "/images/gallery5.jpg", title: "Impact" },
    { src: "/images/gallery6.jpeg", title: "Vision" },
    { src: "/images/gallery7.jpeg", title: "Craft" },
    { src: "/images/gallery8.jpeg", title: "Connection" },
  ];

  // Triple the images for seamless infinite scroll
  const sliderImages = [...images, ...images, ...images];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sliderRef.current?.classList.add("show");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl    text-[#2C2C2C]">
            Visual <span className="italic text-[#9B8B7A]">Legacy</span>
          </h2>
          <div className="w-16 h-px bg-[#9B8B7A] mt-4" />
        </div>

        {/* Expanded View */}
        {expandedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setExpandedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white text-3xl z-10"
              onClick={() => setExpandedImage(null)}
            >
              ✕
            </button>
            <img 
              src={images[expandedImage].src} 
              alt={images[expandedImage].title}
              className="max-h-[90vh] max-w-[90vw] object-cover"
            />
          </div>
        )}

        {/* News Slider */}
        <div 
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 animate-slide"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'fit-content'
              }}
            >
              {sliderImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 w-[300px] md:w-[400px]"
                  onClick={() => setExpandedImage(idx % images.length)}
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5]">
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Title */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <p className="text-lg   ">{img.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-sm text-[#9B8B7A]   ">
          Hover to pause · Click image to expand
        </div>

      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * ${images.length} - 6px * ${images.length - 1}));
          }
        }

        .animate-slide {
          animation: slide 40s linear infinite;
        }

        @media (max-width: 768px) {
          @keyframes slide {
            100% {
              transform: translateX(calc(-300px * ${images.length} - 6px * ${images.length - 1}));
            }
          }
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Gallery;