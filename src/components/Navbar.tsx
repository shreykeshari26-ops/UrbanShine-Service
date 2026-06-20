import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData, type ServiceCategory } from '../lib/services';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const categories: ServiceCategory[] = [
    'Commercial Services',
    'Domestic Services',
    'Specialized Pressure Services'
  ];

  const handleDropdownEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const toggleMobileAccordion = (category: string) => {
    setActiveMobileAccordion(prev => prev === category ? null : category);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-white/80 backdrop-blur-sm py-4 md:bg-transparent md:backdrop-blur-none md:border-transparent md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" ref={dropdownRef}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50 relative">
            <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:bg-primary-700 transition-colors shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight">
              UrbanShine
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            <Link to="/#home" className="text-slate-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
              Home
            </Link>
            
            {/* Dropdowns */}
            {categories.map((category) => (
              <div 
                key={category} 
                className="relative"
                onMouseEnter={() => handleDropdownEnter(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={cn(
                    "flex items-center gap-1 text-slate-600 hover:text-primary-600 font-semibold px-3 py-6 -my-4 transition-colors",
                    activeDropdown === category && "text-primary-600"
                  )}
                >
                  {category.split(' ')[0]}
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === category && "rotate-180")} />
                </button>
                
                {/* Dropdown Panel */}
                {activeDropdown === category && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white shadow-xl rounded-2xl border border-slate-100 py-4 mt-2 animate-fade-in origin-top">
                    <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" /> {/* Hover bridge */}
                    <div className="px-6 pb-2 mb-2 border-b border-slate-50">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{category}</h4>
                    </div>
                    <ul className="flex flex-col">
                      {servicesData.filter(s => s.category === category).map(service => (
                        <li key={service.id}>
                          <Link 
                            to={`/services/${service.id}`}
                            className="block px-6 py-3 hover:bg-slate-50 transition-colors text-slate-700 hover:text-primary-600 font-medium text-sm group"
                          >
                            <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                              {service.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <Link to="/#pricing" className="text-slate-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
              Pricing
            </Link>
            
            <Link 
              to="/#contact"
              className="ml-4 bg-slate-900 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg border border-transparent hover:border-primary-500/30"
            >
              Get Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 hover:text-primary-600 p-2 z-50 relative bg-white/50 rounded-lg backdrop-blur-sm border border-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Accordion Drawer */}
      <div className={cn(
        "fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto border-t border-slate-100",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="px-6 py-8 flex flex-col gap-2 min-h-full pb-32">
          <Link to="/" className="text-xl font-bold text-slate-800 py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          
          {categories.map((category) => (
            <div key={category} className="border-b border-slate-100">
              <button 
                onClick={() => toggleMobileAccordion(category)}
                className="w-full flex items-center justify-between text-xl font-bold text-slate-800 py-4"
              >
                {category}
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-300 text-slate-400", activeMobileAccordion === category && "rotate-180 text-primary-600")} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                activeMobileAccordion === category ? "max-h-[800px] opacity-100 pb-4" : "max-h-0 opacity-0"
              )}>
                <ul className="flex flex-col gap-2 pl-4 border-l-2 border-primary-100 mt-2">
                  {servicesData.filter(s => s.category === category).map(service => (
                    <li key={service.id}>
                      <Link 
                        to={`/services/${service.id}`}
                        className="block py-2 text-slate-600 hover:text-primary-600 font-medium"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <Link to="/#pricing" className="text-xl font-bold text-slate-800 py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/#about" className="text-xl font-bold text-slate-800 py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>

          <div className="mt-8">
            <Link 
              to="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

