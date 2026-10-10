import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Code, 
  Award, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Connect & Collaborate</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Get In <span className="text-[#FF5C28]">Touch</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Interested in discussing opportunities, engineering projects, or technical collaborations? Feel free to reach out directly.
          </p>
        </div>

        {/* Clean Contact Hub (Send a Message form removed per instruction) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          
          {/* Primary Email Card */}
          <div className="alex-card p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-black text-white">
                  <Mail className="w-6 h-6 text-[#FF5C28]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111111]">Direct Email Contact</h3>
                  <p className="text-xs text-slate-500 font-medium">Direct communication channel</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EBEBE8] border border-black/5 flex items-center justify-between gap-2">
                <span className="text-sm font-mono font-bold text-slate-900 truncate">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-black/5 transition-colors shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-[#FF5C28]" />
                <span>{profile.location}</span>
                <span className="mx-1.5">•</span>
                <GraduationCap className="w-4 h-4 text-[#FF5C28]" />
                <span>SRM University</span>
              </div>
            </div>

            <a
              href={profile.links.emailMailto}
              className="w-full py-4 px-6 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Mail className="w-4 h-4 text-[#FF5C28]" />
              <span>Open Email App ({profile.email})</span>
            </a>
          </div>

          {/* All Profile Links Bar */}
          <div className="alex-card p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF5C28]" />
                <span>Profiles & Coding Platforms</span>
              </h3>

              <div className="space-y-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EBEBE8] border border-black/5 hover:border-black/20 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-5 h-5 text-slate-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">GitHub</div>
                      <div className="text-[11px] text-slate-500">@Shek9949</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-black" />
                </a>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EBEBE8] border border-black/5 hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">LinkedIn</div>
                      <div className="text-[11px] text-slate-500">Abhishek Asundi</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </a>

                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EBEBE8] border border-black/5 hover:border-amber-300 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">LeetCode</div>
                      <div className="text-[11px] text-slate-500">@abhishek939</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                </a>

                <a
                  href={profile.links.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EBEBE8] border border-black/5 hover:border-amber-400 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">CodeChef</div>
                      <div className="text-[11px] text-slate-500">@army_elf_53</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-700" />
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 font-mono text-center">
              Available for entry-level Software Engineering & Developer roles
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
