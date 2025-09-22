const LeftNavbar = ({ text = "Causa", lightText = "Living", bgColor = "#F2EDE7" }) => {
  return (
    <div className="h-[60px] w-full text-left flex flex-row items-center pl-8" style={{ backgroundColor: bgColor }}>
      <p className="font-josefin-sans text-[#413C36] text-[28px] uppercase">
        {text}
      </p>
      <p className="font-josefin-sans text-[#413C36] font-light text-[28px] uppercase ml-2">
        {lightText}
      </p>
    </div>
  );
};

export default LeftNavbar;
