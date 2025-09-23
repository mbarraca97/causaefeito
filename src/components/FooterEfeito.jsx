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
      <div className="flex flex-col h-full p-8 text-white relative border-r-2 ">
        {/* Big Title */}
        <div className="mt-8">
          <h1 className="font-josefina-sans text-[80px] leading-tight text-white font-regular uppercase">
            Causa
          </h1>
          <h1 className="font-josefina-sans text-[80px] leading-tight text-white font-thin uppercase mt-[-20px]">
            Efeito
          </h1>
        </div>

        {/* Two Small Titles with 80px margin */}
        <div className="mt-12">
          <h2 className="font-josefin-sans text-[28px] text-white mb-4 font-regular">
            Siga-nos
          </h2>
          <h2 className="font-josefin-sans text-[18px] text-white font-regular mt-[-10px]" href="https://www.instagram.com/causaefeito_lda/">
          Instagram
          </h2>
          <h2 className="font-josefin-sans text-[18px] text-white font-regular mt-[-5px]" href="https://www.facebook.com/causaefeitolda" >
          Facebook
          </h2>
        </div>

        {/* Bottom Row - Title + Subtitles */}
        <div className="mt-auto mb-8 flex justify-between items-start">
            <div>
              <h3 className="font-josefin-sans text-[24px] text-white mb-2">
                Contactos
              </h3>
              <p className="font-josefin-sans text-[16px] text-white/80">
               +351  22 339 4650
              </p>
              <p className="font-josefin-sans text-[16px] text-white/80">
                geral@causaefeitodecoracao.pt
              </p>
            </div>
            <div className='max-w-[250px]'>
              <h3 className="font-josefin-sans text-[24px] text-white mb-2 ">
                Loja
              </h3>
              <p className="font-josefin-sans text-[16px] text-white/80">
              R. de Mouzinho da Silveira 35, 4050-419 Porto
              </p>
              <p className="font-josefin-sans text-[16px] text-white/80">
              </p>
            </div>
        </div>

        {/* Hover Image - Center Right */}
        {isHovered && (
          <motion.div
            className="absolute top-1/4 right-32 transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/footer-efeito.png" 
              alt="Causa Efeito" 
              className="w-[300px] h-[400px] object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FooterEfeito;
