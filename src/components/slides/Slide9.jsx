import LeftNavbar from '../LeftNavbar';

const Slide9 = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-top bg-cover bg-center bg-no-repeat" 
           style={{
          backgroundImage: 'url(/sl5.png)'
        }}>
      <LeftNavbar text="Causa" lightText="Living" bgColor="#d6d0c7" />
    </div>
  );
};

export default Slide9;
