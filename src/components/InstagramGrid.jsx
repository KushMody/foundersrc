import React from 'react';
import { motion } from 'framer-motion';
import place1 from '../Photos/Places/42acbf9505eb7cb174c7f2fa7aee735c.jpg';
import place2 from '../Photos/Places/4b6f2ad91cbdd66049b2a35175e149dd.jpg';
import place3 from '../Photos/Places/549d741d8bd9224d26aefcce8ba7ff6b.jpg';
import place4 from '../Photos/Places/6606b415014831ec59046a5fc006bde9.jpg';
import place5 from '../Photos/Places/a78c4e5765cd18912d0a2ae132094a80.jpg';
import place6 from '../Photos/Places/a9bd2ffad0a0775c2456dc74aba2f1d1.jpg';
import place7 from '../Photos/Places/be715756e9094d1170c25dd71c78e665.jpg';
import place8 from '../Photos/Places/ff6ecfef9091fc99c1e8dba99b5fa8e3.jpg';

const communities = [
  { name: 'Athens', time: 'Saturday, 9:00am', location: 'Suihub Athens', image: place2 },
  { name: 'Bangalore', time: 'Saturday, 7:00am', location: 'Agara Lake, Gate 1', image: place1 },
  { name: 'London', time: 'Thursday, 6:30pm', location: 'Hyde Park Corner', image: place3 },
  { name: 'Singapore', time: 'Saturday, 4:00pm', location: 'Open Sourced', image: place4 },
  { name: 'Malaga', time: 'Wednesday, 7:00pm', location: 'Muelle Uno', image: place5 },
  { name: 'Brussels', time: 'Sunday, 10:00am', location: 'Parc du Cinquantenaire', image: place6 },
  { name: 'Berlin', time: 'Tuesday, 6:00pm', location: 'Tiergarten', image: place7 },
  { name: 'Surat', time: 'Sunday, 6:30am', location: 'Canal Road', image: place8 },
];

const InstagramGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className="bg-black -mt-[120px] pt-32 pb-20 relative z-10 overflow-hidden">
      {/* Cinematic Header */}
      <div className="px-6 md:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
          >
            Live from the field
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9]"
          >
            Our Shared <br /> <span className="text-white/20">Frequency</span>
          </motion.h2>
        </div>

        <motion.a
          href="https://instagram.com/foundersrc"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-bold tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Follow @foundersrc
        </motion.a>
      </div>

      {/* Editorial Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 w-full"
      >
        {communities.map((city, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative aspect-[4/5] md:aspect-square overflow-hidden group cursor-pointer border-r border-b border-white/5"
          >
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('${city.image}')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
              {/* Top: Branding/Meta */}
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Bottom: Visual Indicator only */}
              <div className="space-y-4">
                {/* Text overlays removed as they are baked into images */}
              </div>
            </div>

            {/* Hover Accent Bar */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InstagramGrid;
