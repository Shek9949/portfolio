import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Academic Background</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Education & <span className="text-[#FF5C28]">Academics</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Undergraduate computer science degree foundation at SRM University.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="alex-card p-8 sm:p-10 space-y-8 relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Left Logo / University Info */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-[#FF5C28]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#111111]">{education.degree}</h3>
                    <p className="text-lg font-bold text-[#FF5C28]">{education.university}</p>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5C28]" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed pt-2">
                  Enrolled in the flagship Computer Science and Engineering undergraduate program at SRM University, focusing on core software engineering principles, algorithm design, database optimization, and modern application development.
                </p>
              </div>

              {/* Right CGPA Score Highlight Badge matching Alex Carter Cover widget */}
              <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
                <div className="p-6 rounded-3xl bg-[#FF5C28] text-white text-center w-full max-w-[220px] shadow-md">
                  <span className="text-xs uppercase tracking-wider font-bold text-white/80 block mb-1">
                    Cumulative CGPA
                  </span>
                  <div className="text-4xl font-extrabold font-mono text-white">
                    {education.cgpa}
                  </div>
                  <span className="text-[11px] text-white/90 font-medium block mt-1">
                    Out of 10.0 Scale
                  </span>
                </div>
              </div>

            </div>

            {/* Core Coursework */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#FF5C28]" />
                <span>Key Computer Science Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coreSubjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full bg-slate-100 border border-black/5 text-xs font-semibold text-slate-800"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Academic Highlights */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Academic Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C28] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
