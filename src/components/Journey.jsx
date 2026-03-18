import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Journey = () => {
  const containerRef = useRef(null);

  // SCROLL TRACKING
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // SMOOTH PREMIUM MOTION
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  // TRANSFORMS
  const yMain = useTransform(smooth, [0, 1], [100, -80]);
  const ySmall = useTransform(smooth, [0, 1], [120, -120]);
  const opacity = useTransform(smooth, [0, 0.3], [0, 1]);
  const scale = useTransform(smooth, [0, 0.3], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative pb-12 md:pb-18 bg-[#f5f0e8] overflow-hidden"
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 pointer-events-none">
       
      </div>

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ===== IMAGE SIDE ===== */}
        <motion.div
          style={{ opacity, scale }}
          className="relative flex justify-center w-full mt-8 lg:mt-0"
        >
          {/* MAIN IMAGE */}
          <motion.div
            style={{ y: yMain }}
            className="relative w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[420px] sm:h-[460px] md:h-[520px] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] z-10 group mx-auto lg:mx-0"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e8] via-transparent to-transparent z-10" />

            <img
              src="/images/journey1.png"
              alt="Journey"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-1000"
            />
          </motion.div>

          {/* SECOND IMAGE (floating) */}
          <motion.div
            style={{ y: ySmall }}
            className="absolute bottom-[-30px] right-[10px] sm:right-[-10px] lg:bottom-[-60px] lg:right-[-40px] w-[160px] sm:w-[180px] lg:w-[220px] h-[200px] sm:h-[220px] lg:h-[260px] rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-2xl z-20"
          >
            <img
              src="/images/journey3.png"
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ===== TEXT SIDE ===== */}
        <motion.div
          style={{ opacity }}
          className="max-w-xl w-full text-center lg:text-left"
        >
          {/* Label */}
          <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-4 lg:mb-6">
            My Story
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#1a1a1a] font-serif mb-6 lg:mb-10">
            The Birth of <br />
            <span className="italic text-[#9c8c7b]">My IT Business</span>
          </h2>

          {/* Content */}
          <p className="text-base sm:text-lg leading-relaxed text-black/70 mb-4 lg:mb-6">
            My journey began in the hospitality sector, where I faced numerous
            challenges that tested my resilience and determination.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-black/70 mb-8 lg:mb-10">
            Working in this industry taught me valuable lessons about customer
            service, managing a business, and the importance of adaptability.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 lg:px-10 py-3 lg:py-4 border border-black/20 rounded-full overflow-hidden mx-auto lg:mx-0 inline-block"
          >
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500"></span>

            <span className="relative z-10 text-xs lg:text-sm uppercase tracking-widest font-medium group-hover:text-white transition">
              Learn More 
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;