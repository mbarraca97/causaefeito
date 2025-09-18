import { motion, AnimatePresence } from 'framer-motion';
import Slide from './Slide';

const SlideContainer = ({ slides, currentSlide, side }) => {
  const getSlideIndex = () => {
    if (side === 'left') {
      // Left side: shows odd slides (0, 2, 4, ...)
      return currentSlide * 2;
    } else {
      // Right side: shows even slides (1, 3, 5, ...)
      return currentSlide * 2 + 1;
    }
  };

  const getCurrentSlide = () => {
    const slideIndex = getSlideIndex();
    // Return the slide if it exists, otherwise return the last slide
    return slides[Math.min(slideIndex, slides.length - 1)];
  };

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 1
    })
  };

  const direction = side === 'left' ? -1 : 1;
  const slideIndex = getSlideIndex();
  const slide = getCurrentSlide();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${side}-${slideIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0"
        >
          <Slide
            title={slide.title}
            content={slide.content}
            backgroundColor={slide.backgroundColor}
            textColor={slide.textColor}
            index={slideIndex}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideContainer;
