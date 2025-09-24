const ProductFooter = ({ bgColor = "#F2EDE7" }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="w-full">
      {/* Top sections */}
      <div className="px-5 py-16 flex gap-8">
        {/* CausaEfeito section */}
        <div className="w-[300px]">
          <h3 className="font-josefin-sans font-bold text-[28px] mb-6" style={{ color: '#413C36' }}>
            CausaEfeito
          </h3>
          
          {/* Contacts */}
          <div className="mb-6">
            <div className="font-josefin-sans text-[14px] mb-2" style={{ color: '#413C36' }}>
              +351 234 567 890
            </div>
            <div className="font-josefin-sans text-[14px]" style={{ color: '#413C36' }}>
              info@causaefeito.pt
            </div>
          </div>
          
          {/* Address */}
          <div>
            <div className="font-josefin-sans text-[14px] mb-1" style={{ color: '#413C36' }}>
              Rua da Arquitectura, 123
            </div>
            <div className="font-josefin-sans text-[14px] mb-1" style={{ color: '#413C36' }}>
              4000-000 Porto
            </div>
            <div className="font-josefin-sans text-[14px]" style={{ color: '#413C36' }}>
              Portugal
            </div>
          </div>
        </div>
        
        {/* Causa Living section */}
        <div className="w-[300px]">
          <h3 className="font-josefin-sans font-bold text-[28px] mb-6" style={{ color: '#413C36' }}>
            Causa Living
          </h3>
          
          {/* Contacts */}
          <div className="mb-6">
            <div className="font-josefin-sans text-[14px] mb-2" style={{ color: '#413C36' }}>
              +351 234 567 891
            </div>
            <div className="font-josefin-sans text-[14px]" style={{ color: '#413C36' }}>
              living@causaefeito.pt
            </div>
          </div>
          
          {/* Address */}
          <div>
            <div className="font-josefin-sans text-[14px] mb-1" style={{ color: '#413C36' }}>
              Rua do Design, 456
            </div>
            <div className="font-josefin-sans text-[14px] mb-1" style={{ color: '#413C36' }}>
              4000-000 Porto
            </div>
            <div className="font-josefin-sans text-[14px]" style={{ color: '#413C36' }}>
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
          <a href="#" className="font-josefin-sans text-[14px] hover:underline" style={{ color: '#413C36' }}>
            Instagram
          </a>
          <a href="#" className="font-josefin-sans text-[14px] hover:underline" style={{ color: '#413C36' }}>
            Facebook
          </a>
        </div>
        
        {/* Project enquiries */}
        <div>
          <a href="#" className="font-josefin-sans text-[14px] hover:underline" style={{ color: '#413C36' }}>
            Project Enquiries
          </a>
        </div>
        
        {/* Privacy policy */}
        <div>
          <a href="#" className="font-josefin-sans text-[14px] hover:underline" style={{ color: '#413C36' }}>
            Política de Privacidade
          </a>
        </div>
      </div>
      
      {/* Final dividing line */}
      <div className="mx-5 h-px bg-black"></div>
      
      {/* Rights reserved - right aligned */}
      <div className="px-5 py-6 text-right">
        <div className="font-josefin-sans text-[12px]" style={{ color: '#413C36' }}>
          © 2024 CausaEfeito. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
