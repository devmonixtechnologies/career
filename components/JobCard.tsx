import React from 'react';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, Code, Server, Database, TrendingUp, Terminal } from 'lucide-react';

interface JobCardProps {
  job: JobPosition;
  onApply: (job: JobPosition) => void;
}

const getIconForDept = (dept: string) => {
  switch (dept) {
    case 'Engineering': return <Code className="w-5 h-5 text-blue-600" />;
    case 'Sales': return <TrendingUp className="w-5 h-5 text-green-600" />;
    case 'Operations': return <Database className="w-5 h-5 text-purple-600" />;
    default: return <Briefcase className="w-5 h-5 text-slate-400" />;
  }
};

const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col h-full hover:-translate-y-1">
      <div className="absolute top-0 right-0 p-5 opacity-40 group-hover:opacity-100 transition-opacity">
        {getIconForDept(job.department)}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          job.department === 'Engineering' ? 'bg-blue-50 border-blue-100 text-blue-700' :
          job.department === 'Sales' ? 'bg-green-50 border-green-100 text-green-700' :
          'bg-purple-50 border-purple-100 text-purple-700'
        }`}>
          {job.department}
        </span>
        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
          <Clock className="w-3 h-3" /> {job.type}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {job.title}
      </h3>

      <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="w-4 h-4 text-slate-400" /> {job.experience}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
        {job.description}
      </p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="text-xs text-slate-500 px-2 py-1 font-medium">+{job.skills.length - 3} more</span>
          )}
        </div>
      </div>

      <button
        onClick={() => onApply(job)}
        className="w-full py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-600/20"
      >
        View Details <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default JobCard;