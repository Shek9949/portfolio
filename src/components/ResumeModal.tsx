import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Mail, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [resumeExists, setResumeExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetch('/resume.pdf', { method: 'HEAD' })
        .then((res) => {
          if (res.ok) {
            setResumeExists(true);
          } else {
            setResumeExists(false);
          }
        })
        .catch(() => setResumeExists(false));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="alex-card max-w-lg w-full p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="p-3.5 rounded-2xl bg-black text-white">
            <FileText className="w-6 h-6 text-[#FF5C28]" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#111111]">Abhishek Asundi Resume</h3>
            <p className="text-xs text-slate-500 font-medium">Software Engineering Candidate Profile</p>
          </div>
        </div>

        {resumeExists ? (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-800 font-medium">
                Official resume PDF is available and ready for direct download.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Abhishek_Asundi_Resume.pdf"
              className="w-full py-3.5 px-4 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
            >
              <Download className="w-4 h-4 text-[#FF5C28]" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-xs">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Resume PDF Location Pending</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Save your actual resume PDF as <code className="text-amber-800 font-mono font-bold bg-amber-100 px-1.5 py-0.5 rounded">public/resume.pdf</code> to enable instant direct downloads.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={portfolioData.profile.links.emailMailto}
                className="w-full py-3.5 px-4 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Mail className="w-4 h-4 text-[#FF5C28]" />
                <span>Request Resume via Email ({portfolioData.profile.email})</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                Instruction: Replace public/resume.pdf with your actual resume file.
              </p>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:text-black"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
