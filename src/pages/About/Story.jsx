import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kinetic title animation: Fades and scales as you descend into the story
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
      color: "bg-[#FBFBFB]",
      textColor: "text-[#2C2C2C]"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#F5F0E8]">
      
      {/* 🏛️ ABOUT ME HEADER (Sticky Title Layer) */}
      <motion.div 
        style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-0 pointer-events-none"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#9B8B7A]/10 rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#E6B8A2]/10 rounded-full" />
        </div>

        <span className="text-[#9B8B7A] text-xs tracking-[1em] uppercase font-bold mb-4 relative z-10">
          About Me
        </span>
        
        <h1 className="text-[12vw] md:text-[8vw] font-['Marcellus'] text-[#2C2C2C] leading-none text-center relative z-10">
          Sandip <br /> <span className="italic text-[#9B8B7A]">Bhattarai</span>
        </h1>
        
        {/* 🔥 WOW QUOTE - Right below name */}
        <div className="relative z-10 mt-8 max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Decorative quote marks */}
            <span className="absolute -top-6 -left-6 text-6xl text-[#E6B8A2]/20 font-['Marcellus']">"</span>
            <p className="text-xl md:text-2xl lg:text-3xl font-['Jost'] italic text-[#5F5B57] text-center leading-relaxed">
              Technology is only as good as the <span className="text-[#2C2C2C] font-medium not-italic">peace of mind</span> it provides.
            </p>
            <span className="absolute -bottom-10 -right-6 text-6xl text-[#E6B8A2]/20 font-['Marcellus']">"</span>
          </div>
          
          {/* Decorative line */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="w-12 h-px bg-[#9B8B7A]/30" />
            <span className="text-[10px] tracking-[0.3em] text-[#9B8B7A] uppercase">Founder · S.A.I.T Solution</span>
            <div className="w-12 h-px bg-[#9B8B7A]/30" />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-4 relative z-10">
          <div className="w-px h-24 bg-gradient-to-b from-[#9B8B7A] to-transparent" />
          <span className="text-[10px] text-[#9B8B7A] uppercase tracking-[0.3em]">Scroll to Explore My Journey</span>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 border border-[#E6B8A2]/20 rounded-full" />
      </motion.div>

      {/* 📄 THE CHAPTER STACK */}
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
      className={`relative w-full h-screen flex items-center justify-center p-6 md:p-12 
        ${!isLast ? "sticky top-0" : "relative"}`}
    >
      {/* Background with shadow for the "Stacking" depth */}
      <div className={`absolute inset-0 ${chapter.color} shadow-[0_-30px_60px_rgba(0,0,0,0.12)]`} />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* IMAGE SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-1/2 aspect-[3/4] max-h-[75vh] overflow-hidden rounded-sm shadow-2xl 
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
          initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`w-full md:w-1/2 flex flex-col justify-center 
            ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className={`text-[10px] tracking-[0.5em] font-bold uppercase ${chapter.textColor} opacity-40`}>
              Chapter {chapter.id}
            </span>
            <div className={`w-12 h-px ${index === 1 ? "bg-white/20" : "bg-black/10"}`} />
          </div>

          <h2 className={`text-5xl md:text-7xl font-['Marcellus'] ${chapter.textColor} mb-8 leading-[1.1] tracking-tighter`}>
            {chapter.title}
          </h2>

          <p className={`text-lg md:text-xl font-['Jost'] font-light leading-relaxed ${chapter.textColor} opacity-80 mb-10 max-w-lg`}>
            {chapter.content}
          </p>

          <div className="flex items-center gap-4">
            <div className={`w-8 h-px ${index === 1 ? "bg-[#E6B8A2]" : "bg-[#9B8B7A]"}`} />
            <span className={`text-xs tracking-[0.3em] font-bold uppercase ${chapter.textColor} opacity-60`}>
              {chapter.tag}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;