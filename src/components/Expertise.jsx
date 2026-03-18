import { useState, useEffect, useRef } from "react";

const Expertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (headerRef.current) {
              headerRef.current.classList.add("show");
            }

            // Animate image - SWIPE FROM BOTTOM
            if (imageRef.current) {
              setTimeout(() => {
                imageRef.current.classList.add("show");
              }, 200);
            }

            // Animate cards with stagger
            cardRefs.current.forEach((card, i) => {
              setTimeout(() => {
                if (card) card.classList.add("show");
              }, 600 + i * 150);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    {
      id: "01",
      title: "Digital Transformation",
      subtitle: "Consulting & Strategy",
      details: "Guiding digital evolution with expert IT consulting and OTA system optimization.",
      tags: ["Consulting", "OTA Systems", "Strategy"],
    },
    {
      id: "02",
      title: "IT Infrastructure",
      subtitle: "Cloud & Managed Services",
      details: "Managing robust IT infrastructure and offering reliable cloud hosting.",
      tags: ["Cloud", "DevOps", "Hosting"],
    },
    {
      id: "03",
      title: "Cybersecurity",
      subtitle: "Data & Asset Protection",
      details: "Advanced security protocols designed to protect your data.",
      tags: ["Security", "Encryption", "Compliance"],
    },
    {
      id: "04",
      title: "Software Development",
      subtitle: "Integration & Solutions",
      details: "Custom software solutions tailored to meet unique enterprise needs.",
      tags: ["Web Apps", "APIs", "Automation"],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#F5F0E8] border-t border-[#9B8B7A]/20">
      <div className="max-w-[1500px] mx-auto px-6 md:px-20">

        {/* Header with Image */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          
          {/* Left Text */}
          <div ref={headerRef} className="animate-text w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['Marcellus'] text-[#2C2C2C] leading-tight">
              12 Years of
              <span className="block italic text-[#9B8B7A] mt-2">
                Operational Excellence
              </span>
            </h2>
            <div className="w-20 h-px bg-[#9B8B7A] my-6 md:my-8" />
            <p className="text-[#5F5B57] font-['Jost'] text-base md:text-lg max-w-xl">
              Transforming traditional business models through strategic digital
              intervention and a decade of IT leadership.
            </p>
          </div>

          {/* Right Image - Swipe from bottom */}
          <div ref={imageRef} className="animate-image w-full lg:w-auto">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="absolute -inset-4 bg-[#E6B8A2]/10 rounded-[60%_40%_70%_30%/40%_50%_30%_60%] -z-10" />
              <div className="relative overflow-hidden rounded-[40px_100px_40px_100px/80px_30px_80px_30px] lg:rounded-[60px_180px_60px_180px/120px_40px_120px_40px]">
                <img
                  src="/images/about.png"
                  alt="Sandip Bhattarai"
                  className="w-full h-auto object-cover scale-110 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="animate-card relative p-6 md:p-8 bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-[#9B8B7A]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Number */}
              <span className={`absolute top-4 right-4 md:top-6 md:right-6 text-5xl md:text-7xl font-['Marcellus'] transition-all duration-500 ${
                hoveredIndex === index ? 'text-[#E6B8A2]/20 scale-110' : 'text-[#9B8B7A]/10'
              }`}>
                {area.id}
              </span>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-['Marcellus'] mb-2 md:mb-3 pr-8 md:pr-0 transition-all duration-300 ${
                hoveredIndex === index ? 'md:text-[#9B8B7A] md:translate-x-2' : 'text-[#2C2C2C]'
              }`}>
                {area.title}
              </h3>

              {/* Subtitle */}
              <p className={`text-[10px] md:text-xs tracking-widest uppercase mb-3 md:mb-4 transition-all duration-300 ${
                hoveredIndex === index ? 'text-[#E6B8A2]' : 'text-[#9B8B7A]'
              }`}>
                {area.subtitle}
              </p>

              {/* Details */}
              <p className="text-[#5F5B57] font-['Jost'] text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                {area.details}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {area.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-[8px] md:text-[10px] px-2 md:px-3 py-1 rounded-full border transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'border-[#E6B8A2] bg-white text-[#2C2C2C]'
                        : 'border-[#9B8B7A]/20 bg-white/50 text-[#5F5B57]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom line */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E6B8A2] to-[#9B8B7A] transition-all duration-700 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Initial hidden states */
        .animate-text, .animate-image, .animate-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .animate-image {
          clip-path: inset(100% 0 0 0);
          transform: translateY(60px);
          transition: clip-path 1.5s cubic-bezier(0.19, 1, 0.22, 1), 
                      transform 1.5s cubic-bezier(0.19, 1, 0.22, 1), 
                      opacity 1s ease;
        }

        /* Visible states */
        .animate-text.show, .animate-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-image.show {
          opacity: 1;
          clip-path: inset(0% 0 0 0);
          transform: translateY(0);
        }

        /* Mobile specific */
        @media (max-width: 1023px) {
          .animate-card {
            transform: translateY(30px);
          }
          
          .grid-cols-1 {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Expertise;