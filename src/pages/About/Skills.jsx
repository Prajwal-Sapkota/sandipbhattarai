import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { id: "01", title: "Digital Transformation", desc: "Guiding businesses through comprehensive digital transformation strategies that align with their goals.", tag: "STRATEGY", icon: "◈" },
    { id: "02", title: "IT Consulting", desc: "Offering expert advice on IT infrastructure, cloud services, and technology integration to optimize operations.", tag: "ADVISORY", icon: "◬" },
    { id: "03", title: "Cybersecurity", desc: "Implementing robust security measures to protect data and ensure compliance with industry standards.", tag: "SECURITY", icon: "⬢" },
    { id: "04", title: "Software Development", desc: "Developing custom software solutions that streamline processes and enhance user experiences.", tag: "ENGINEERING", icon: "⧉" },
    { id: "05", title: "Project Management", desc: "Leading projects from conception to completion with a focus on delivering on time and within budget.", tag: "LEADERSHIP", icon: "▣" },
    { id: "06", title: "Collaboration", desc: "Working effectively with cross-functional teams to achieve shared objectives.", tag: "TEAMWORK", icon: "⫷" },
    { id: "07", title: "Problem Solving", desc: "Analyzing complex challenges and delivering innovative, actionable solutions.", tag: "INNOVATION", icon: "✦" }
  ];

  return (
    <section className="relative py-20 bg-[#F5F0E8] overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#E6B8A2]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#A7C5BD]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* HEADER */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#9B8B7A] text-[10px] tracking-[0.5em] uppercase font-bold block mb-2"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Marcellus'] text-[#2C2C2C] tracking-tight"
          >
            Skills <span className="italic text-[#9B8B7A]">& Expertise.</span>
          </motion.h2>
        </div>

        {/* SHUTTER CONTAINER - REDUCED HEIGHT (340px) */}
        <div className="flex flex-col md:flex-row h-[340px] gap-3 w-full items-stretch">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              onClick={() => setActiveSkill(index)}
              animate={{
                flex: activeSkill === index ? 3.5 : 1, // Balanced ratio
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500
                ${activeSkill === index 
                  ? 'bg-white shadow-xl border border-[#E6B8A2]/30' 
                  : 'bg-white/40 backdrop-blur-sm border border-[#9B8B7A]/10 hover:bg-white/60'}`}
            >
              {/* CONTENT WRAPPER - Centered vertically when active */}
              <div className={`h-full w-full flex flex-col p-6 transition-all duration-500 ${activeSkill === index ? 'justify-center' : 'justify-between'}`}>
                
                {/* ID & ICON - Reduced size when collapsed */}
                <div className={`flex justify-between items-start ${activeSkill === index ? 'mb-4' : ''}`}>
                  <span className={`font-['Marcellus'] text-[10px] tracking-widest ${activeSkill === index ? 'text-[#9B8B7A]' : 'text-[#9B8B7A]/40'}`}>
                    {skill.id}
                  </span>
                  <div className={`text-xl transition-all duration-500 
                    ${activeSkill === index ? 'text-[#E6B8A2] scale-125' : 'text-[#9B8B7A]/30'}`}>
                    {skill.icon}
                  </div>
                </div>

                {/* TEXT AREA */}
                <div className="overflow-hidden">
                  <h3 className={`font-['Marcellus'] transition-all duration-500 leading-tight
                    ${activeSkill === index 
                      ? 'text-2xl text-[#2C2C2C] mb-3' 
                      : 'text-sm text-[#2C2C2C]/60 truncate'}`}>
                    {skill.title}
                  </h3>

                  {activeSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <p className="text-[#5F5B57] font-['Jost'] text-sm leading-relaxed max-w-md mb-4">
                        {skill.desc}
                      </p>
                      <span className="inline-block text-[8px] tracking-[0.2em] text-[#9B8B7A] border border-[#9B8B7A]/30 px-3 py-1 rounded-full uppercase font-bold">
                        {skill.tag}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* ACTIVE BACKGROUND GLOW */}
              {activeSkill === index && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-gradient-to-br from-[#E6B8A2]/5 via-transparent to-transparent pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* COMPACT STATS */}
        <div className="mt-12 flex justify-center md:justify-end border-t border-[#9B8B7A]/10 pt-8">
           <div className="flex gap-12">
              {[
                { n: '12+', l: 'Years' },
                { n: '50+', l: 'Projects' },
                { n: '30+', l: 'Clients' }
              ].map((s, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-xl font-['Marcellus'] text-[#2C2C2C]">{s.n}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#9B8B7A]">{s.l}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;