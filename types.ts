export interface JobPosition {
  id: string;
  title: string;
  department: 'Sales' | 'Engineering' | 'Operations';
  location: string;
  type: 'Full-time' | 'Contract';
  experience: string;
  skills: string[];
  description: string;
  requirements: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
