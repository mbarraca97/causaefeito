import { useScrollSnap } from '../hooks/useScrollSnap';
import SlideContainer from '../components/SlideContainer';
import { slides } from '../components/slides';
import { useState } from 'react';

const Homepage = () => {
  const { currentSlide } = useScrollSnap(Math.ceil(slides.length / 2));
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleProjectClick = (href) => {
    console.log('Navigate to:', href);
    // Add navigation logic here
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex w-full h-full">
        {/* Left Side - Scrolls Up */}
        <div className="w-1/2 h-full">
          <SlideContainer
            slideComponents={slides}
            currentSlide={currentSlide}
            side="left"
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
            onProjectClick={handleProjectClick}
          />
        </div>
        
        {/* Right Side - Scrolls Down */}
        <div className="w-1/2 h-full">
          <SlideContainer
            slideComponents={slides}
            currentSlide={currentSlide}
            side="right"
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      {/* Mobile Layout - Stacked Vertically */}
      <div className="md:hidden w-full h-full">
        <div className="w-full h-1/2">
          <SlideContainer
            slideComponents={slides}
            currentSlide={currentSlide}
            side="left"
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
            onProjectClick={handleProjectClick}
          />
        </div>
        
        <div className="w-full h-1/2">
          <SlideContainer
            slideComponents={slides}
            currentSlide={currentSlide}
            side="right"
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
      </div> */}

      {/* Scroll Instruction
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-white/70 text-sm font-josefin-sans text-center">
        <div className="animate-bounce">↓</div>
        <div className="mt-2">Scroll to explore</div>
      </div> */}
    </div>
  );
};

export default Homepage;
