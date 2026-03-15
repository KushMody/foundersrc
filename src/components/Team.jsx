import { motion } from 'framer-motion';
import chris2Img from '../Photos/Chris2.png.webp';
import fionaImg from '../Photos/Fiona_Headshot_1.png.webp';
import michaelImg from '../Photos/Michael.jpg.webp';
import annaImg from '../Photos/anna-3.png.webp';

const teamMembers = [
  { name: 'Christian', city: 'LA', image: chris2Img },
  { name: 'Anna', city: 'San Francisco', image: annaImg },
  { name: 'Michael', city: 'Lisbon', image: michaelImg },
  { name: 'Fiona', city: 'LA', image: fionaImg },
  { name: 'Alisa', city: 'Boston', image: 'https://static.tildacdn.net/tild6566-3461-4631-b435-313631353166/Alisa.png' },
  { name: 'Christopher', city: 'LA', image: 'https://static.tildacdn.net/tild6261-3062-4665-b661-353934613838/Chris3.png' },
  { name: 'Ewa', city: 'Amsterdam', image: 'https://static.tildacdn.net/tild6264-6130-4161-a662-613935356531/Ewa.png' },
  { name: 'Ivan (Lisbon)', city: 'Lisbon', image: 'https://static.tildacdn.net/tild6435-3038-4531-a136-313632393735/Ivan.png' },
  { name: 'Yunsu Tang', city: 'London', image: 'https://static.tildacdn.net/tild3539-6436-4565-b734-653933663664/yunsutang.jpg' },
  { name: 'Chris', city: 'Barcelona', image: 'https://static.tildacdn.net/tild3835-3337-4538-b661-636334646339/Chris.png' },
  { name: 'Maciej', city: 'Poznań', image: 'https://static.tildacdn.net/tild3330-6632-4137-a535-353131363565/Maciej.png' },
  { name: 'Christine', city: 'SF', image: 'https://static.tildacdn.net/tild6338-3230-4239-a138-373033323537/Christina.png' },
  { name: 'Michal', city: 'Poznań', image: '' },
  { name: 'Gina', city: 'Stockholm', image: '' },
  { name: 'Anton', city: 'San Francisco', image: '' },
  { name: 'Carmen', city: 'Austin', image: '' },
  { name: 'Anette', city: 'Berlin', image: '' },
  { name: 'Russel', city: 'London', image: '' },
  { name: 'Irina', city: 'Paris', image: '' },
  { name: 'Vitally', city: 'Berlin', image: '' },
  { name: 'Ilona', city: 'London', image: '' },
  { name: 'Vince', city: 'Paris', image: '' },
  { name: 'Ola', city: 'Poznań', image: '' },
  { name: 'Mo', city: 'London', image: '' },
  { name: 'Gene', city: 'Lisbon', image: '' },
  { name: 'Ksu', city: 'Berlin', image: '' },
  { name: 'James', city: 'Austin', image: '' },
  { name: 'Sofi', city: 'Berlin', image: '' },
  { name: 'Ivan (Voronezh)', city: 'Voronezh', image: '' },
  { name: 'Le', city: 'Boston', image: '' },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white text-black py-40 px-6 border-t border-black/5">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-black/40 mb-4">
            Our People
          </h2>
          <p className="text-4xl md:text-5xl font-light tracking-tight">
            The heart of our <span className="italic">community</span>.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-20 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={`${member.name}-${member.city}`} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center group cursor-default text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-cover bg-center mb-8 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-black group-hover:text-black transition-colors">{member.name}</h3>
                <p className="text-xs text-black/30 uppercase tracking-[0.1em] font-semibold">{member.city}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
