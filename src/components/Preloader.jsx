import { motion } from 'framer-motion';
import logoVideo from '../Photos/founder src logo animation.mp4';
import logoImage from '../Photos/founders-running-clu.png';
import './Preloader.css';

const Preloader = ({ loading }) => {
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
    C 740 425, 760 350, 850 340
  `.replace(/\n/g, ' ').trim();

  const drawTransition = {
    duration: 2,
    ease: "linear",
    delay: 0.2
  };

  return (
    <div className={`preloader-container ${!loading ? 'fade-out' : ''}`}>
      {/* Background Hero Path Sync */}
      <div className="preloader-path-container">
        <svg
          viewBox="0 0 900 500"
          className="w-full h-auto max-w-[1400px] opacity-100"
          style={{ overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
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

          {/* Location Pin Sync */}
          <g transform="translate(826, 296)">
            <motion.g
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6, type: "spring", bounce: 0.5 }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#ff4d00" stroke="#ffffff" strokeWidth="0.5" />
                <circle cx="12" cy="9" r="3.5" fill="#000" />
              </svg>
            </motion.g>
          </g>
        </svg>
      </div>

      <div className="preloader-logo-wrapper">
        <video
          src={logoVideo}
          autoPlay
          muted
          playsInline
          className="preloader-logo-video"
        />
        <img
          src={logoImage}
          alt="Founders Running Club Logo"
          className="preloader-logo-image"
        />
      </div>
    </div>
  );
};

export default Preloader;
