import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CommunityDescription from './components/CommunityDescription';
import InstagramGrid from './components/InstagramGrid';
import Partners from './components/Partners';
import MemberForm from './components/MemberForm';
import Lenis from 'lenis';
import Team from './components/Team';
import vergeLogo from './Photos/the-verge-seeklogoco.svg';
import incLogo from './Photos/inc.svg';
import place3 from './Photos/People/70a2a2f4-ed9f-4be0-a.jpg.webp';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const eventsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: eventsRef,
    offset: ["start start", "end end"]
  });

  const metadataY = useTransform(scrollYProgress, [0, 1], [800, -800]);

  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />

      <div id="community" className="relative z-0">
        <CommunityDescription />
      </div>
      <InstagramGrid />

      {/* Sticky Scroll Section for Events */}
      <div ref={eventsRef} className="relative h-[180vh]">
        <div id="events" className="sticky top-0 h-screen bg-black overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: `url('${place3}')`,
              }}
              className="absolute inset-0 bg-cover bg-center"
            />
            {/* Transparent interaction block */}
            <div className="absolute inset-0 z-10" />

            {/* Left Editorial Metadata */}
            <motion.div
              style={{ y: metadataY }}
              className="absolute top-[35%] left-[10%] md:left-[22%] z-20 pointer-events-none"
            >
              <div className="text-white text-[14px] md:text-[24px] uppercase tracking-tight font-bold flex flex-col gap-1">
                <span>Paris, FR</span>
                <span className="font-medium text-[10px] md:text-[16px]">48.856623522 E</span>
                <span className="text-[9px] md:text-[14px]">Alt // 35m MSL</span>
              </div>
            </motion.div>

            {/* Top Right Editorial Metadata */}
            <motion.div
              style={{ y: metadataY }}
              className="absolute top-[70%] right-[20%] md:right-[28%] z-20 pointer-events-none hidden md:block"
            >
              <div className="text-white text-[16px] md:text-[24px] uppercase tracking-tight font-medium flex flex-col items-end gap-1 text-right">
                <span>Global Community</span>
                <span className="text-[12px] md:text-[18px]">EST. MMXXIV</span>
                <span className="text-[10px] md:text-[15px]">1200+ Runners // 60+ Cities</span>
              </div>
            </motion.div>

            {/* Main Vertical Title */}
            <div className="absolute top-0 right-0 h-full flex items-center pr-6 md:pr-16 z-20 pointer-events-none">
              <h2
                className="text-white text-5xl md:text-8xl font-black uppercase tracking-[0.2em] [writing-mode:vertical-rl] select-none opacity-90 drop-shadow-2xl origin-center"
              >
                Events
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div id="partners">
        <Partners />
      </div>

      {/* <div id="team">
        <Team />
      </div> */}

      {/*<div id="join">
        <MemberForm />
      </div> */}

      <footer className="bg-black py-20 px-4 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-12">
              <p className="text-sm opacity-60 uppercase tracking-widest">Media</p>
              <div className="flex flex-wrap items-center gap-8 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                <a
                  href="https://www.inc.com/ava-mandoli/this-entrepreneur-has-60-co-founders-why-tim-tkachenko-wouldnt-have-it-any-other-way.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={incLogo}
                    alt="Inc"
                    className="h-8 md:h-10 w-auto"
                  />
                </a>
                <a
                  href="https://www.theverge.com/c/23546117/ukraine-tech-workers-russia-war"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={vergeLogo}
                    alt="The Verge"
                    className="h-5 md:h-8 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="text-right space-y-4">
              <a
                href="mailto:hello@foundersrc.com"
                className="text-2xl md:text-3xl font-light underline hover:no-underline"
              >
                hello@foundersrc.com
              </a>
              <div className="flex justify-end gap-6 text-sm opacity-50 uppercase tracking-tighter mt-8">
                <span>Chats</span>
                <span>Instagram</span>
                <span>Linkedin</span>
                <span>Strava</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
