const Slide4 = () => {
    return (
      <div 
        className="w-full h-screen flex flex-col justify-around items-start text-left px-6 md:px-8 text-white bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: 'url(/sl4.png)'
        }}
      >
          <h1 className="font-josefin-sans uppercase text-[100px] mb-8 leading-tight ml-[-25px] font-light">
            Living
          </h1>
          
          <p className="font-josefin-sans md:text-[18px] leading-tight font-light uppercase">
            Interior Design <br></br>Studio
          </p>
          
          <div className="mt-12 text-sm opacity-80">
          <p className="font-kinta text-[46px] leading-tight">
          Da sua Causa Nasce o Nosso Design        </p>        </div>
      </div>
    );
  };
  
  export default Slide4;
  