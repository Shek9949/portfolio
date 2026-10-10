import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Activity, 
  CheckCircle2, 
  ArrowUpRight,
  Cpu,
  Target,
  Server
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

  const getCategoryBadge = (type: string) => {
    switch (type) {
      case 'backend':
        return 'Backend & Systems';
      case 'ml':
        return 'Machine Learning & Signals';
      case 'hpc':
        return 'High-Performance Computing';
      default:
        return 'Engineering Project';
    }
  };

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
            Backend architectures, machine learning physiological signal classification, and high-performance parallel computing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'backend', label: 'Backend & Systems' },
            { id: 'ml', label: 'Machine Learning & Signals' },
            { id: 'hpc', label: 'HPC & Parallel Computing' }
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
            return (
              <div
                key={project.id}
                className="alex-card flex flex-col justify-between overflow-hidden group hover:border-black/15 transition-all"
              >
                <div>
                  
                  {/* Visual Header Banner based on Project Type */}
                  {project.type === 'hpc' ? (
                    <div className="p-5 bg-black text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-[#FF5C28] animate-pulse" />
                          <span className="text-xs font-mono font-bold text-[#FF5C28]">OpenMP Multicore Active</span>
                        </div>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
                          HPC Framework
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Dataset</div>
                          <div className="text-xs font-bold font-mono text-white truncate">Chromosome X Ref</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Parallel Scheduling</div>
                          <div className="text-xs font-bold font-mono text-[#FF5C28] truncate">Wavefront Tiling</div>
                        </div>
                      </div>
                    </div>
                  ) : project.type === 'ml' ? (
                    <div className="p-5 bg-black text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-emerald-400">Multimodal Biosignals</span>
                        </div>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
                          Wearable ML
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Standard Accuracy</div>
                          <div className="text-sm font-bold font-mono text-white">~84%</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Subject-Indep. CV</div>
                          <div className="text-sm font-bold font-mono text-emerald-400">72%</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 bg-slate-900 text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Server className="w-4 h-4 text-[#FF5C28]" />
                          <span className="text-xs font-mono font-bold text-[#FF5C28]">Spring Boot & JWT</span>
                        </div>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
                          Backend Core
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Access Control</div>
                          <div className="text-xs font-bold font-mono text-white truncate">Stateless RBAC</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                          <div className="text-[10px] text-slate-400">Data Architecture</div>
                          <div className="text-xs font-bold font-mono text-[#FF5C28] truncate">Soft Deletes / JPA</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          {getCategoryBadge(project.type)}
                        </span>
                        {project.isRepoVerified ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Verified Repo
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                            Engineering Project
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] group-hover:text-[#FF5C28] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#FF5C28] font-semibold mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Objective Box if present */}
                    {project.objective && (
                      <div className="p-3 rounded-xl bg-[#FF5C28]/5 border border-[#FF5C28]/20 text-xs">
                        <div className="flex items-center space-x-1.5 text-[#FF5C28] font-bold uppercase text-[10px] tracking-wider mb-1">
                          <Target className="w-3.5 h-3.5" />
                          <span>Objective</span>
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed text-xs">
                          {project.objective}
                        </p>
                      </div>
                    )}

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features List Brief */}
                    <div className="space-y-1.5 pt-1">
                      {project.implementedFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C28] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
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
                      className="py-2.5 px-3 rounded-full bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center space-x-1"
                      title="Project specs documented"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Documented</span>
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
