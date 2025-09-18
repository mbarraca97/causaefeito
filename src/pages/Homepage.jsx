import { useScrollSnap } from '../hooks/useScrollSnap';
import SlideContainer from '../components/SlideContainer';

const Homepage = () => {
  // Demo slides data
  const slides = [
    {
      title: "Welcome to Our Journey",
      content: "Discover the art of storytelling through immersive digital experiences. Every scroll reveals a new chapter in our narrative.",
      backgroundColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "Innovation Meets Design",
      content: "Where creativity knows no bounds and technology becomes the canvas for extraordinary user experiences.",
      backgroundColor: "bg-gradient-to-br from-emerald-400 to-cyan-500",
      textColor: "text-white"
    },
    {
      title: "The Future is Now",
      content: "Embrace the next generation of web interactions. Smooth, fluid, and completely mesmerizing.",
      backgroundColor: "bg-gradient-to-br from-orange-400 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "Endless Possibilities",
      content: "With every scroll, we unlock new dimensions of user engagement and visual storytelling.",
      backgroundColor: "bg-gradient-to-br from-violet-500 to-purple-700",
      textColor: "text-white"
    },
    {
      title: "Your Story Begins",
      content: "Ready to transform your vision into an unforgettable digital experience? Let's create something amazing together.",
      backgroundColor: "bg-gradient-to-br from-gray-800 to-black",
      textColor: "text-white"
    }
  ];

  const { currentSlide } = useScrollSnap(Math.ceil(slides.length / 2));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex w-full h-full">
        {/* Left Side - Scrolls Up */}
        <div className="w-1/2 h-full">
          <SlideContainer
            slides={slides}
            currentSlide={currentSlide}
            side="left"
          />
        </div>
        
        {/* Right Side - Scrolls Down */}
        <div className="w-1/2 h-full">
          <SlideContainer
            slides={slides}
            currentSlide={currentSlide}
            side="right"
          />
        </div>
      </div>

      {/* Mobile Layout - Stacked Vertically */}
      <div className="md:hidden w-full h-full">
        <div className="w-full h-1/2">
          <SlideContainer
            slides={slides}
            currentSlide={currentSlide}
            side="left"
          />
        </div>
        
        <div className="w-full h-1/2">
          <SlideContainer
            slides={slides}
            currentSlide={currentSlide}
            side="right"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {Array.from({ length: Math.ceil(slides.length / 2) }, (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Instruction */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-white/70 text-sm font-josefin text-center">
        <div className="animate-bounce">↓</div>
        <div className="mt-2">Scroll to explore</div>
      </div>
    </div>
  );
};

export default Homepage;
