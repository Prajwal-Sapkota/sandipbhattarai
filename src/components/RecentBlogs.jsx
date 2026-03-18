import { useState, useRef, useEffect } from "react";

const RecentBlogs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const blogs = [
    {
      title: "Can AI chatbots completely replace customer service representatives?",
      date: "April 23, 2021",
      image: "/images/blog1.jpg",
      category: "Artificial Intelligence",
      description: "Exploring the boundary between automated efficiency and the irreplaceable human touch in hospitality."
    },
    {
      title: "Cyber Hygiene – Practices to protect the health of Digital Assets",
      date: "May 23, 2021",
      image: "/images/blog2.jpg",
      category: "Cybersecurity",
      description: "Essential protocols to safeguard your business infrastructure in an increasingly complex digital landscape."
    },
    {
      title: "Digital Journeys: The Tech-Powered Revolution of Online Travel Booking",
      date: "August 16, 2024",
      image: "/images/blog3.jpg",
      category: "Digital Transformation",
      description: "How OTA systems and integrated tech are redefining the modern guest experience."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerRef.current?.classList.add("reveal-visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-18  bg-[#F5F0E8] text-[#2C2C2C] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Cinematic Header */}
        <div ref={headerRef} className="reveal-init mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-['Marcellus'] mb-4 md:mb-6 text-[#2C2C2C]">
            Recent <span className="italic text-[#9B8B7A]">Blogs</span>
          </h2>
        </div>

        {/* Mobile: Single Column Layout */}
        <div className="block lg:hidden space-y-12">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-[#9B8B7A]/10">
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category & Date */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#E6B8A2] text-xs tracking-widest uppercase">{blog.category}</span>
                <span className="text-[#9B8B7A] text-[10px] tracking-wider">{blog.date}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-['Marcellus'] text-[#2C2C2C] mb-3 leading-tight">
                {blog.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#5F5B57] font-['Jost'] text-sm mb-6 leading-relaxed">
                {blog.description}
              </p>
              
              {/* Button */}
              <button className="group flex items-center gap-3 text-xs tracking-widest uppercase py-2 border-b border-[#9B8B7A]/30 hover:border-[#E6B8A2] transition-colors text-[#2C2C2C] font-['Jost']">
                Read Article
                <span className="group-hover:translate-x-2 transition-transform duration-300 text-[#9B8B7A]">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Desktop: 3D Stacked Layout (Unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center min-h-[500px]">

          {/* Left: Dynamic Content */}
          <div className="lg:col-span-5 z-20 flex flex-col justify-center pr-8 lg:pr-12">
            <div className="overflow-hidden h-[320px] relative">
              {blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
                    }`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-['Marcellus'] leading-tight mb-4 text-[#2C2C2C] max-w-md">
                    {blog.title}
                  </h3>
                  <p className="text-[#5F5B57] font-['Jost'] text-base md:text-lg mb-6 max-w-md leading-relaxed">
                    {blog.description}
                  </p>
                  <button className="group flex items-center gap-4 text-xs tracking-widest uppercase py-3 border-b border-[#9B8B7A]/30 hover:border-[#E6B8A2] transition-colors text-[#2C2C2C] font-['Jost']">
                    Read Article
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-[#9B8B7A]">→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex gap-4 mt-8">
              {blogs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-12 bg-[#9B8B7A]" : "w-6 bg-[#9B8B7A]/20"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right: The Visual Stack */}
          <div className="lg:col-span-7 relative h-[400px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] perspective-1000">
              {blogs.map((blog, idx) => {
                const isPrevious = (activeIndex - 1 + blogs.length) % blogs.length === idx;
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="absolute inset-0 transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) cursor-pointer"
                    style={{
                      transform: isActive
                        ? 'translateZ(100px) rotateY(-5deg) translateX(0)'
                        : isPrevious
                          ? 'translateZ(-70px) rotateY(15deg) translateX(-40%) scale(0.85)'
                          : 'translateZ(-250px) rotateY(25deg) translateX(-80%) scale(0.7)',
                      opacity: isActive ? 1 : 0.4,
                      zIndex: isActive ? 30 : 20 - idx,
                      filter: isActive ? 'none' : 'brightness(0.7)'
                    }}
                  >
                    <div className="w-full h-full rounded-[40px] overflow-hidden border border-[#9B8B7A]/10 group bg-white">
                      <img
                        src={blog.image}
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                        alt={blog.title}
                      />
                      <div className="absolute inset-0 opacity-80" />

                      {/* Floating Date Badge */}
                      <div className="absolute bottom-8 left-8">
                        <span className="text-white/90 text-[10px] tracking-[0.2em] uppercase font-['Jost']">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 2000px;
          transform-style: preserve-3d;
        }

        .reveal-init {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default RecentBlogs;