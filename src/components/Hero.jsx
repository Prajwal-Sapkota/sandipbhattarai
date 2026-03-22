import { useEffect, useRef } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const imageRef = useRef(null);
  const topLeftRef = useRef(null);
  const nameRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const socialRef = useRef(null);

  const socialLinks = [
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/mesandipb/", label: "LinkedIn" },
    { icon: FaFacebookF, url: "https://www.facebook.com/mesandipb", label: "Facebook" },
    { icon: FaTwitter, url: "https://x.com/mesandipb", label: "Twitter" },
    { icon: FaInstagram, url: "https://www.instagram.com/mesandipb/", label: "Instagram" }
  ];

  useEffect(() => {
    if (imageRef.current) {
      requestAnimationFrame(() => {
        imageRef.current.style.transform = "translateY(0)";
      });
    }

    setTimeout(() => {
      if (topLeftRef.current) {
        topLeftRef.current.style.opacity = "1";
        topLeftRef.current.style.transform = "translateY(0)";
      }
    }, 800);

    setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.style.opacity = "1";
        nameRef.current.style.transform = "translateY(0)";
      }
    }, 1100);

    setTimeout(() => {
      if (bottomLeftRef.current) {
        bottomLeftRef.current.style.opacity = "1";
      }
    }, 1300);

    setTimeout(() => {
      if (socialRef.current) {
        socialRef.current.style.opacity = "1";
      }
    }, 1500);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F0E8]">

      {/* IMAGE */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: "translateY(100%)" }}
      >
        {/* Desktop Image */}
        <img
          src="/images/main1.png"
          alt="Sandip Bhattarai"
          className="hidden md:block w-full h-full object-contain object-center scale-105"
        />
        
        {/* Mobile Image */}
        <img
          src="/images/main1.png"
          alt="Sandip Bhattarai"
          className="block md:hidden absolute right-0 bottom-12 w-[80%] h-[98%] object-contain object-right-bottom scale-105"
        />

        {/* Desktop overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E8]/90 via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent hidden md:block" />
        
        {/* Mobile overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F5F0E8]/10 to-[#F5F0E8] block md:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#F5F0E8] via-[#F5F0E8]/80 to-transparent block md:hidden" />
      </div>

      {/* DESKTOP CONTENT */}
      <div className="hidden md:block relative z-10 min-h-screen px-20 py-12">
        <div
          ref={topLeftRef}
          className="absolute top-1/3 left-48 opacity-0 transition-all duration-700"
          style={{ transform: "translateY(-10px)" }}
        >
          <div className="space-y-6">
            <div className="w-16 h-px bg-[#E6B8A2]" />
            <div className="space-y-2">
              {["Technology.", "Vision.", "Success."].map((text, i) => (
                <p
                  key={i}
                  className={`text-3xl  ${
                    i === 2 ? "text-[#9B8B7A]" : "text-[#5F5B57]"
                  }`}
                  style={{
                    animation: `fadeInX 0.5s ${0.9 + i * 0.1}s forwards`,
                    opacity: 0,
                    transform: "translateX(-5px)",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={nameRef}
          className="absolute bottom-48 right-20 text-right opacity-0 transition-all duration-700"
          style={{ transform: "translateY(10px)" }}
        >
          <div className="relative">
            <span className="text-xs tracking-[0.3em] text-[#9B8B7A] block mb-2 ">
              TECHNOLOGY LEADER
            </span>
            <h1 className="text-7xl lg:text-8xl leading-[0.9] ">
              <span className="text-[#2C2C2C] block">Sandip</span>
              <span className="text-[#9B8B7A] relative block mt-2">
                Bhattarai
              </span>
            </h1>
          </div>
        </div>

        <div
          ref={bottomLeftRef}
          className="absolute bottom-12 left-20 opacity-0 transition-opacity duration-700"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E6B8A2]" />
              <span className="text-xs tracking-[0.2em] text-[#9B8B7A] ">VISION</span>
            </div>
            <p className="text-2xl  text-[#2C2C2C] max-w-sm">
              Leading the future of IT solutions
            </p>
          </div>
        </div>

        <div
          ref={socialRef}
          className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-0 transition-opacity duration-700"
        >
          {socialLinks.map((social, i) => (
            <Link
              key={i}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-[#9B8B7A]/30 rounded-full text-[#9B8B7A] hover:text-white hover:bg-[#9B8B7A] transition-all duration-300"
              style={{
                animation: `scaleIn 0.4s ${1.5 + i * 0.1}s forwards`,
                opacity: 0,
                transform: "scale(0.9)",
              }}
            >
              <social.icon size={16} />
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE CONTENT */}
      <div className="block md:hidden relative z-10 min-h-screen px-6 py-12">
        {/* Name at top */}
        <div className="absolute top-16 left-0 right-0 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#9B8B7A] block mb-1 ">
            TECHNOLOGY LEADER
          </span>
          <h1 className="text-4xl leading-[0.9] text-[#2C2C2C] ">
            <span className="block">Sandip</span>
            <span className="text-[#9B8B7A] block mt-1">Bhattarai</span>
          </h1>
        </div>

        {/* Social icons left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {socialLinks.map((social, i) => (
            <Link
              key={i}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[#9B8B7A]/30 rounded-full text-[#9B8B7A] hover:text-white hover:bg-[#9B8B7A] transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <social.icon size={12} />
            </Link>
          ))}
        </div>

        {/* Bottom center */}
        <div className="absolute bottom-1 left-0 right-0 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-px bg-[#E6B8A2]" />
              <span className="text-[10px] tracking-[0.2em] text-[#9B8B7A] ">VISION</span>
              <div className="w-6 h-px bg-[#E6B8A2]" />
            </div>
            <p className="text-sm  text-[#2C2C2C] max-w-[200px] mx-auto">
              Leading the future of IT solutions
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeInX {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;