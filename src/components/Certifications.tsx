import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Verified Credentials</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Certifications & <span className="text-[#FF5C28]">Credentials</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Professional & academic certifications verifying domain expertise in SAP, Java, Cloud AI, Systems, and Python.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="alex-card p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Status */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-[#FF5C28]/10 text-[#FF5C28]">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.isUrlVerified && cert.credentialUrl ? (
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Google Drive PDF</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-black/5 text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Pending Link</span>
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF5C28] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5C28] mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                    {cert.year && <span className="text-slate-400 font-normal">• {cert.year}</span>}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                {cert.isUrlVerified && cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-black hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-all"
                  >
                    <span>View Certificate PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full py-3 px-4 rounded-full bg-slate-100 border border-black/5 text-slate-500 text-xs text-center font-medium">
                    Available Upon Request
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
