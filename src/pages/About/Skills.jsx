import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaChartLine, 
  FaCloud, 
  FaShieldAlt, 
  FaCode, 
  FaTasks, 
  FaUsers, 
  FaLightbulb 
} from "react-icons/fa";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { id: "01", title: "Digital Transformation", desc: "Guiding businesses through comprehensive digital transformation strategies that align with their goals.", tag: "STRATEGY", icon: FaChartLine },
    { id: "02", title: "IT Consulting", desc: "Offering expert advice on IT infrastructure, cloud services, and technology integration to optimize operations.", tag: "ADVISORY", icon: FaCloud },
    { id: "03", title: "Cybersecurity", desc: "Implementing robust security measures to protect data and ensure compliance with industry standards.", tag: "SECURITY", icon: FaShieldAlt },
    { id: "04", title: "Software Development", desc: "Developing custom software solutions that streamline processes and enhance user experiences.", tag: "ENGINEERING", icon: FaCode },
    { id: "05", title: "Project Management", desc: "Leading projects from conception to completion with a focus on delivering on time and within budget.", tag: "LEADERSHIP", icon: FaTasks },
    { id: "06", title: "Collaboration", desc: "Working effectively with cross-functional teams to achieve shared objectives.", tag: "TEAMWORK", icon: FaUsers },
    { id: "07", title: "Problem Solving", desc: "Analyzing complex challenges and delivering innovative, actionable solutions.", tag: "INNOVATION", icon: FaLightbulb }
  ];

  return (
    <section className="relative py-20 md:py-24 lg:py-32 bg-[#F5F0E8] overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#E6B8A2]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#9B8B7A]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-[#9B8B7A] text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold block mb-2 md:mb-3">
            Capabilities
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl    text-[#2C2C2C] leading-tight">
            Skills <span className="italic text-[#9B8B7A]">& Expertise.</span>
          </h2>

          <div className="mt-4 md:mt-6 w-12 md:w-16 h-px bg-[#E6B8A2] mx-auto"></div>
        </motion.div>

        {/* DESKTOP SHUTTER */}
        <div className="hidden md:flex h-[240px] lg:h-[280px] gap-2 lg:gap-3">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              onClick={() => setActiveSkill(index)}
              animate={{ flex: activeSkill === index ? 4 : 1 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className={`relative cursor-pointer overflow-hidden rounded-xl lg:rounded-2xl group
                ${activeSkill === index 
                  ? 'bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-[#E6B8A2]/30' 
                  : 'bg-white/40 border border-[#9B8B7A]/10 hover:bg-white/60'}`}
            >
              <div className={`absolute inset-0 transition-opacity duration-500 
                ${activeSkill === index ? 'opacity-100' : 'opacity-0'}
                bg-gradient-to-br from-[#E6B8A2]/20 via-transparent to-transparent`} />

              <div className="relative h-full flex flex-col p-3 lg:p-5">

                {/* TOP */}
                <div className="flex justify-between items-start">
                  <span className={`text-[8px] lg:text-[10px]    
                    ${activeSkill === index ? 'text-[#9B8B7A]' : 'text-[#9B8B7A]/40'}`}>
                    {skill.id}
                  </span>
                  <div className={`text-base lg:text-xl transition-all duration-300 
                    ${activeSkill === index 
                      ? 'text-[#E6B8A2] scale-110 rotate-6' 
                      : 'text-[#9B8B7A]/30'}`}>
                    <skill.icon />
                  </div>
                </div>

                {/* CONTENT - CENTERED WHEN EXPANDED */}
                <div className={`flex-1 flex flex-col ${activeSkill === index ? 'items-center text-center justify-center' : 'justify-end'}`}>
                  <h3 className={`   transition-all duration-300 leading-tight
                    ${activeSkill === index 
                      ? 'text-sm lg:text-xl text-[#2C2C2C] mb-1 lg:mb-2' 
                      : 'text-xs lg:text-sm text-[#2C2C2C]/60'}`}>
                    {skill.title}
                  </h3>

                  {activeSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 lg:mt-2"
                    >
                      <p className="text-[10px] lg:text-xs text-[#5F5B57] leading-relaxed mb-2 lg:mb-3 max-w-[180px] lg:max-w-[220px] mx-auto">
                        {skill.desc}
                      </p>
                      <span className="text-[7px] lg:text-[8px] tracking-[0.15em] lg:tracking-[0.2em] text-[#9B8B7A] border border-[#9B8B7A]/30 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full uppercase font-bold inline-block">
                        {skill.tag}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="md:hidden space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              className={`rounded-2xl p-4 border transition-all cursor-pointer
                ${activeSkill === index
                  ? 'bg-white shadow-xl border-[#E6B8A2]/30'
                  : 'bg-white/60 border-[#9B8B7A]/10'}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-[#9B8B7A] text-lg">
                    <skill.icon />
                  </span>
                  <h3 className="   text-base text-[#2C2C2C]">
                    {skill.title}
                  </h3>
                </div>
                <span className="text-[#9B8B7A] text-sm">{skill.id}</span>
              </div>

              {activeSkill === index && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-center"
                >
                  <p className="text-xs text-[#5F5B57] mb-3 leading-relaxed">
                    {skill.desc}
                  </p>
                  <span className="text-[8px] tracking-[0.2em] text-[#9B8B7A] border border-[#9B8B7A]/30 px-2 py-1 rounded-full uppercase font-bold inline-block">
                    {skill.tag}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;