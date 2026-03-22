import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaChartLine, 
  FaLightbulb, 
  FaChalkboardTeacher, 
  FaBalanceScale 
} from "react-icons/fa";

const FutureGoals = () => {
  const goals = [
    {
      title: "Expanding My Expertise",
      desc: "Growing knowledge in emerging technologies like AI, blockchain, and IoT to provide cutting-edge solutions.",
      icon: FaRocket,
      label: "INNOVATION",
      color: "text-[#E6B8A2]"
    },
    {
      title: "Scaling My Business",
      desc: "Expanding my consulting practice to reach more clients globally, helping businesses achieve digital excellence.",
      icon: FaChartLine,
      label: "GROWTH",
      color: "text-[#9B8B7A]"
    },
    {
      title: "Driving Innovation",
      desc: "Leading projects that push the boundaries of software development and IT infrastructure.",
      icon: FaLightbulb,
      label: "R&D",
      color: "text-[#E6B8A2]"
    },
    {
      title: "Mentoring Next Gen",
      desc: "Sharing experience with aspiring IT professionals to foster the next wave of tech leaders.",
      icon: FaChalkboardTeacher,
      label: "LEADERSHIP",
      color: "text-[#9B8B7A]"
    },
    {
      title: "Work-Life Balance",
      desc: "Maintaining a healthy balance between professional achievements and personal fulfillment.",
      icon: FaBalanceScale,
      label: "HARMONY",
      color: "text-[#E6B8A2]"
    }
  ];

  const HeroIcon = goals[0].icon;
  const HeroColor = goals[0].color;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* SECTION HEADER - Centered */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#9B8B7A] text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold block mb-2 md:mb-3"
          >
            Looking Ahead
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl    text-[#2C2C2C]"
          >
            Future <span className="italic text-[#9B8B7A]">Trajectory.</span>
          </motion.h2>
          <div className="mt-3 md:mt-4 w-12 md:w-16 h-px bg-[#E6B8A2] mx-auto"></div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          
          {/* THE HERO GOAL */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-2 bg-[#2C2C2C] rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-black/10"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-2xl md:text-3xl text-[#E6B8A2] mb-4 md:mb-8 border border-white/5">
                <HeroIcon />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl    text-white mb-3 md:mb-6 leading-tight">
                {goals[0].title}
              </h3>
              <p className="text-white/60    text-xs sm:text-sm leading-relaxed">
                {goals[0].desc}
              </p>
            </div>
            
            <div className="relative z-10 pt-4 md:pt-8 border-t border-white/10 mt-4 md:mt-0">
              <span className="text-[8px] md:text-[10px] tracking-widest text-[#E6B8A2] font-bold uppercase">{goals[0].label}</span>
            </div>

           
          </motion.div>

          {/* THE OTHER 4 GOALS */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.slice(1).map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/50 backdrop-blur-sm border border-[#9B8B7A]/10 rounded-xl md:rounded-2xl lg:rounded-[2rem] p-5 md:p-6 lg:p-8 flex flex-col justify-between group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#9B8B7A]/5"
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className={`text-xl md:text-2xl ${goal.color} group-hover:text-[#E6B8A2] transition-colors`}>
                      <IconComponent />
                    </div>
                    <span className="text-[7px] md:text-[8px] font-bold text-[#9B8B7A]/40 tracking-widest uppercase">Goal 0{index + 2}</span>
                  </div>
                  
                  <div>
                    <h4 className="   text-base md:text-lg text-[#2C2C2C] mb-1 md:mb-2">{goal.title}</h4>
                    <p className="text-[#5F5B57]    text-[11px] md:text-[13px] leading-snug line-clamp-2">
                      {goal.desc}
                    </p>
                  </div>

                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#9B8B7A]/5">
                    <span className="text-[8px] md:text-[9px] text-[#9B8B7A] font-bold tracking-tighter uppercase">{goal.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM QUOTE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-[#9B8B7A]/30" />
            <span className="text-[#9B8B7A] text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] uppercase">Commitment to Excellence</span>
            <div className="w-8 md:w-12 h-px bg-[#9B8B7A]/30" />
          </div>
          <p className="text-[#5F5B57]    text-xs md:text-sm italic max-w-2xl mx-auto px-4">
            "The future is not something we enter. The future is something we create."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FutureGoals;