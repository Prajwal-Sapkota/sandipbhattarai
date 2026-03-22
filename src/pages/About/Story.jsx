import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kinetic title animation
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const chapters = [
    {
      id: "01",
      title: "Identifying The Gap",
      tag: "The Vision",
      image: "/images/gallery7.jpeg", 
      content: "While working at a leading Indian software firm in Pokhara, I identified a significant disparity in technological advancement within Nepal. This became the catalyst for elevating our local IT landscape.",
      color: "bg-[#F5F0E8]",
      textColor: "text-[#2C2C2C]"
    },
    {
      id: "02",
      title: "Humble Foundations",
      tag: "Kathmandu Roots",
      image: "/images/gallery6.jpeg", 
      content: "Alongside Ajit Singdan, we established S.A.I.T Solution in a humble residential flat. Those early days of struggle solidified our commitment to excellence that now defines our reputation.",
      color: "bg-[#2C2C2C]",
      textColor: "text-white"
    },
    {
      id: "03",
      title: "Strategic Expansion",
      tag: "June 2019",
      image: "/images/gallery5.jpg", 
      content: "Returning to Pokhara with our second branch, we now deliver top-notch IT solutions tailored to global standards while staying true to our local roots.",
      color: "bg-[#f5f0e9]",
      textColor: "text-[#2C2C2C]"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#F5F0E8]">
      
      {/* STICKY HEADER */}
      <motion.div 
        style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-0 pointer-events-none px-4 sm:px-6 md:px-0"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 border border-[#9B8B7A]/10 rounded-full hidden sm:block" />
          <div className="absolute bottom-20 right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 border border-[#E6B8A2]/10 rounded-full hidden md:block" />
        </div>

        <span className="text-[#9B8B7A] text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.7em] md:tracking-[1em] uppercase font-bold mb-2 sm:mb-3 md:mb-4 relative z-10">
          About Me
        </span>
        
        <h1 className="text-[12vw] sm:text-[11vw] md:text-[8vw]    text-[#2C2C2C] leading-[1.1] text-center relative z-10">
          Sandip <br /> <span className="italic text-[#9B8B7A]">Bhattarai</span>
        </h1>
        
        {/* QUOTE */}
        <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="relative">
            <span className="absolute -top-3 sm:-top-4 md:-top-6 -left-2 sm:-left-3 md:-left-6 text-3xl sm:text-4xl md:text-6xl text-[#E6B8A2]/20   ">"</span>
            <p className="text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl    italic text-[#5F5B57] text-center leading-relaxed px-2">
              Technology is only as good as the <span className="text-[#2C2C2C] font-medium not-italic">peace of mind</span> it provides.
            </p>
            <span className="absolute -bottom-4 sm:-bottom-5 md:-bottom-10 -right-2 sm:-right-3 md:-right-6 text-3xl sm:text-4xl md:text-6xl text-[#E6B8A2]/20   ">"</span>
          </div>
          
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-3 mt-3 sm:mt-4 md:mt-8">
            <div className="w-6 sm:w-8 md:w-12 h-px bg-[#9B8B7A]/30" />
            <span className="text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-[#9B8B7A] uppercase whitespace-nowrap">Founder · S.A.I.T Solution</span>
            <div className="w-6 sm:w-8 md:w-12 h-px bg-[#9B8B7A]/30" />
          </div>
        </div>
        
        <div className="mt-6 sm:mt-10 md:mt-16 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 relative z-10">
          <div className="w-px h-12 sm:h-16 md:h-24 bg-gradient-to-b from-[#9B8B7A] to-transparent" />
          <span className="text-[7px] sm:text-[8px] md:text-[10px] text-[#9B8B7A] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">Scroll to Explore My Journey</span>
        </div>

        <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border border-[#E6B8A2]/20 rounded-full hidden sm:block" />
      </motion.div>

      {/* CHAPTER STACK */}
      <div className="relative z-10">
        {chapters.map((chapter, index) => (
          <ChapterCard 
            key={chapter.id} 
            chapter={chapter} 
            index={index} 
            isLast={index === chapters.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const ChapterCard = ({ chapter, index, isLast }) => {
  return (
    <div 
      className={`relative w-full min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12
        ${!isLast ? "sticky top-0" : "relative"}`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${chapter.color} shadow-[0_-30px_60px_rgba(0,0,0,0.12)]`} />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24">
        
        {/* IMAGE SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-1/2 aspect-[3/4] max-h-[45vh] sm:max-h-[55vh] md:max-h-[75vh] overflow-hidden rounded-lg md:rounded-sm shadow-xl md:shadow-2xl 
            ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
        >
          <img 
            src={chapter.image} 
            alt={chapter.title} 
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left
            ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
        >
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <span className={`text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase ${chapter.textColor} opacity-40`}>
              Chapter {chapter.id}
            </span>
            <div className={`w-6 sm:w-8 md:w-12 h-px ${index === 1 ? "bg-white/20" : "bg-black/10"}`} />
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl    ${chapter.textColor} mb-3 sm:mb-4 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tighter`}>
            {chapter.title}
          </h2>

          <p className={`text-xs sm:text-sm md:text-lg lg:text-xl    font-light leading-relaxed ${chapter.textColor} opacity-80 mb-5 sm:mb-6 md:mb-10 max-w-lg mx-auto md:mx-0`}>
            {chapter.content}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
            <div className={`w-5 sm:w-6 md:w-8 h-px ${index === 1 ? "bg-[#E6B8A2]" : "bg-[#9B8B7A]"}`} />
            <span className={`text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase ${chapter.textColor} opacity-60`}>
              {chapter.tag}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;