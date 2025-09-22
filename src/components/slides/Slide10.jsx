import RightNavbar from '../RightNavbar';

const Slide10 = () => {
    return (
      <div className="w-full h-screen flex flex-col justify-start items-start bg-[#d6d0c7]">
        <RightNavbar bgColor="#d6d0c7" />

        {/* Main Content - Left Aligned */}
        <div className="flex flex-col items-start pl-8 pt-8">
          {/* Main Title - 70px */}
          <h1 className="font-josefin-sans text-[70px] leading-tight text-[#413C36] mb-4">
            02
          </h1>

          {/* Vertical Line - 400px */}
          <div className="w-[2px] h-[150px] bg-[#413C36] mb-8"></div>
          {/* Subtitle - 16px */}
          <p className="font-josefin-sans text-[16px] leading-tight text-[#413C36] mb-6 uppercase tracking-wide">
          interior <br></br>decoration</p>

          {/* Secondary Title - 48px */}
          <h2 className="font-kinta text-[35px] leading-tight text-[#413C36] mb-6 max-w-[500px]">
            Let's Create Something Amazing. This is the about us from living. 
          </h2>

          {/* Body Text - 16px */}
          <p className="font-josefin-sans text-[16px] leading-normal text-[#413C36] max-w-md">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life through thoughtful design.
          </p>
<div className="flex flex-row mt-8">
          <div 
          className="w-[65px] h-[65px] bg-[#413C36] rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all duration-300 z-20 group mt-[-10px]"
          onClick={'portfolio'}
        >
          <svg className="w-[65px] h-[65px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path  strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="font-josefin-sans text-[16px] leading-tight text-[#413C36] ml-4 uppercase tracking-wide">
        Descubra<br></br>a Coleção</p>
        </div>
        </div>
      </div>
    );
  };
  
  export default Slide10;
  