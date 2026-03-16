import { motion } from 'framer-motion';
import vantaLogo from '../Photos/vanta-logo.svg';
import deelLogo from '../Photos/deel-logo.svg';
import hubspotLogo from '../Photos/HubSpot_Logo.svg';
import intercomLogo from '../Photos/intercom-desc.svg';
import techweekLogo from '../Photos/techweek.svg';
import a16zLogo from '../Photos/a16z.svg';
import tnwLogo from '../Photos/tnw.svg';

const partners = [
  { name: 'Vanta', logo: vantaLogo },
  { name: 'Deel', logo: deelLogo },
  { name: 'HubSpot', logo: hubspotLogo },
  { name: 'Intercom', logo: intercomLogo },
  { name: 'TechWeek', logo: techweekLogo },
  { name: 'a16z', logo: a16zLogo },
  { name: 'TNW', logo: tnwLogo },
];

const Partners = () => {
  // Triple the partners for seamless loop
  const logos = [...partners, ...partners, ...partners];

  return (
    <section className="bg-black py-12 md:py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.4em] uppercase text-white/30"
        >
          Supported by the best
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Blur Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap gap-24 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {logos.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-12 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
