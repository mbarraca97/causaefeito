const RightNavbar = ({ bgColor = "#F2EDE7", onMenuClick }) => {
  return (
    <div className="h-[60px] w-full text-right items-end flex flex-row items-center justify-end pr-8" style={{ backgroundColor: bgColor }}>
      <button 
        onClick={onMenuClick}
        className="hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img src="/menu.png" alt="menu" className="w-[28px] h-[18px]" />
      </button>
    </div>
  );
};

export default RightNavbar;
