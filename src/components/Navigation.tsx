import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed z-50 top-0 left-0 right-0 md:flex md:items-start md:justify-center md:transition-[padding-top] md:duration-1000 md:ease-in-out ${
      isScrolled 
        ? 'md:pt-4' 
        : 'md:pt-0'
    }`}>
      <nav
        className={`bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-sm md:transition-[border-radius,width,max-width,box-shadow,background-color] md:duration-1000 md:ease-in-out ${
          isScrolled
            ? 'md:rounded-full md:shadow-lg md:border md:border-white/30 md:w-auto md:max-w-[800px] md:bg-white/40'
            : 'w-full md:max-w-full md:rounded-none md:shadow-sm md:bg-white/30'
        }`}
      >
        <div className={`md:transition-[padding,max-width,margin] md:duration-1000 md:ease-in-out ${
          isScrolled 
            ? 'md:px-4 md:max-w-none md:mx-0' 
            : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        }`}>
          <div className={`flex md:transition-[height,justify-content,align-items] md:duration-1000 md:ease-in-out ${
            isScrolled 
              ? 'md:h-12 md:justify-center md:items-center' 
              : 'h-16 md:h-16 justify-between items-center'
          }`}>
          {/* Name - Hidden when scrolled on desktop */}
          <div className={`flex-shrink-0 md:transition-[opacity,max-width,width] md:duration-1000 md:ease-in-out ${
            isScrolled 
              ? 'md:hidden md:opacity-0 md:max-w-0 md:w-0 md:overflow-hidden' 
              : 'md:opacity-100 md:max-w-full md:w-auto md:block'
          }`}>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-3xl font-bold text-slate-800 font-comic-neue cursor-pointer hover:text-slate-600 transition-colors duration-200"
            >
              Bharani Kudala
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-baseline md:transition-[gap,margin-left] md:duration-1000 md:ease-in-out ${
              isScrolled 
                ? 'space-x-2 md:ml-0 md:gap-2' 
                : 'space-x-4 ml-10 md:ml-10 md:gap-4'
            }`}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-all duration-200 flex items-center gap-2 ${
                      isScrolled 
                        ? 'px-2 py-1.5 text-xs rounded-full' 
                        : 'px-3 py-2 text-sm rounded-md'
                    } ${
                      activeSection === item.id
                        ? `bg-slate-900 text-white ${isScrolled ? 'rounded-full' : 'rounded-md'}`
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={isScrolled ? 14 : 16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/30 backdrop-blur-xl border-t border-white/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navigation;