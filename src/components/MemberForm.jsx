import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <div className="bg-black">
      {/* City Link Section */}
      <section className="bg-white text-black py-40 text-center border-t border-black/5">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-black/40">Connect Locally</p>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            href="http://foundersrc.com/chats" 
            className="inline-block text-4xl md:text-5xl font-light tracking-tight underline transition-all decoration-black/10 hover:decoration-black underline-offset-[12px]"
          >
            Find a group in <span className="italic">your city</span>
          </motion.a>
        </motion.div>
      </section>

      {/* Become a Member Section */}
      <section className="bg-black text-white py-40 px-6 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Become a member.</h2>
            <p className="text-white/40 font-light tracking-wide italic">Join the global movement of builders.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto group">
            <motion.div className="flex flex-col sm:flex-row gap-4 items-center">
              <motion.input
                whileFocus={{ y: -2 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full h-16 px-8 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                required
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full sm:w-auto h-16 px-10 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                JOIN
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default MemberForm;
