import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F5F5F3]/90 backdrop-blur-md py-4 border-b border-black/[0.04]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Template Header Brand: Geometric Delta + Email Pill */}
          <div className="flex items-center space-x-3">
            {/* Black Geometric Triangle Delta Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Home"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 3L2 21H22L12 3ZM12 7.5L18.2 18.5H5.8L12 7.5Z" />
              </svg>
            </button>
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            
            {/* Email Address Link Pill matching Alex Carter header */}
            <a
              href={portfolioData.profile.links.emailMailto}
              className="text-xs font-semibold text-slate-800 hover:text-[#FF5C28] underline underline-offset-4 font-mono transition-colors hidden sm:inline-block"
            >
              {portfolioData.profile.email}
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-white p-1.5 rounded-full border border-black/[0.06] shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-slate-600 hover:text-black hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Floating Circle Menu / Social Button matching Template */}
          <div className="flex items-center space-x-2">
            <a
              href={portfolioData.profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-10 h-10 bg-white rounded-full items-center justify-center border border-black/[0.06] shadow-sm hover:bg-slate-100 transition-colors text-slate-800"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-10 h-10 bg-white rounded-full items-center justify-center border border-black/[0.06] shadow-sm hover:bg-slate-100 transition-colors text-blue-600"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center border border-black/[0.06] shadow-sm hover:bg-slate-100 transition-colors text-slate-900"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-black/[0.06] px-4 pt-4 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-black text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
              <a
                href={portfolioData.profile.links.emailMailto}
                className="text-xs font-mono text-slate-800 underline"
              >
                {portfolioData.profile.email}
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="text-xs font-semibold px-4 py-2 rounded-full bg-black text-white"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
