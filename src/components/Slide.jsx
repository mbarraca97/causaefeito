import { motion } from 'framer-motion';

const Slide = ({ title, content, backgroundColor = 'bg-gray-100', textColor = 'text-gray-900', index }) => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center px-8 md:px-16 ${backgroundColor} ${textColor}`}
    >
      <div className="max-w-2xl text-center">
        <h1 className="font-josefin text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {title}
        </h1>
        
        <p className="font-josefin text-lg md:text-xl lg:text-2xl leading-relaxed opacity-80">
          {content}
        </p>
        
        <div className="mt-12 text-sm opacity-60">
          Slide {index + 1}
        </div>
      </div>
    </div>
  );
};

export default Slide;
