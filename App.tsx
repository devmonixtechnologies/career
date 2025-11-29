import React, { useState } from 'react';
import { JOB_POSITIONS, COMPANY_NAME, COMPANY_WEBSITE } from './constants';
import { JobPosition } from './types';
import JobCard from './components/JobCard';
import JobDetailModal from './components/JobDetailModal';
import RecruiterChat from './components/RecruiterChat';
import { Globe, ArrowRight, Zap, Code2, Users, ChevronDown, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [filterDept, setFilterDept] = useState<string>('All');

  const departments = ['All', ...Array.from(new Set(JOB_POSITIONS.map(j => j.department)))];

  const filteredJobs = filterDept === 'All' 
    ? JOB_POSITIONS 
    : JOB_POSITIONS.filter(j => j.department === filterDept);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden relative">
      {/* Background Ambience - Subtle for light mode */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px] animate-blob"></div>
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-purple-100/40 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      

      {/* Hero Section */}
      <header className="relative z-10 pt-24 pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          WE ARE HIRING
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 tracking-tight mb-8">
          Build the Future with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            DevMonix Technologies
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          We are architects of the cloud, masters of code, and drivers of innovation.
          Crafting cutting-edge software solutions tailored to your needs. From concept to deployment, we build the future, today!
          Join with us where your code impacts global infrastructures.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#positions" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center gap-2">
             View Open Positions <ArrowRight className="w-5 h-5" />
          </a>
          <a href={`https://${COMPANY_WEBSITE}`} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
             Visit Website <Globe className="w-5 h-5 text-slate-400" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-200 pt-12">
            {[
              { label: 'Global Clients', value: '9+' },
              { label: 'Projects Shipped', value: '12+' },
              { label: 'Team Members', value: '9+' },
              { label: 'Customer Retention', value: '200%' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
        </div>
      </header>

      {/* Main Content */}
      <main id="positions" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Open Roles</h2>
            <p className="text-slate-600 max-w-xl">
              Find your place in our ecosystem. We are looking for passionate individuals ready to challenge the status quo.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDept(dept)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap border ${
                  filterDept === dept 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onApply={setSelectedJob} 
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
           <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-2xl bg-white/50">
              <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-900 mb-2">No positions found</h3>
              <p className="text-slate-500">Try adjusting your filters or check back later.</p>
           </div>
        )}

        {/* Culture Section */}
        <section className="mt-32 mb-20">
           <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl shadow-slate-200/50">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why DevMonix?</h2>
                    <ul className="space-y-4">
                      {[
                        'Remote & Hybrid culture with flexible hours',
                        'Latest tech stacks & securities',
                        'DevOps culture with CI/CD pipelines',
                        'Continuous learning & evolution',
                        'High-impact projects for global enterprises'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                           <CheckCircle2 className="w-5 h-5 text-blue-600" />
                           {item}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <div className="text-sm font-mono text-blue-600 mb-4 font-bold">// OUR PHILOSOPHY</div>
                    <div className="text-xl text-slate-800 font-medium italic leading-relaxed">
                      "At DevMonix, we don't just write code; we engineer solutions that drive businesses forward. Every line of code matters."
                    </div>
                    <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-6">
                       <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg">CEO</div>
                       <div>
                          <div className="text-slate-900 text-sm font-bold">Abdul Latheef K</div>
                          <div className="text-slate-500 text-xs uppercase tracking-wide">Chief Executive Officer</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
           
           <p className="text-slate-500 text-sm mb-8">
             &copy; {new Date().getFullYear()} DevMonix Technologies. All rights reserved.
           </p>
           <div className="flex justify-center gap-8">
              <a href="https://www.linkedin.com/company/devmonix.io" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">LinkedIn</a>
              <a href="https://x.com/devmonixtech" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">Twitter</a>
              <a href="https://github.com/devmonixtechnologies" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">GitHub</a>
           </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <JobDetailModal 
        job={selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
      
      <RecruiterChat />

    </div>
  );
};

export default App;