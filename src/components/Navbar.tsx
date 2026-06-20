import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData, type ServiceCategory } from '../lib/services';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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
        setIsServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const categories: ServiceCategory[] = [
    'Commercial Services',
    'Residential Services',
    'Specialized Pressure Services'
  ];

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
            
            {/* Single Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                className={cn(
                  "flex items-center gap-1 text-slate-600 hover:text-primary-600 font-semibold px-3 py-6 -my-4 transition-colors",
                  isServicesDropdownOpen && "text-primary-600"
                )}
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isServicesDropdownOpen && "rotate-180")} />
              </button>
              
              {/* Dropdown Panel - Mega Menu Style */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-xl rounded-2xl border border-slate-100 py-6 px-8 mt-2 animate-fade-in origin-top flex gap-8">
                  <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" /> {/* Hover bridge */}
                  
                  {categories.map((category) => (
                    <div key={category} className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 uppercase tracking-wider">{category.split(' ')[0]}</h4>
                      <ul className="flex flex-col gap-1">
                        {servicesData.filter(s => s.category === category).map(service => (
                          <li key={service.id}>
                            <Link 
                              to={`/services/${service.id}`}
                              className="group flex items-start gap-2 py-2 text-slate-600 hover:text-primary-600 font-medium text-sm transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-primary-500 flex-shrink-0" />
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {service.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/#pricing" className="text-slate-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
              Pricing
            </Link>
            <Link to="/#about" className="text-slate-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
              About
            </Link>
            <Link to="/#contact" className="text-slate-600 hover:text-primary-600 font-semibold px-3 py-2 transition-colors">
              Contact Us
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
        "absolute top-full left-0 right-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden border-t border-slate-100 overflow-hidden shadow-lg",
        isMobileMenuOpen ? "max-h-[calc(100vh-70px)] opacity-100 border-b" : "max-h-0 opacity-0 border-transparent"
      )}>
        <div className="px-6 py-6 flex flex-col gap-1 max-h-[calc(100vh-70px)] overflow-y-auto pb-24">
          <Link to="/" className="text-xl font-bold text-slate-800 py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          
          <div className="border-b border-slate-100 py-2">
            <span className="text-xl font-bold text-slate-800 py-2 block">Services</span>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {categories.map((category) => (
                <div key={category} className="bg-slate-50 rounded-xl overflow-hidden mb-2">
                  <button 
                    onClick={() => toggleMobileAccordion(category)}
                    className="w-full flex items-center justify-between font-bold text-slate-700 p-4"
                  >
                    {category}
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300 text-slate-400", activeMobileAccordion === category && "rotate-180 text-primary-600")} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out bg-white",
                    activeMobileAccordion === category ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <ul className="flex flex-col border-l-2 border-primary-100 ml-4 mb-4 mt-1">
                      {servicesData.filter(s => s.category === category).map(service => (
                        <li key={service.id}>
                          <Link 
                            to={`/services/${service.id}`}
                            className="block py-2.5 px-4 text-slate-600 hover:text-primary-600 font-medium text-sm"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

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


