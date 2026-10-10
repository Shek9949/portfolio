import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Activity, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowUpRight,
  Database
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredProjects = projects.filter(p => {
    if (filterType === 'all') return true;
    return p.type === filterType;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Engineering Showcase</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Featured <span className="text-[#FF5C28]">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Practical software applications, database implementations, and SCADA telemetry research.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'full-stack', label: 'Full-Stack & Web' },
            { id: 'backend', label: 'Backend & Systems' },
            { id: 'dashboard', label: 'SCADA Research Dashboard' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filterType === tab.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-black border border-black/5 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isScada = project.type === 'dashboard';

            return (
              <div
                key={project.id}
                className="alex-card flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  
                  {/* Visual Header Banner */}
                  {isScada ? (
                    <div className="p-5 bg-black text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-[#FF5C28] animate-pulse" />
                          <span className="text-xs font-mono font-bold text-[#FF5C28]">SCADA Telemetry Active</span>
                        </div>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
                          Research Model
                        </span>
                      </div>
                      
                      {/* Telemetry Baseline Widgets */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Rotor Velocity</div>
                          <div className="text-sm font-bold font-mono text-white">14.8 RPM</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Anomaly Index</div>
                          <div className="text-sm font-bold font-mono text-[#FF5C28]">0.024 RMS</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {project.type === 'full-stack' ? (
                          <Layers className="w-5 h-5 text-[#FF5C28]" />
                        ) : (
                          <Database className="w-5 h-5 text-slate-800" />
                        )}
                        <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                          {project.type}
                        </span>
                      </div>
                      {project.isRepoVerified ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Verified Repo
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          Pending Link
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111111] group-hover:text-[#FF5C28] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#FF5C28] font-semibold mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features List Brief */}
                    <div className="space-y-1.5 pt-1">
                      {project.implementedFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C28] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full bg-slate-100 border border-black/5 text-[11px] font-mono text-slate-700 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5C28]" />
                  </button>

                  {project.isRepoVerified && project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-full bg-black hover:bg-slate-800 text-xs font-bold text-white flex items-center space-x-1.5 shadow-sm transition-all"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4 text-white" />
                      <span>Repo</span>
                    </a>
                  ) : (
                    <div 
                      className="py-2.5 px-3 rounded-full bg-slate-50 border border-amber-200 text-[11px] text-amber-700 flex items-center space-x-1"
                      title="Repository URL pending verification"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Pending Repo</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Popover */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
