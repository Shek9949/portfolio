import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BookOpen, 
  Wrench, 
  Sparkles, 
  Search,
  CheckCircle,
  Terminal
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#FF5C28]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-slate-800" />;
      case 'Server': return <Server className="w-5 h-5 text-slate-800" />;
      case 'Database': return <Database className="w-5 h-5 text-slate-800" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-rose-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#FF5C28]" />;
      default: return <Terminal className="w-5 h-5 text-[#FF5C28]" />;
    }
  };

  const categoriesList = ['All', ...skills.map(s => s.category)];

  const filteredSkills = skills.map(cat => {
    const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
    if (!matchesCategory) return null;

    const matchingSkills = cat.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="alex-pill inline-block">Technical Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Technical <span className="text-[#FF5C28]">Skills</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Organized proficiency across programming languages, backend frameworks, databases, and core computer science concepts.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills (e.g. Java, MySQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-black/10 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF5C28] shadow-sm transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
              {categoriesList.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-black text-white'
                      : 'bg-white text-slate-600 hover:text-black border border-black/5 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((cat, idx) => (
            <div 
              key={idx} 
              className="alex-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-100">
                  <div className="p-2.5 rounded-2xl bg-slate-100 border border-black/5">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111111]">{cat.category}</h3>
                    <span className="text-[11px] text-slate-400 font-medium">{cat.skills.length} items</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-black/5 hover:border-[#FF5C28] transition-all group"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF5C28]" />
                      <span className="text-xs font-semibold text-slate-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Core Competency</span>
                <span className="font-mono text-[#FF5C28] font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 alex-card">
            <p className="text-slate-500 text-sm">No skills found matching "{searchQuery}". Try a different keyword.</p>
          </div>
        )}

      </div>
    </section>
  );
};
