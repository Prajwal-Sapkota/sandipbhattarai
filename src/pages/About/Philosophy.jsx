import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaUsers, 
   
  FaHandshake, 
  FaGraduationCap 
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const Philosophy = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#9B8B7A] text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold block mb-2 md:mb-3"
          >
            Guiding Principles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl    text-[#2C2C2C]"
          >
            My <span className="italic text-[#9B8B7A]">Philosophy</span>
          </motion.h2>
          <div className="mt-3 md:mt-4 w-12 md:w-16 h-px bg-[#E6B8A2] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* STORY CARD - Span 8 columns - CENTERED CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-[#9B8B7A]/10 relative overflow-hidden group flex flex-col items-center justify-center min-h-[320px] md:min-h-[380px]"
          >
            <div className="relative z-10 text-center md:text-left ">
              <span className="text-[#9B8B7A] text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 block">
                The Journey
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl    text-[#2C2C2C] mb-3 md:mb-5">
                Elevating the <span className="italic text-[#9B8B7A]">IT Landscape.</span>
              </h2>
              <p className="text-[#5F5B57]    leading-relaxed text-sm md:text-base max-w-2xl mx-auto md:mx-0">
                The journey of founding S.A I.T Solution began with a vision to bridge the gap in technological expertise within Nepal. Starting from a humble residential flat in Kathmandu, our commitment to excellence allowed us to expand to Pokhara by June 2019. Today, with operations in both cities, we remain dedicated to delivering top-notch IT solutions tailored to our clients' needs.
              </p>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[#E6B8A2]/10 blur-[80px] md:blur-[100px] group-hover:bg-[#E6B8A2]/20 transition-all duration-700" />
          </motion.div>

          {/* IMAGE CARD - Span 4 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 rounded-2xl md:rounded-3xl overflow-hidden border border-[#9B8B7A]/10 shadow-xl h-[340px] md:h-[350px] lg:h-auto"
          >
            <img 
              src="/images/philosophy.jpeg" 
              alt="Sandip Bhattarai" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>

          {/* PHILOSOPHY GRID - Span all 12 columns - with React Icons */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-4 md:mt-6">
            {[
              { title: "Innovation", text: "Seeking out technologies that drive progress.", icon: FaRocket, color: "text-[#E6B8A2]" },
              { title: "Client Focus", text: "Delivering solutions that exceed expectations.", icon: FaUsers, color: "text-[#9B8B7A]" },
              { title: "Integrity", text: "Upholding honesty in all dealings.", icon: FaShield, color: "text-[#E6B8A2]" },
              { title: "Collaboration", text: "Valuing teamwork for the best outcomes.", icon: FaHandshake, color: "text-[#9B8B7A]" },
              { title: "Learning", text: "Staying updated with industry trends.", icon: FaGraduationCap, color: "text-[#E6B8A2]" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white/40 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-[#9B8B7A]/10 hover:border-[#E6B8A2]/30 hover:bg-white/60 transition-all group text-center"
              >
                <div className={`text-2xl md:text-3xl mb-3 md:mb-4 ${item.color} group-hover:text-[#E6B8A2] transition-colors mx-auto`}>
                  <item.icon />
                </div>
                <h4 className="   text-base md:text-lg text-[#2C2C2C] mb-1 md:mb-2">{item.title}</h4>
                <p className="text-[#5F5B57] text-[10px] md:text-xs    leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Philosophy;