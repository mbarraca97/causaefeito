
const projects = [
  { id: 1, number: '01', name: 'Villa Marina', image: '/project1.jpg', href: '/projects/villa-marina' },
  { id: 2, number: '02', name: 'Urban Loft', image: '/project2.jpg', href: '/projects/urban-loft' },
  { id: 3, number: '03', name: 'Modern Office', image: '/project3.jpg', href: '/projects/modern-office' },
  { id: 4, number: '04', name: 'Coastal House', image: '/project4.jpg', href: '/projects/coastal-house' },
  { id: 5, number: '05', name: 'City Apartment', image: '/project5.jpg', href: '/projects/city-apartment' },
];

const Slide7 = ({ onProjectSelect, selectedProject }) => {
  const handleTabClick = (project) => {
    onProjectSelect(project);
  };

  return (
    <div className="w-full h-screen flex bg-[#F2EDE7]">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onClick={() => handleTabClick(project)}
          className={`group flex-1 h-full flex flex-col items-center justify-between py-8 cursor-pointer transition-all duration-300 hover:bg-[#a59e94]  ${
            selectedProject?.id === project.id ? 'bg-[#413C36] text-[#F2EDE7]' : 'bg-[#F2EDE7] text-[#413C36]'
          } ${index !== projects.length - 1 ? 'border-r border-[#413C36]' : ''}`}
          onMouseEnter={(e) => {
            const nameEl = e.currentTarget.querySelector('.name-element');
            if (nameEl) nameEl.style.fontSize = '20px';
          }}
          onMouseLeave={(e) => {
            const nameEl = e.currentTarget.querySelector('.name-element');
            if (nameEl) nameEl.style.fontSize = '18px';
          }}
        >
          {/* Number at top - rotated 90 degrees */}
          <div 
            className={`number-element font-josefin-sans text-[35px] font-bold leading-none transition-all duration-500 ease-out group-hover:text-white ${
              selectedProject?.id === project.id ? 'text-[#F2EDE7]' : 'text-[#413C36]'
            }`}
            style={{ 
              transform: 'rotate(-180deg)',
              transformOrigin: 'center',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transition: 'all 0.5s ease-out'
            }}
          >
            {project.number}
          </div>

          {/* Vertical line in middle */}
          <div 
            className={`w-[2px] flex-1 mx-auto my-8 transition-all duration-500 ease-out group-hover:bg-white group-hover:w-[2px] ${
              selectedProject?.id === project.id ? 'bg-[#F2EDE7]' : 'bg-[#413C36]'
            }`}
          ></div>

          {/* Project name at bottom - rotated 90 degrees */}
          <div 
            className={`name-element font-josefin-sans text-[18px] uppercase leading-none transition-all duration-500 ease-out group-hover:text-white ${
              selectedProject?.id === project.id ? 'text-[#F2EDE7]' : 'text-[#413C36]'
            }`}
            style={{ 
              transform: 'rotate(-180deg)',
              transformOrigin: 'center',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transition: 'all 0.5s ease-out'
            }}
          >
            {project.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide7;
