import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Download, 
  ExternalLink,
  Code,
  GraduationCap,
  Award,
  Mail
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 relative bg-[#F5F5F3] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Hero Typographic Banner */}
        <div className="max-w-5xl mx-auto text-left space-y-6">
          
          {/* Main Headline with Mixed Typographic Weights & Avatar Frame */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.18]">
            <span>Hi, I'm </span>
            
            {/* Developer Avatar Badge Frame with light border */}
            <span className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2">
              <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-black text-white flex items-center justify-center shadow-md overflow-hidden border-2 border-white ring-2 ring-black/10 transform hover:scale-105 transition-transform">
                <span className="font-mono text-base sm:text-lg font-bold text-[#FF5C28]">AA</span>
              </span>
            </span>

            <span>Abhishek Asundi!</span>
            <br />
            <span className="text-slate-400 font-light">I'm a </span>
            <span className="font-extrabold text-[#111111]">Student </span>
            <span className="text-slate-400 font-light">at</span>
            <br />
            <span className="text-[#FF5C28] font-extrabold">SRM University.</span>
            
            {/* Status Pill Badge: Open to opportunities */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 ml-3 sm:ml-4 rounded-full bg-white border border-black/10 text-xs font-semibold text-slate-800 shadow-sm align-middle tracking-normal">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-normal text-slate-800 font-semibold whitespace-nowrap">
                Open to opportunities
              </span>
            </span>
          </h1>

          {/* Action Row: Direct Resume Button + Contact Me */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
            
            <div className="flex items-center space-x-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2"
              >
                <Download className="w-4 h-4 text-[#FF5C28]" />
                <span>View Official Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-black/10 font-bold text-sm shadow-sm transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Contact Me</span>
              </button>
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-md font-medium leading-snug">
              Feel free to explore my portfolio and reach out — I'd love to connect!
            </p>
          </div>

          {/* Quick Links Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-800 font-semibold shadow-sm hover:border-black/30 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-800 font-semibold shadow-sm hover:border-blue-300 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-800 font-semibold shadow-sm hover:border-amber-300 transition-all"
            >
              <Code className="w-3.5 h-3.5 text-amber-500" />
              <span>LeetCode</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={profile.links.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-slate-800 font-semibold shadow-sm hover:border-amber-400 transition-all"
            >
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>CodeChef</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>

        {/* 3 Bento Cards Row matching Alex Carter Template Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          {/* Card 1: My Experience / Target Roles (Timeline Widget) */}
          <div className="alex-card p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-5">
              <span className="alex-pill inline-block">Target Roles</span>
              
              {/* Timeline List */}
              <div className="space-y-4 pt-1">
                
                <div className="flex items-start space-x-3 text-xs">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Software Engineer</div>
                    <div className="text-slate-500">Target Role • Entry Level</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Backend Developer</div>
                    <div className="text-slate-500">Java, Spring Boot, MySQL</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Full-Stack Developer</div>
                    <div className="text-slate-500">TypeScript, HTML/CSS, JS</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs opacity-70">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Programmer Analyst</div>
                    <div className="text-slate-500">DSA & OOP Specialist</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>B.Tech CSE Student</span>
              <span className="text-[#FF5C28] font-sans font-semibold">SRM University</span>
            </div>
          </div>

          {/* Card 2: Technical Stack & Capabilities (Visual Stack Widget - using light shade of grey) */}
          <div className="alex-card p-6 flex flex-col justify-between relative overflow-hidden bg-white">
            <div className="space-y-5">
              <span className="alex-pill inline-block">Technical Stack</span>
              
              {/* Clean light grey widget container */}
              <div className="p-4 rounded-2xl bg-[#EBEBE8] border border-black/5 text-slate-900 space-y-2 shadow-inner font-mono text-xs">
                <div className="flex items-center justify-between text-slate-600 text-[10px]">
                  <span>Core Languages</span>
                  <span className="text-[#FF5C28] font-bold">Verified</span>
                </div>
                <div className="text-slate-900 font-bold text-sm">Java • C++ • Python</div>
                <div className="text-slate-600 text-[11px] pt-1">Spring Boot • MySQL • OOP • DSA</div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Java', 'Spring Boot', 'MySQL', 'C++', 'Python', 'JavaScript'].map((s, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-[#EBEBE8] border border-black/5 text-[11px] font-semibold text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={() => scrollTo('skills')}
              className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#FF5C28] transition-colors"
            >
              <span>Explore All Technical Skills</span>
              <ExternalLink className="w-4 h-4 text-[#FF5C28]" />
            </button>
          </div>

          {/* Card 3: Academic Profile Card */}
          <div className="alex-card p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <span className="alex-pill inline-block">Academic Profile</span>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">B.Tech Computer Science</h3>
                <p className="text-xs text-slate-500 font-medium">SRM University • Chennai, India</p>
              </div>

              {/* Cover Widget */}
              <div className="p-4 rounded-2xl bg-[#FF5C28] text-white space-y-2 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/80 tracking-wider">Cumulative Grade</div>
                  <div className="text-3xl font-extrabold font-mono text-white">8.9 / 10</div>
                  <div className="text-[11px] text-white/90">First Class with Distinction</div>
                </div>
                <GraduationCap className="w-10 h-10 text-white/90 shrink-0" />
              </div>
            </div>

            <button 
              onClick={() => scrollTo('education')}
              className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 hover:text-[#FF5C28] transition-colors"
            >
              <span>View Coursework Details</span>
              <ExternalLink className="w-4 h-4 text-[#FF5C28]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
