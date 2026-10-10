import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  Database,
  Brain,
  Layers
} from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const keyFocusAreas = [
    {
      icon: <Code className="w-5 h-5 text-[#FF5C28]" />,
      title: "Backend & Systems",
      desc: "Architecting backend applications with Java, Spring Boot, Spring Security, and modular REST services."
    },
    {
      icon: <Database className="w-5 h-5 text-slate-800" />,
      title: "Databases & Management",
      desc: "Designing relational database schemas, optimizing complex SQL queries, and utilizing MySQL Workbench."
    },
    {
      icon: <Layers className="w-5 h-5 text-slate-800" />,
      title: "CS Core Fundamentals",
      desc: "Solid grounding in Data Structures, Algorithms, Object-Oriented Programming, and Computer Networks."
    },
    {
      icon: <Brain className="w-5 h-5 text-[#FF5C28]" />,
      title: "AI & Signal Classification",
      desc: "Applied machine learning for multimodal wearable signal classification, physiological feature engineering, and predictive modeling."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Personal Background</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            About <span className="text-[#FF5C28]">Me</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Computer Science and Engineering student at SRM University, dedicated to building reliable software systems and solving real-world engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="alex-card p-8 space-y-6">
              
              <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6 text-[#FF5C28]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111111]">Academic Foundation</h3>
                  <p className="text-xs text-slate-500 font-medium">SRM University • B.Tech in CSE (CGPA: {profile.cgpa})</p>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                {profile.summary}
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                {profile.aboutLong}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#FF5C28]" />
                  <span>Target Engineering Roles:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.targetRoles.map((role, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-black/5 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C28]" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Micro Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="alex-card p-4 text-center">
                <div className="text-3xl font-extrabold text-[#FF5C28] font-mono">8.9</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">CGPA / 10</div>
              </div>
              <div className="alex-card p-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900 font-mono">B.Tech</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">CSE Degree</div>
              </div>
              <div className="alex-card p-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900 font-mono">3+</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Core Languages</div>
              </div>
              <div className="alex-card p-4 text-center">
                <div className="text-3xl font-extrabold text-[#FF5C28] font-mono">6+</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Certifications</div>
              </div>
            </div>

          </div>

          {/* Right Column Focus Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF5C28]" />
              <span>Core Engineering Focus</span>
            </h3>

            {keyFocusAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="alex-card p-5 space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-black/5">
                    {area.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{area.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
