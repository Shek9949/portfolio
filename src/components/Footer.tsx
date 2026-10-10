import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/[0.06] py-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 3L2 21H22L12 3ZM12 7.5L18.2 18.5H5.8L12 7.5Z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-extrabold text-[#111111] block">
                {portfolioData.profile.name}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                SRM University • B.Tech CSE (CGPA 8.9/10)
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-xs text-slate-500 text-center font-medium">
            © {new Date().getFullYear()} Abhishek Asundi. All rights reserved. Designed in Alex Carter Minimalist Style.
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center space-x-3">
            <a
              href={portfolioData.profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-black hover:bg-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-blue-600 hover:bg-slate-200 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
            </a>
            <a
              href={portfolioData.profile.links.emailMailto}
              className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-[#FF5C28] hover:bg-slate-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-black text-white hover:bg-slate-800 transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
