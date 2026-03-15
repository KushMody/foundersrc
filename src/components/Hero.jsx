import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // The path deviates after X=500, swoops down into the deep valley, 
  // and smoothly climbs back up to hit the exact ending pin at 800 340.
  const pathData = `
    M 0 490
    C 30 470, 50 460, 70 450
    C 85 440, 95 410, 100 380
    C 110 370, 120 340, 130 330
    C 140 325, 150 325, 160 340
    L 200 340
    C 220 340, 240 370, 250 390
    C 260 410, 280 410, 290 400
    C 300 350, 310 330, 340 325
    C 370 315, 390 318, 400 320
    C 410 315, 430 315, 440 325
    C 450 340, 460 340, 470 330
    C 480 320, 490 315, 500 315 
    C 520 315, 540 360, 560 410 
    C 580 450, 610 450, 640 445 
    C 670 440, 690 425, 710 425 
    C 740 425, 760 350, 800 340
  `.replace(/\n/g, ' ').trim();

  const drawTransition = {
    duration: 3,
    ease: "linear",
    delay: 0.2
  };

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Subtle Gradient */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"
      />

      {/* The main content text and button */}
      <div className="z-10 text-white max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A Global Community for{' '}
          <span className="text-neutral-500">Builders & Founders</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Join weekly Running + Networking events across 50+ cities. Connect with the world's most ambitious builders.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black text-lg font-bold px-10 py-5 rounded-full flex items-center gap-3 transition-transform hover:scale-105"
        >
          JOIN THE MOVEMENT <span className="text-xl">→</span>
        </motion.button>
      </div>

      {/* Animated Running Path */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto max-w-[1200px] opacity-100"
          style={{ overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Layer 1: The solid orange path */}
          <motion.path
            d={pathData}
            fill="transparent"
            stroke="#ff4d00ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={drawTransition}
          />

          {/* Location Pin dropped exactly at the correct end coordinate (800, 340) */}
          <g transform="translate(776, 296)">
            <motion.g
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6, type: "spring", bounce: 0.5 }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Custom pin */}
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#ff4d00" stroke="#ffffff" strokeWidth="0.5" />
                <circle cx="12" cy="9" r="3.5" fill="#000" />
              </svg>
            </motion.g>
          </g>

        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
