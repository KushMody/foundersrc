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

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

function App() {
  const eventsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: eventsRef,
    offset: ["start start", "end end"]
  });

  const metadataY = useTransform(scrollYProgress, [0, 1], [600, -600]);

  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with Hero path animation (3.2s) + Pin drop (0.6s) + buffer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Preloader loading={loading} />
      <Navbar />
      <Hero />

      <div id="community" className="relative z-0">
        <CommunityDescription />
      </div>
      <InstagramGrid />

      {/* Sticky Scroll Section for Events */}
      <div ref={eventsRef} className="relative h-[140vh]">
        <div id="events" className="sticky top-0 h-screen bg-black overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: `url('${place3}')`,
              }}
              className="absolute inset-0 bg-cover bg-center"
            />
            {/* Background Image Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            {/* Transparent interaction block */}
            <div className="absolute inset-0 z-10" />

            {/* Left Editorial Metadata */}
            <motion.div
              style={{ y: metadataY }}
              className="absolute top-[30%] md:top-[35%] left-[8%] md:left-[22%] z-20 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
            >
              <div className="text-white text-[14px] md:text-[24px] uppercase tracking-tight font-bold flex flex-col gap-1">
                <span className="text-[#fc6423ff]">Paris, FR</span>
                <span className="font-medium text-[10px] md:text-[16px]">48.856623522 E</span>
                <span className="text-[8px] md:text-[14px] opacity-80">Alt // 35m MSL</span>
              </div>
            </motion.div>

            {/* Top Right Editorial Metadata */}
            <motion.div
              style={{ y: metadataY }}
              className="absolute top-[75%] md:top-[70%] right-[20%] md:right-[28%] z-20 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
            >
              <div className="text-white text-[16px] md:text-[24px] uppercase tracking-tight font-medium flex flex-col items-end gap-1 text-right">
                <span className="text-[#fc6423ff] font-bold">Global Community</span>
                <span className="text-[12px] md:text-[18px]">EST. MMXXIV</span>
                <span className="text-[9px] md:text-[15px] opacity-80">1200+ Runners // 60+ Cities</span>
              </div>
            </motion.div>

            {/* Main Vertical Title */}
            <div className="absolute top-0 right-0 h-full flex items-center pr-4 md:pr-16 z-20 pointer-events-none">
              <h2
                className="text-white text-5xl md:text-8xl font-black uppercase tracking-[0.2em] [writing-mode:vertical-rl] select-none opacity-80 md:opacity-90 drop-shadow-2xl origin-center"
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

      <footer className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {/* Column 1: Branding */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tighter mb-4 selection:bg-[#fc6423ff]">FRC</h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                  A global community for the builders, the founders, and the ambitious runners. We run to build, and we build to last.
                </p>
              </div>
            </div>

            {/* Column 2: Connect */}
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">Follow Us</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {['Instagram', 'Linkedin', 'Strava', 'Chats'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-medium text-neutral-400 hover:text-white transition-all duration-300 flex items-center gap-1 group"
                    >
                      {social}
                      <span className="text-[#fc6423ff] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">Get in Touch</p>
                <a
                  href="mailto:hello@foundersrc.com"
                  className="text-xl md:text-2xl font-medium block hover:text-[#fc6423ff] transition-colors duration-300 w-fit"
                >
                  hello@foundersrc.com
                </a>
              </div>
            </div>

            {/* Column 3: Recognition */}
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">As Seen In</p>
              <div className="flex flex-col gap-8">
                <a
                  href="https://www.inc.com/ava-mandoli/this-entrepreneur-has-60-co-founders-why-tim-tkachenko-wouldnt-have-it-any-other-way.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 w-fit"
                >
                  <img src={incLogo} alt="Inc" className="h-6 md:h-7" />
                </a>
                <a
                  href="https://www.theverge.com/c/23546117/ukraine-tech-workers-russia-war"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 w-fit"
                >
                  <img src={vergeLogo} alt="The Verge" className="h-4 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-neutral-600 font-medium uppercase tracking-[0.1em]">
              © {new Date().getFullYear()} Founders Running Club. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] text-neutral-600 font-medium uppercase tracking-[0.1em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
