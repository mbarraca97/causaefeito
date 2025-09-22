const Slide6 = () => {
    return (
      <div className="w-full h-screen flex flex-col justify-start items-start bg-[#F2EDE7]">
        {/* Top Bar */}
        <div className="h-[75px] bg-[#F2EDE7] w-full text-right items-end flex flex-row items-center justify-end pr-8">
          <img src="/menu.png" alt="logo" className="w-[33px] h-[22px]" />
        </div>

        {/* Main Content - Left Aligned */}
        <div className="flex flex-col items-start pl-8 pt-8">
          {/* Main Title - 70px */}
          <h1 className="font-josefin-sans text-[70px] leading-tight text-[#413C36] mb-4">
            01
          </h1>

          {/* Vertical Line - 400px */}
          <div className="w-[2px] h-[250px] bg-[#413C36] mb-8"></div>
          {/* Subtitle - 16px */}
          <p className="font-josefin-sans text-[16px] leading-relaxed text-[#413C36] mb-6 uppercase tracking-wide">
          interior <br></br>design studio           </p>

          {/* Secondary Title - 48px */}
          <h2 className="font-kinta text-[48px] leading-tight text-[#413C36] mb-6">
            Let's Create Something Amazing
          </h2>

          {/* Body Text - 16px */}
          <p className="font-josefin-sans text-[16px] leading-normal text-[#413C36] max-w-md">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life through thoughtful design.
          </p>
        </div>
      </div>
    );
  };
  
  export default Slide6;
  