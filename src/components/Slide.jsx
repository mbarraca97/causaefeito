import { motion } from 'framer-motion';

const Slide = ({ title, content, backgroundColor = 'bg-gray-100', textColor = 'text-gray-900', index }) => {
  return (
    <motion.div
      className={`w-full h-screen flex flex-col justify-center items-center px-8 md:px-16 ${backgroundColor} ${textColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-2xl text-center">
        <motion.h1 
          className="font-josefin text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="font-josefin text-lg md:text-xl lg:text-2xl leading-relaxed opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content}
        </motion.p>
        
        <motion.div 
          className="mt-12 text-sm opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Slide {index + 1}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide;
