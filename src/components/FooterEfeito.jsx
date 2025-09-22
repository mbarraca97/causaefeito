import { useState } from 'react';
import { motion } from 'framer-motion';

const FooterEfeito = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-screen bg-[#413C36] relative overflow-hidden cursor-pointer border-l border-white/20"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full p-8 text-white relative">
        {/* Big Title */}
        <div className="mt-8">
          <h1 className="font-kinta text-[120px] leading-tight text-white">
            Causa Efeito
          </h1>
        </div>

        {/* Two Small Titles with 80px margin */}
        <div className="mt-12 ml-[80px]">
          <h2 className="font-josefin-sans text-[32px] uppercase text-white mb-4">
            Commercial Spaces
          </h2>
          <h2 className="font-josefin-sans text-[32px] uppercase text-white">
            Brand Experience
          </h2>
        </div>

        {/* Bottom Row - Title + Subtitles */}
        <div className="mt-auto mb-8 flex justify-between items-end">
          <div className="flex space-x-16">
            <div>
              <h3 className="font-josefin-sans text-[24px] uppercase text-white mb-2">
                Services
              </h3>
              <p className="font-josefin-sans text-[16px] text-white/80">
                Retail Design
              </p>
              <p className="font-josefin-sans text-[16px] text-white/80">
                Office Spaces
              </p>
            </div>
            <div>
              <h3 className="font-josefin-sans text-[24px] uppercase text-white mb-2">
                Portfolio
              </h3>
              <p className="font-josefin-sans text-[16px] text-white/80">
                50+ Projects
              </p>
              <p className="font-josefin-sans text-[16px] text-white/80">
                International Clients
              </p>
            </div>
          </div>
        </div>

        {/* Hover Image - Center Right */}
        {isHovered && (
          <motion.div
            className="absolute top-1/2 right-32 transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/footer-efeito.jpg" 
              alt="Causa Efeito" 
              className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FooterEfeito;
