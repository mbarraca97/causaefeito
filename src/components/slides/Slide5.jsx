const Slide5 = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-top bg-cover bg-center bg-no-repeat" 
           style={{
          backgroundImage: 'url(/sl5.png)'
        }}>
      <div className="h-[75px] bg-[#F2EDE7] w-full text-left flex flex-row items-center pl-8">
        <p className="font-josefin-sans  text-[#413C36] text-[32px] uppercase">
          Causa
        </p>
        <p className="font-josefin-sans text-[#413C36] font-light text-[32px] uppercase">
          Living
        </p>
      </div>
    </div>
  );
};

export default Slide5;
