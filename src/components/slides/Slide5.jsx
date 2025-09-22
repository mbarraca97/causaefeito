import LeftNavbar from '../LeftNavbar';

const Slide5 = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-top bg-cover bg-center bg-no-repeat" 
           style={{
          backgroundImage: 'url(/sl5.png)'
        }}>
      <LeftNavbar text="Causa" lightText="Efeito" />
    </div>
  );
};

export default Slide5;
