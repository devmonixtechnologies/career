import React from 'react';
import { JobPosition } from '../types';
import { X, CheckCircle, MapPin, Briefcase, Calendar, Mail } from 'lucide-react';

interface JobDetailModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-[pulse-slow_0.2s_ease-out]">
        
        {/* Header */}
        <div className="relative p-8 pb-6 border-b border-slate-100">
           <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap gap-2 mb-4">
             <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                job.department === 'Engineering' ? 'bg-blue-50 border-blue-100 text-blue-700' :
                job.department === 'Sales' ? 'bg-green-50 border-green-100 text-green-700' :
                'bg-purple-50 border-purple-100 text-purple-700'
              }`}>
              {job.department}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-slate-200 bg-slate-50 text-slate-600">
              {job.type}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-3">{job.title}</h2>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-500 text-sm font-medium">
             <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" /> {job.location}
             </span>
             <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-600" /> {job.experience} Experience
             </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              About the Role
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              Key Requirements
            </h3>
            <ul className="space-y-3">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

           <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-slate-500 text-sm font-medium">
            Are you the perfect fit? Send your Resume
          </div>
          <a 
            href={`mailto:sales@devmonix.io?subject=Application for ${job.title}`}
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" /> Apply via Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default JobDetailModal;