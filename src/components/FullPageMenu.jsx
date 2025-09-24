import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FullPageMenu = ({ isOpen, onClose, onSlideNavigate }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [language, setLanguage] = useState('PT');

  const menuItems = [
    { id: 'about', label: 'Sobre nós', image: '/footer-efeito.png' },
    { id: 'projects', label: 'Os nossos Projetos', image: '/footer-living.png' },
    { id: 'living', label: 'Living Collection', image: '/footer-efeito.png' },
    { id: 'team', label: 'A nossa equipa', image: '/footer-living.png' },
    { id: 'contacts', label: 'Contactos', image: '/footer-efeito.png' }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'PT' ? 'EN' : 'PT');
  };

  const handleMenuItemClick = (itemId) => {
    switch (itemId) {
      case 'about':
        // Navigate to slides 5 and 6 (slide indices 4,5 = currentSlide 2)
        if (onSlideNavigate) {
          onSlideNavigate(2); // This will show slides 5,6 on left,right
        } else {
          navigate('/?slide=2');
        }
        break;
      case 'projects':
        // Navigate to slides 7 and 8 (slide indices 6,7 = currentSlide 3)
        if (onSlideNavigate) {
          onSlideNavigate(3); // This will show slides 7,8 on left,right
        } else {
          navigate('/?slide=3');
        }
        break;
      case 'living':
        navigate('/living-collection');
        break;
      case 'contacts':
        // Navigate to footer slides 11 and 12 (slide indices 10,11 = currentSlide 5)
        if (onSlideNavigate) {
          onSlideNavigate(5); // This will show slides 11,12 on left,right
        } else {
          navigate('/?slide=5');
        }
        break;
      default:
        break;
    }
    onClose();
  };

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Section */}
          <motion.div
            className="w-1/2 h-full bg-[#A69E93] relative flex flex-col"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close Button */}
            <div className="absolute top-8 right-8 z-10">
              <button
                onClick={onClose}
                className="text-white text-2xl hover:text-white/80 transition-colors w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col h-full p-8 text-white justify-start">
              {/* Big Title */}
              <div className="mt-12">
                <h1 className="font-josefin-sans text-[80px] leading-tight text-white font-regular uppercase">
                  Causa
                </h1>
                <h1 className="font-josefin-sans text-[80px] leading-tight text-white font-thin uppercase mt-[-20px]">
                  Efeito
                </h1>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col justify-center space-y-0 ">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className="font-josefin-sans font-light uppercase text-[16px] text-white hover:text-white/80 transition-colors block text-left w-full"
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              
              {/* Vertical Line */}
              <div className="w-px h-[200px] bg-white/30"></div>


              {/* Bottom Section with Vertical Line and Language Toggle */}
              <div className="flex items-end justify-between mb-8 mt-8">
                <div className="flex items-center space-x-8">
                  
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="font-josefin-sans text-[18px] text-white hover:text-white/80 transition-colors"
                  >
                    <span className={language === 'PT' ? 'opacity-100' : 'opacity-50'}>PT</span>
                    <span className="mx-2">|</span>
                    <span className={language === 'EN' ? 'opacity-100' : 'opacity-50'}>EN</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-1/2 h-full bg-[#F2EDE7] relative"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Hover Image */}
            <AnimatePresence>
              {hoveredItem && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={hoveredItem.image} 
                    alt={hoveredItem.label}
                    className="w-[300px] h-[400px] object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullPageMenu;
