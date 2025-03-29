
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Main navigation links (shown on the left side of the header, after toggle button)
  const mainNavLinks = [
    { title: 'PROJECTS', path: '/projects' },
    { title: 'CONTACT US', path: '/contact' },
    { title: 'BLOGS', path: '/media' },
  ];

  // Sidebar menu links (shown when toggle is clicked)
  const sidebarMenuLinks = [
    { number: '01', title: 'HOME', path: '/' },
    { number: '02', title: 'ABOUT REPORTAGE', path: '/about' },
    { number: '03', title: 'PROJECTS', path: '/projects' },
    { number: '04', title: 'COMMUNITIES', path: '/communities' },
    { number: '05', title: 'INVESTOR', path: '/investor' },
    { number: '06', title: 'MEDIA CENTER', path: '/media' },
    { number: '07', title: 'CAREERS', path: '/career' },
    { number: '08', title: 'CONTACT US', path: '/contact' },
    { number: '09', title: 'CONSTRUCTION UPDATES', path: '/construction' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md py-2' : 'bg-black py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left section with toggle button and navigation */}
        <div className="flex items-center space-x-6">
          {/* Toggle Button for Sidebar */}
          <button 
            onClick={toggleNavbar} 
            className="relative z-20 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
          
          {/* Left-side navigation - only visible on desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainNavLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link text-sm tracking-wider font-medium transition-colors text-white ${isActive(link.path) ? 'font-bold' : ''}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img 
              src="/lovable-uploads/b4bb67f8-b9c4-4ea3-8a94-b49c11fd1e03.png" 
              alt="Reportage Properties" 
              className="h-12"
            />
          </Link>
        </div>

        {/* Right section with phone and language */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:80077552" className="flex items-center text-white">
            <Phone size={18} className="mr-2" />
            <span>800 77 552</span>
          </a>
          <div className="relative">
            <button className="flex items-center text-white">
              English
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <a 
            href="/contact"
            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors"
          >
            Chat With Us
          </a>
        </div>

        {/* Mobile Menu Button - visible on small screens */}
        <button 
          onClick={toggleNavbar} 
          className="lg:hidden relative z-20 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>

        {/* Full-screen Sidebar Menu - Left side */}
        <div 
          className={`fixed top-0 left-0 h-full w-full bg-gray-900 z-10 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="container mx-auto px-4 py-24 h-full flex flex-col items-center">
            {/* Sidebar Logo - centered */}
            <div className="flex justify-center mb-12">
              <img 
                src="/lovable-uploads/b4bb67f8-b9c4-4ea3-8a94-b49c11fd1e03.png" 
                alt="Reportage Properties" 
                className="h-12"
              />
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 items-center w-full max-w-md">
              {sidebarMenuLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="sidebar-link group w-full text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-500 text-sm mr-4">{link.number}</span>
                    <span className={`text-white text-2xl font-bold transition-colors ${isActive(link.path) ? 'text-yellow-500' : 'group-hover:text-yellow-500'}`}>
                      {link.title}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>
            
            {/* Contact Information - at bottom */}
            <div className="mt-auto pt-12 flex flex-col items-center">
              <a href="tel:80077552" className="flex items-center text-white mb-6">
                <Phone size={18} className="mr-2" />
                <span>800 77 552</span>
              </a>
              <a 
                href="/contact"
                className="block w-full max-w-xs text-center px-4 py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors"
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>

        {/* Overlay for sidebar */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-0"
            onClick={toggleNavbar}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
