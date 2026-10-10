import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, AlertCircle, Activity, FileCode } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="alex-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <span className="alex-pill inline-block uppercase">{project.type} PROJECT</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">{project.title}</h3>
          <p className="text-sm text-[#FF5C28] font-mono font-bold">{project.subtitle}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.isRepoVerified && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-md transition-all"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : (
            <div className="px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Repository URL Pending Public Verification</span>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Overview</h4>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem Statement */}
        {project.problemStatement && (
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-black/5">
            <h4 className="text-xs font-bold text-[#FF5C28] uppercase tracking-wider">Problem Addressed</h4>
            <p className="text-slate-800 text-xs sm:text-sm font-medium">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Implemented Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Implemented Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.implementedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-slate-50 border border-black/5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5C28] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-slate-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SCADA Telemetry Specific Dashboard Section */}
        {project.scadaMetrics && (
          <div className="space-y-3 p-5 rounded-2xl bg-black text-white shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FF5C28] uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FF5C28]" />
                SCADA Sensor Telemetry Dashboard
              </span>
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Baseline Normal
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.scadaMetrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                  <div className="text-base font-extrabold text-white font-mono mt-1">{m.value}</div>
                  <div className="text-[10px] text-emerald-400 capitalize mt-0.5">{m.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <FileCode className="w-4 h-4 text-[#FF5C28]" />
            <span>Technologies & Libraries Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-100 border border-black/5 text-xs font-mono text-slate-800 font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
