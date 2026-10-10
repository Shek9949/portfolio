import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, UserCheck, CheckCircle, ExternalLink, Code } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Competitive Experience</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Hackathons & <span className="text-[#FF5C28]">Activities</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Participations in engineering hackathons and software challenge sprints.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="alex-card p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2.5 rounded-2xl bg-black text-white">
                      <Trophy className="w-5 h-5 text-[#FF5C28]" />
                    </div>
                    <span className="text-xs font-mono text-slate-900 bg-slate-100 px-3 py-1 rounded-full font-bold">
                      Hackathon {hack.year}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{hack.results}</span>
                  </span>
                </div>

                {/* Event Name & Role */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#111111] mb-1">
                    {hack.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-600 font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#FF5C28]" />
                    <span>Role: <strong className="text-slate-900">{hack.role}</strong></span>
                  </div>
                </div>

                {/* Project Name Field */}
                {hack.projectName && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-black/5 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Code className="w-3 h-3 text-[#FF5C28]" />
                      Hackathon Project Title
                    </span>
                    <p className="text-xs font-mono text-slate-900 font-bold">
                      {hack.projectName}
                    </p>
                  </div>
                )}

                {/* Details */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {hack.details}
                </p>

              </div>

              {/* Verified Credential Link Action */}
              <div className="pt-4 border-t border-slate-100">
                {hack.credentialUrl ? (
                  <a
                    href={hack.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-black hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-all"
                  >
                    <span>View Hackathon Credential (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-[11px] text-slate-400 font-mono text-center">
                    Verified Participation
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
