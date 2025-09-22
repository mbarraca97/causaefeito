const Slide8 = ({ selectedProject, onProjectClick }) => {
  const defaultProject = {
    id: 1,
    number: '01',
    name: 'Villa Marina',
    image: '/project1.jpg',
    href: '/projects/villa-marina'
  };

  const project = selectedProject || defaultProject;

  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project.href);
    }
  };

  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat cursor-pointer relative group"
      style={{
        backgroundImage: `url(${project.image})`
      }}
      onClick={handleClick}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      
      {/* Project info overlay */}
      <div className="absolute bottom-8 left-8 text-white z-10">
        <div className="font-josefin-sans text-[18px] font-light uppercase tracking-wide mb-2">
          Project {project.number}
        </div>
        <h2 className="font-kinta text-[48px] leading-tight mb-4">
          {project.name}
        </h2>
        <div className="font-josefin-sans text-[14px] opacity-80 group-hover:opacity-100 transition-all duration-300">
          Click to view project details →
        </div>
      </div>

      {/* Hover effect indicator */}
      <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
          <span className="text-[24px]">→</span>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
