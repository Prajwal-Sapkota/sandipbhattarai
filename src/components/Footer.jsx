import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#1f1f1f] text-white overflow-hidden">

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[#9B8B7A]/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#E6B8A2]/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-12">

        {/* ===== BIG BRAND STATEMENT ===== */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-[90px]    leading-[1.1] text-white/90">
            Let’s build something <br />
            <span className="italic text-[#9B8B7A]">meaningful.</span>
          </h2>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="pb-18 inline-block"
        >
          <Link
            to="mailto:hello@sandipbhattarai.com"
            className="group inline-flex items-center gap-4 border border-white/20 px-8 py-4 rounded-full overflow-hidden relative"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-500"></span>
            <span className="relative z-10 text-sm uppercase tracking-widest group-hover:text-black transition">
              Start a Conversation 
            </span>
          </Link>
        </motion.div>

        {/* ===== GRID CONTENT ===== */}
        

          {/* BRAND */}
          <div className="relative">
            <h1 className="absolute inset-0 text-[10vw]    text-white/5 leading-none select-none pointer-events-none">
              Sandip Bhattarai
            </h1>
           
          </div>

          

          
        

        {/* COPYRIGHT */}
        <div className="relative z-10 pt-12 mt-16 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between gap-4">
          <p>© Sandip Bhattarai (mesandipb) | All rights reserved.</p>
          <Link 
            to="https://saitsolution.com.np" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white/80 transition"
          >
            Crafted By: S.A.I.T Solution Nepal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;