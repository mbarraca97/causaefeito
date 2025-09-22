const RightNavbar = ({ bgColor = "#F2EDE7" }) => {
  return (
    <div className="h-[60px] w-full text-right items-end flex flex-row items-center justify-end pr-8" style={{ backgroundColor: bgColor }}>
      <img src="/menu.png" alt="logo" className="w-[28px] h-[18px]" />
    </div>
  );
};

export default RightNavbar;
