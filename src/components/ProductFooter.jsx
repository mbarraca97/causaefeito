const ProductFooter = ({ bgColor = "#F2EDE7" }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="w-full">
      {/* Top sections */}
      <div className="px-5 py-16 flex gap-8">
        {/* CausaEfeito section */}
        <div className="w-[300px]">
          <div className="flex flex-row">
          <h3 className="font-josefin-sans font-bold text-[28px] mb-6 uppercase" style={{ color: '#413C36' }}>
            Causa
          </h3>
          <h3 className="font-josefin-sans text-[28px] mb-4 uppercase" style={{ color: '#413C36' }}>
            Efeito
          </h3>
          </div>
          
          {/* Contacts */}
          <div className="mb-6">
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              +351 22 339 4650
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              geral@causaefeitodecoracao.pt
            </div>
          </div>
          
          {/* Address */}
          <div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              R. de Mouzinho da Silveira 35
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              4050-419 Porto
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              Portugal
            </div>
          </div>
        </div>
        
        {/* Causa Living section */}
        <div className="w-[300px]">
          <div className="flex flex-row">
          <h3 className="font-josefin-sans font-bold text-[28px] mb-6 uppercase" style={{ color: '#413C36' }}>
            Causa
          </h3>
          <h3 className="font-josefin-sans text-[28px] mb-6 uppercase" style={{ color: '#413C36' }}>
            living
          </h3>
          </div>
          
          
          {/* Contacts */}
          <div className="mb-4">
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              +351 917 085 121
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              geral@causaefeitodecoracao.pt
            </div>
          </div>
          
          {/* Address */}
          <div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              R. de Mouzinho da Silveira 43
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              4050-419 Porto
            </div>
            <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
              Portugal
            </div>
          </div>
        </div>
      </div>
      
      {/* Dividing line */}
      <div className="mx-5 h-px bg-black"></div>
      
      {/* Middle section with 3 justified areas */}
      <div className="px-5 py-8 flex justify-between items-center">
        {/* Social media links */}
        <div className="flex space-x-6">
          <a href="#" className="font-josefin-sans text-[18px] hover:underline" style={{ color: '#413C36' }}>
            Instagram
          </a>
          <a href="#" className="font-josefin-sans text-[18px] hover:underline" style={{ color: '#413C36' }}>
            Facebook
          </a>
        </div>
        
        {/* Project enquiries */}
        <div>
          <a href="#" className="font-josefin-sans text-[18px] hover:underline" style={{ color: '#413C36' }}>
            Project Enquiries
          </a>
        </div>
        
        {/* Privacy policy */}
        <div>
          <a href="#" className="font-josefin-sans text-[18px] hover:underline" style={{ color: '#413C36' }}>
            Política de Privacidade
          </a>
        </div>
      </div>
      
      {/* Final dividing line */}
      <div className="mx-5 h-px bg-black"></div>
      
      {/* Rights reserved - right aligned */}
      <div className="px-5 py-6 text-right">
        <div className="font-josefin-sans text-[16px]" style={{ color: '#413C36' }}>
          © 2024 CausaEfeito. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
