import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import person1 from '../Photos/People/465566578_476215001471858_6318367107199521332_n.jpg';
import person2 from '../Photos/People/476519899_17978273744807927_4376860918052782208_n.jpg';
import person3 from '../Photos/People/485017381_17982630512807927_1554009487076309698_n.jpg';
import person4 from '../Photos/People/491425333_676747501764874_5104517139208109478_n.jpg';
import person5 from '../Photos/People/503655515_17991742259807927_8635534192970215539_n.jpg';
import person6 from '../Photos/People/627753151_1198963035747705_8084067681229419560_n.jpg';
import person7 from '../Photos/People/568540136_18007672244807927_1426842233029006736_n.jpg';
import person8 from '../Photos/571766353_18007672226807927_3441291765603122768_n.jpg';
import person9 from '../Photos/People/584529122_17863839117516116_8737841084758635386_n.webp';
import person10 from '../Photos/People/587840011_17863839129516116_1040930558029477311_n.webp';

const peopleImages = [
  person1, person2, person3, person4, person5,
  person6, person7, person8, person9, person10
];

const CommunityDescription = () => {
  const [multiplier, setMultiplier] = useState(window.innerWidth < 768 ? 40 : 110);

  useEffect(() => {
    const handleResize = () => {
      setMultiplier(window.innerWidth < 768 ? 40 : 110);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageLayouts = useMemo(() => {
    return peopleImages.map((_, i) => ({
      rotate: (i % 2 === 0 ? -1 : 1) * (Math.random() * 15 + 5),
      x: (i - 4.5) * multiplier + (Math.random() * 30 - 15),
      y: (i % 2 === 0 ? -1 : 1) * (Math.random() * 40),
    }));
  }, [multiplier]);

  return (
    <section className="bg-white text-black pt-12 pb-0 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-8 text-center">
          <p className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] font-light tracking-tight max-w-4xl mx-auto">
            A <span className="italic font-normal">global community</span> of 45,000+ visionaries across 38 countries.
          </p>

          <p className="text-xl text-black/60 font-light leading-relaxed max-w-3xl mx-auto">
            Every week in 50+ cities from SF to Dubai, London to São Paulo, 1,000+ founders hit the ground running. We bring together investors, operators, and creators to build and move forward at the intersection of ambition and action.
          </p>
        </div>

        {/* Scattered Image Gallery */}
        <div className="mt-30 relative h-[400px] w-full flex items-center justify-center translate-y-[200px]">
          {peopleImages.map((img, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `translate(${imageLayouts[i].x}px, ${imageLayouts[i].y - 200}px) rotate(${imageLayouts[i].rotate}deg)`,
                zIndex: i
              }}
            >
              <img
                src={img}
                alt={`Community member ${i + 1}`}
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityDescription;
