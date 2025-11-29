import { JobPosition } from './types';

export const COMPANY_NAME = "DevMonix Technologies";
export const COMPANY_WEBSITE = "www.devmonix.io";

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'sales-001',
    title: 'Tech Sales Representative',
    department: 'Sales',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '6 months - 1 year',
    skills: ['DevOps Knowledge', 'Cloud Computing', 'Lead Generation', 'Technical Communication'],
    description: 'We are looking for a driven Sales Representative with a knack for technology. You will be bridging the gap between complex DevOps solutions and client needs.',
    requirements: [
      'Minimum 6 months to 1 year of experience in Tech Sales.',
      'Strong understanding of DevOps, Cloud, and Software Development lifecycles.',
      'Excellent verbal and written communication skills.',
      'Proven track record of meeting sales targets.'
    ]
  },
  {
    id: 'devops-001',
    title: 'Junior DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Min 1 year',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS/Azure', 'Linux'],
    description: 'Join our infrastructure team to build robust, scalable systems. This is an excellent opportunity for a junior engineer to grow in a high-velocity environment.',
    requirements: [
      'Minimum 1 year of hands-on DevOps experience.',
      'Experience with containerization (Docker) and orchestration (Kubernetes).',
      'Familiarity with cloud platforms (AWS, Azure, or GCP).',
      'Knowledge of CI/CD pipelines (Jenkins, GitHub Actions, or GitLab CI).'
    ]
  },
  {
    id: 'frontend-001',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '6 months - 1 year',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
    description: 'Craft stunning user interfaces and seamless experiences. We value clean code and a pixel-perfect eye for design.',
    requirements: [
      'Minimum 6 months to 1 year of frontend development experience.',
      'Solid knowledge of React.js and its ecosystem.',
      'Proficiency in JavaScript (ES6+) and modern CSS.',
      'Understanding of responsive design principles.'
    ]
  },
  {
    id: 'backend-001',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '6 months - 1 year',
    skills: ['Node.js', 'Python', 'Django', 'FastAPI', 'API Design'],
    description: 'Power the logic behind our applications. Whether you prefer Node.js or Python, we need scalable APIs and efficient database management.',
    requirements: [
      'Minimum 6 months to 1 year of backend development experience.',
      'Strong knowledge of Node.js OR Python (Django/FastAPI).',
      'Experience with RESTful APIs and database integration (SQL/NoSQL).',
      'Understanding of server-side logic and performance optimization.'
    ]
  },
  {
    id: 'data-001',
    title: 'Data Entry Specialist',
    department: 'Operations',
    location: 'On-site / Remote',
    type: 'Full-time',
    experience: 'Fresher',
    skills: ['Software Dev Basics', 'Networking Basics', 'Attention to Detail', 'Data Management'],
    description: 'An entry-level role for those looking to start their career in a tech environment. Knowledge of software and networking is a huge plus.',
    requirements: [
      'Freshers are welcome to apply.',
      'Basic knowledge of Software Development concepts.',
      'Understanding of computer networking fundamentals.',
      'High attention to detail and accuracy in data handling.'
    ]
  }
];
