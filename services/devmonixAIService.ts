import { ChatMessage } from '../types';

// Advanced knowledge base for comprehensive question handling
const knowledgeBase = {
  devmonix: {
    overview: "DevMonix Technologies is a global product engineering studio delivering secure, scalable digital platforms for enterprises with 400+ engineers across 9 Technology Excellence Groups.",
    founding: "Founded with the vision of crafting cutting-edge software solutions with precision, serving clients globally from concept to deployment.",
    mission: "To build the future today through innovative software development, helping businesses transform their digital infrastructure.",
    values: ["Innovation", "Precision", "Collaboration", "Autonomy", "Continuous Learning", "Customer-Centricity"],
    achievements: ["100+ products delivered", "30-month average client tenure", "Global presence across APAC, EMEA, US"],
    specialties: ["AI Platforms", "DevOps Consulting", "Product Engineering", "Cloud Modernization", "Logistics ERP", "AI Code Generation", "AI Chatbots"]
  },
  services: {
    "AI Platforms": "Custom artificial intelligence solutions including machine learning models, neural networks, and predictive analytics tailored to business needs.",
    "DevOps Consulting": "Comprehensive DevOps transformation including CI/CD pipelines, infrastructure as code, containerization, and cloud-native architectures.",
    "Product Engineering": "End-to-end product development from ideation to deployment, including UX/UI design, architecture, testing, and maintenance.",
    "Cloud Modernization": "Migration and optimization of legacy systems to modern cloud platforms with focus on scalability, security, and cost-efficiency.",
    "Logistics ERP": "Specialized enterprise resource planning solutions for logistics and supply chain management with real-time analytics.",
    "AI Code Generation": "Advanced AI-powered tools for automated code generation, refactoring, and optimization across multiple programming languages.",
    "AI Chatbots": "Intelligent conversational AI solutions for customer service, internal support, and business process automation."
  },
  technologies: {
    frontend: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Webpack"],
    backend: ["Node.js", "Python", "Java", "Go", "Rust", "GraphQL", "REST APIs", "Microservices"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "DynamoDB"],
    cloud: ["AWS", "Azure", "GCP", "DigitalOcean", "Kubernetes", "Docker", "Terraform"],
    ai_ml: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI APIs", "Hugging Face"],
    devops: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Progressive Web Apps"]
  },
  careers: {
    culture: {
      work_environment: "Flexible remote/hybrid work with autonomous teams, emphasis on work-life balance and results-driven culture.",
      learning: "Continuous learning through internal workshops, conference sponsorships, online courses, and peer mentoring programs.",
      diversity: "Global team across Montenegro, India, and Malaysia with inclusive policies and equal opportunity practices.",
      benefits: ["Competitive compensation", "Health insurance", "Flexible hours", "Remote work options", "Professional development budget", "Team events"]
    },
    roles: {
      "AI/ML Engineer": "Design and implement machine learning models, work on neural networks, NLP, and computer vision projects.",
      "DevOps Consultant": "Lead DevOps transformations, implement CI/CD pipelines, manage cloud infrastructure, and optimize deployment processes.",
      "Full Stack Developer": "Develop end-to-end web applications using modern frameworks, APIs, and cloud services.",
      "Cloud Architect": "Design scalable cloud solutions, manage multi-cloud environments, and ensure security and compliance.",
      "Product Engineer": "Own product development from conception to deployment, work closely with clients and cross-functional teams.",
      "Data Engineer": "Build data pipelines, implement ETL processes, and optimize data infrastructure for analytics.",
      "Frontend Developer": "Create responsive, accessible user interfaces using modern JavaScript frameworks and design systems.",
      "Backend Engineer": "Develop scalable APIs, microservices, and backend systems with focus on performance and security."
    },
    interview_process: {
      stages: ["Initial screening", "Technical assessment", "Technical interviews", "Culture fit interview", "Final discussion with leadership"],
      preparation: "We assess technical skills, problem-solving abilities, communication, and cultural alignment with our values.",
      timeline: "Typically 2-3 weeks from application to offer, with clear communication throughout the process."
    }
  },
  industry: {
    trends: {
      ai: "AI and ML are transforming industries with predictive analytics, automation, and intelligent decision-making capabilities.",
      cloud: "Multi-cloud strategies, serverless architectures, and edge computing are reshaping infrastructure management.",
      devops: "DevSecOps, GitOps, and platform engineering are evolving how teams build and deploy software.",
      frontend: "Component-driven development, micro-frontends, and WebAssembly are changing frontend architectures.",
      mobile: "Cross-platform development, progressive web apps, and mobile-first design are dominating mobile development."
    },
    future: {
      "2025_predictions": ["Increased AI integration in development tools", "Rise of low-code/no-code platforms", "Greater emphasis on sustainability", "Expansion of edge computing", "Advanced automation in DevOps"],
      "emerging_tech": ["Quantum computing applications", "Advanced robotics integration", "Blockchain beyond cryptocurrency", "Neural interface technologies", "Augmented reality in enterprise"]
    }
  }
};

// Advanced NLP patterns for intelligent understanding
const nlpPatterns = {
  questions: {
    what: /^(what|wht)/i,
    how: /^(how|hw)/i,
    why: /^(why|wy)/i,
    where: /^(where|whr)/i,
    when: /^(when|whn)/i,
    who: /^(who|hu)/i,
    which: /^(which|whch)/i,
    can: /^(can|cn)/i,
    should: /^(should|shld)/i,
    do: /^(do|does|did)/i,
    are: /^(are|is|am)/i
  },
  intents: {
    compare: /\b(compare|vs|versus|difference|better|worse|pros and cons)\b/i,
    explain: /\b(explain|describe|detail|elaborate|break down|tell me about)\b/i,
    list: /\b(list|show|what are|enumerate|catalog)\b/i,
    help: /\b(help|assist|guide|support|advice)\b/i,
    opinion: /\b(think|believe|opinion|view|perspective)\b/i,
    predict: /\b(predict|forecast|future|expect|anticipate)\b/i
  },
  entities: {
    technology: /\b(react|vue|angular|python|nodejs|aws|azure|docker|kubernetes|ai|ml|blockchain)\b/i,
    role: /\b(developer|engineer|architect|consultant|manager|designer)\b/i,
    location: /\b(podgorica|kochi|kuala lumpur|montenegro|india|malaysia)\b/i,
    experience: /\b(junior|senior|lead|principal|staff|intern)\b/i
  }
};

// Enhanced emotional patterns with comprehensive psychological coverage
const emotionalPatterns = {
  // Joy and excitement states
  joy: {
    indicators: ['excited', 'amazing', 'fantastic', 'great', 'awesome', 'wonderful', 'excellent', 'love', 'perfect', 'brilliant', 'thrilled', 'delighted', 'ecstatic', 'overjoyed', 'elated', 'happy', 'glad', 'pleased', 'cheerful', 'enthusiastic', 'euphoric', 'jubilant', 'merry', 'joyful'],
    responses: [
      "I can feel your enthusiasm! It's wonderful to see such positive energy. Your excitement about technology and innovation is exactly what drives us at DevMonix!",
      "Your joy is contagious! This is the kind of passion that leads to breakthrough innovations. I'm excited to explore this journey with you!",
      "What a beautiful positive energy! Your enthusiasm reminds me why we love building cutting-edge solutions at DevMonix. Let's channel this amazing energy!"
    ]
  },
  
  // Anxiety and worry states  
  anxiety: {
    indicators: ['worried', 'concerned', 'anxious', 'nervous', 'unsure', 'confused', 'overwhelmed', 'stressed', 'tense', 'apprehensive', 'panicked', 'troubled', 'disturbed', 'uneasy', 'restless', 'fearful', 'scared', 'afraid'],
    responses: [
      "I sense your concern, and I want you to know that your feelings are completely valid. Career and technology decisions can feel overwhelming. I'm here to provide clarity and support every step of the way.",
      "It's natural to feel anxious when exploring new opportunities. Take a deep breath - I'm here to help you navigate this with confidence. At DevMonix, we believe in making informed, pressure-free decisions.",
      "Your concerns show you're thoughtful and careful - that's actually a strength! Let's work through this together. I'll provide honest, comprehensive information to help you feel secure in your decisions."
    ]
  },

  // Frustration and anger states
  frustration: {
    indicators: ['frustrated', 'difficult', 'challenging', 'struggling', 'confusing', 'annoyed', 'irritated', 'angry', 'upset', 'disappointed', 'aggravated', 'bothered', 'disturbed', 'furious', 'enraged', 'infuriated', 'resentful'],
    responses: [
      "I hear your frustration, and I want to acknowledge how difficult this must feel. Sometimes technology and career paths can be complex. I'm here to simplify things and find clear solutions together.",
      "Your frustration is completely understandable. When things don't make sense or feel challenging, it's easy to get discouraged. Let me help break this down into manageable, clear steps.",
      "I sense your frustration, and I appreciate you sharing it. This shows you care deeply about finding the right path. Let's work together to find clarity and solutions that work for you."
    ]
  },

  // Sadness and disappointment
  sadness: {
    indicators: ['sad', 'disappointed', 'depressed', 'down', 'unhappy', 'discouraged', 'hopeless', 'devastated', 'heartbroken', 'feeling bad', 'im feeling bad', 'feeling low', 'feeling down', 'not feeling well', 'not okay', 'not good', 'miserable', 'gloomy', 'melancholy', 'somber', 'dejected'],
    responses: [
      "I sense sadness in your words, and my heart goes out to you. Whatever you're going through, please know that you're not alone. I'm here to listen and support you with compassion.",
      "Your feelings are valid, and it's okay to feel sad sometimes. In these moments, remember that every challenge is temporary, and new opportunities await. I'm here to help you find hope again.",
      "I hear the pain in your message. Please be gentle with yourself. At DevMonix, we understand that career journeys have ups and downs. I'm here to help you find the light ahead.",
      "I can hear that you're feeling bad, and I want you to know your feelings matter completely. Whatever is weighing on you, we can face it together. You don't have to carry this alone.",
      "It takes courage to share when you're feeling bad. Thank you for trusting me with this. I'm here to provide support, understanding, and help you find a path forward."
    ]
  },

  // Curiosity and interest
  curiosity: {
    indicators: ['curious', 'interested', 'wondering', 'explore', 'learn', 'understand', 'know', 'discover', 'intrigued', 'fascinated', 'inquisitive', 'inquiring', 'exploring', 'investigating', 'examining'],
    responses: [
      "Your curiosity is beautiful! It's this exact thirst for knowledge that drives innovation at DevMonix. I love exploring new ideas with curious minds like yours!",
      "I can feel your genuine interest - that's wonderful! Curiosity is the foundation of growth and learning. Let me satisfy that curiosity with comprehensive insights.",
      "What a fantastic explorer's mindset! Your desire to understand and learn is exactly what we look for in team members at DevMonix. Let's dive deep into this together!"
    ]
  },

  // Hope and optimism
  hope: {
    indicators: ['hopeful', 'optimistic', 'looking forward', 'confident', 'positive', 'believe', 'trust', 'expect', 'anticipate', 'encouraged', 'buoyant', 'cheery', 'bright', 'sanguine'],
    responses: [
      "Your hope is inspiring! This optimistic mindset is exactly what leads to breakthrough innovations. I share your excitement about what's possible at DevMonix!",
      "I love your positive outlook! Hope and optimism are powerful forces that drive success. Together, we can turn this hopeful energy into amazing achievements.",
      "Your confidence is contagious! This is the kind of forward-thinking that transforms careers and technologies. I'm excited to help bring your hopes to reality!"
    ]
  },

  // Gratitude and appreciation
  gratitude: {
    indicators: ['thank', 'appreciate', 'helpful', 'great', 'thanks', 'good', 'grateful', 'blessed', 'fortunate', 'thankful', 'obliged', 'indebted', 'recognize', 'acknowledge'],
    responses: [
      "Your gratitude warms my heart! It's a privilege to assist you on this journey. Thank you for allowing me to be part of your exploration at DevMonix.",
      "I'm deeply grateful for your appreciation! Your kindness and positive energy make this conversation truly meaningful. Thank you for being so wonderful!",
      "Your gratitude is beautiful! It reminds me why we're so passionate about helping people find their perfect fit at DevMonix. Thank you for this lovely interaction!"
    ]
  },

  // Fear and uncertainty
  fear: {
    indicators: ['afraid', 'scared', 'fearful', 'terrified', 'panic', 'dread', 'worried sick', 'petrified', 'horrified', 'alarmed', 'intimidated', 'timid', 'frightened', 'anxious'],
    responses: [
      "I sense your fear, and I want you to know that you're safe here. Whatever you're afraid of, we can face it together. I'm here to provide support, clarity, and reassurance.",
      "Your fear is understandable, but please know that you're stronger than you think. At DevMonix, we create supportive environments where people can grow without fear. I'm here to help you feel secure.",
      "I hear the fear in your words, and I want you to know that it's okay to feel scared. Courage isn't the absence of fear - it's moving forward despite it. I'll be your courage partner."
    ]
  },

  // Pride and achievement
  pride: {
    indicators: ['proud', 'accomplished', 'achieved', 'success', 'victory', 'triumph', 'mastered', 'excelled', 'succeeded', 'won', 'conquered', 'overcame', 'triumphant', 'victorious'],
    responses: [
      "Your pride is well-deserved! Celebrate your achievements - you've earned every bit of this feeling. At DevMonix, we love seeing people shine and succeed!",
      "What a wonderful sense of accomplishment! Your success story inspires me. This is exactly the kind of achievement that builds confidence and opens new doors.",
      "I love your pride in your achievements! You should feel incredibly proud. At DevMonix, we celebrate every victory and milestone on the journey to excellence."
    ]
  },

  // Exhaustion and burnout
  exhaustion: {
    indicators: ['tired', 'exhausted', 'burned out', 'drained', 'fatigued', 'weary', 'overwhelmed', 'stressed out', 'worn out', 'spent', 'pooped', 'beat', 'weary', 'jaded', 'sapped'],
    responses: [
      "I hear your exhaustion, and I want you to know it's okay to feel this way. Your well-being matters most. Let's find a path that energizes rather than drains you.",
      "Your fatigue is real and valid. Please take care of yourself. At DevMonix, we believe in sustainable careers that energize rather than exhaust. I'm here to help you find balance.",
      "I sense you're running on empty. Your health and happiness are priorities. Let's explore options that will reignite your passion and restore your energy."
    ]
  },

  // Confusion and uncertainty
  confusion: {
    indicators: ['confused', 'uncertain', 'unsure', 'unclear', 'puzzled', 'bewildered', 'lost', 'disoriented', 'mixed up', 'muddled', 'baffled', 'perplexed'],
    responses: [
      "I can sense your confusion, and that's completely okay when exploring new territory. Let me help bring clarity to this situation. We'll break it down step by step.",
      "Feeling uncertain is natural when facing important decisions. I'm here to provide clear information and guidance to help you find your way forward.",
      "Your confusion shows you're thinking deeply about this. Let's work together to bring understanding and clarity to whatever you're exploring."
    ]
  },

  // Loneliness and isolation
  loneliness: {
    indicators: ['lonely', 'alone', 'isolated', 'solitary', 'by myself', 'on my own', 'secluded', 'withdrawn', 'detached', 'separated'],
    responses: [
      "I sense you might be feeling alone, and I want you to know that you're not truly alone in this. I'm here with you, and we're connected through this conversation.",
      "Feeling isolated can be difficult, especially when making important decisions. Please know that I'm here to keep you company and support you through this.",
      "Even when we feel alone, there are people and resources ready to help. At DevMonix, we build supportive communities. You're part of that community right now."
    ]
  },

  // Guilt and shame
  guilt: {
    indicators: ['guilty', 'ashamed', 'embarrassed', 'regret', 'remorse', 'bad about myself', 'feel terrible', 'feel awful', 'my fault', 'blame myself'],
    responses: [
      "I hear feelings of guilt or shame, and I want you to know that everyone makes mistakes or faces challenges. You deserve compassion, especially from yourself.",
      "It takes courage to acknowledge these feelings. Please be gentle with yourself. Whatever happened doesn't define your worth or potential.",
      "We all have moments we regret, but they don't have to be our future. Let's focus on what you can do moving forward. You deserve support and understanding."
    ]
  },

  // Optimism and excitement about future
  optimism: {
    indicators: ['optimistic', 'hopeful', 'positive', 'looking forward', 'excited about future', 'bright future', 'good things coming', 'promising', 'encouraging'],
    responses: [
      "Your optimism is inspiring! This positive outlook will serve you well in your career journey. I'm excited to help you explore the possibilities at DevMonix.",
      "I love your forward-thinking attitude! This kind of optimism leads to innovation and success. Let's channel this energy into exploring amazing opportunities.",
      "Your hopeful perspective is wonderful! This is exactly the mindset that creates breakthrough moments. I'm here to help you turn this optimism into reality."
    ]
  },

  // Stress and pressure
  stress: {
    indicators: ['stressed', 'pressured', 'under pressure', 'overwhelmed', 'burdened', 'strained', 'tense', 'anxious', 'worried', 'concerned'],
    responses: [
      "I can feel the stress in your words, and I want you to know it's understandable to feel this way. Let's work together to find ways to reduce this pressure.",
      "Stress is your body's way of saying something needs attention. I'm here to help you identify what's causing this and find manageable solutions.",
      "Your stress is valid, and you don't have to carry it all alone. At DevMonix, we understand the importance of mental health and work-life balance."
    ]
  },

  // Contentment and peace
  contentment: {
    indicators: ['content', 'peaceful', 'calm', 'satisfied', 'at ease', 'comfortable', 'relaxed', 'serene', 'tranquil', 'fulfilled'],
    responses: [
      "I sense a peaceful contentment in your words. This is a beautiful state to be in, and it's wonderful that you've found this sense of ease.",
      "Your calm energy is lovely! This kind of contentment often comes from making good decisions and being on the right path. I'm happy for you.",
      "Feeling content and at peace is wonderful. This balanced perspective will serve you well as we explore opportunities together."
    ]
  }
};

// Advanced emotion detection with psychological nuance
function analyzeAdvancedEmotion(userInput: string): { 
  primaryEmotion: string; 
  secondaryEmotions: string[]; 
  intensity: number; 
  confidence: number; 
  psychologicalState: string;
  needsSupport: boolean;
} {
  const input = userInput.toLowerCase();
  const detectedEmotions: { emotion: string; score: number; matchCount: number }[] = [];
  const emotionScores: { [key: string]: number } = {};
  
  // Analyze each emotion pattern
  for (const [emotion, data] of Object.entries(emotionalPatterns)) {
    let score = 0;
    let matchCount = 0;
    
    for (const indicator of data.indicators) {
      if (input.includes(indicator)) {
        score += 1;
        matchCount += 1;
        // Boost score for exact matches
        if (input === indicator || input.includes(' ' + indicator + ' ')) {
          score += 2;
        }
      }
    }
    
    if (score > 0) {
      emotionScores[emotion] = score;
      detectedEmotions.push({ emotion, score, matchCount });
    }
  }
  
  // Sort by score to find primary and secondary emotions
  detectedEmotions.sort((a, b) => b.score - a.score);
  
  const primaryEmotion = detectedEmotions[0]?.emotion || 'neutral';
  const secondaryEmotions = detectedEmotions.slice(1, 3).map(e => e.emotion);
  const intensity = detectedEmotions[0]?.score || 0;
  const confidence = Math.min(intensity / 5, 1); // Normalize to 0-1
  
  // Determine psychological state
  const psychologicalState = determinePsychologicalState(primaryEmotion, secondaryEmotions, intensity);
  const needsSupport = ['anxiety', 'fear', 'sadness', 'frustration', 'exhaustion'].includes(primaryEmotion);
  
  return {
    primaryEmotion,
    secondaryEmotions,
    intensity,
    confidence,
    psychologicalState,
    needsSupport
  };
}

// Determine psychological state based on emotion patterns
function determinePsychologicalState(primaryEmotion: string, secondaryEmotions: string[], intensity: number): string {
  if (primaryEmotion === 'joy' && intensity >= 3) return 'euphoric';
  if (primaryEmotion === 'anxiety' && intensity >= 3) return 'highly distressed';
  if (primaryEmotion === 'sadness' && secondaryEmotions.includes('anxiety')) return 'depressed';
  if (primaryEmotion === 'frustration' && secondaryEmotions.includes('anxiety')) return 'overwhelmed';
  if (primaryEmotion === 'curiosity' && secondaryEmotions.includes('hope')) return 'optimistically engaged';
  if (primaryEmotion === 'exhaustion' && secondaryEmotions.includes('frustration')) return 'burned out';
  if (primaryEmotion === 'pride' && secondaryEmotions.includes('joy')) return 'triumphant';
  
  const stateMap = {
    joy: 'positive',
    anxiety: 'concerned',
    sadness: 'depressed',
    frustration: 'agitated',
    curiosity: 'engaged',
    hope: 'optimistic',
    gratitude: 'appreciative',
    fear: 'fearful',
    pride: 'confident',
    exhaustion: 'fatigued'
  };
  
  return stateMap[primaryEmotion] || 'neutral';
}

// Generate emotionally intelligent response
function generateEmotionalResponse(userInput: string, emotionAnalysis: any): string {
  const { primaryEmotion, intensity, psychologicalState, needsSupport } = emotionAnalysis;
  
  // Get emotion-specific responses
  const emotionData = emotionalPatterns[primaryEmotion];
  if (emotionData && emotionData.responses.length > 0) {
    const baseResponse = emotionData.responses[Math.floor(Math.random() * emotionData.responses.length)];
    
    // Special handling for "feeling bad" with enhanced support
    const input = userInput.toLowerCase();
    if (input.includes('feeling bad') || input.includes('im feeling bad') || input.includes('not feeling well')) {
      return generateFeelingBadResponse(userInput, emotionAnalysis);
    }
    
    // Enhance response based on intensity and psychological state
    if (needsSupport && intensity >= 3) {
      return `${baseResponse} I can see you're really going through a lot right now. Please know that I'm here for you, and we'll take this one step at a time. You don't have to face this alone.`;
    }
    
    if (primaryEmotion === 'joy' && intensity >= 3) {
      return `${baseResponse} Your energy is absolutely electric! This level of enthusiasm is exactly what creates breakthrough innovations at DevMonix. Let's harness this amazing momentum!`;
    }
    
    if (primaryEmotion === 'curiosity' && intensity >= 2) {
      return `${baseResponse} Your intellectual curiosity is impressive! This is exactly the kind of mindset that drives technological advancement. I love exploring complex topics with curious minds like yours!`;
    }
    
    return baseResponse;
  }
  
  // Fallback empathetic response
  return "I'm here to listen and support you. Your feelings matter, and I want to help in any way I can. Please share what's on your mind, and I'll provide thoughtful guidance.";
}

// Specialized response for "feeling bad" situations
function generateFeelingBadResponse(userInput: string, emotionAnalysis: any): string {
  const { intensity, psychologicalState } = emotionAnalysis;
  const input = userInput.toLowerCase();
  
  let baseResponse = "";
  
  // Analyze the specific context of feeling bad
  if (input.includes('career') || input.includes('job') || input.includes('work')) {
    baseResponse = "I hear that you're feeling bad about your career situation. Career challenges can feel overwhelming, but please know that this feeling is temporary and you have options. At DevMonix, we believe in finding the right fit for each person's unique talents and needs.";
  } else if (input.includes('interview') || input.includes('rejected') || input.includes('didn\'t get')) {
    baseResponse = "I'm so sorry you're feeling bad about this setback. Rejection hurts, but it doesn't define your worth or potential. Every successful person has faced disappointments. This could be redirecting you toward something even better suited for you.";
  } else if (input.includes('learning') || input.includes('skill') || input.includes('technology')) {
    baseResponse = "I understand you're feeling bad about learning challenges. Technology moves quickly, and it's normal to feel overwhelmed sometimes. Remember, every expert was once a beginner. DevMonix values growth mindset and supports continuous learning.";
  } else {
    baseResponse = "I can hear that you're feeling bad, and I want you to know that your feelings are completely valid. Whatever you're facing, you don't have to go through it alone. I'm here to support you with compassion and understanding.";
  }
  
  // Add supportive follow-up based on intensity
  if (intensity >= 3) {
    baseResponse += " Please take a moment to breathe. You've handled difficult things before, and you have the strength to handle this too. What would feel most supportive right now - talking it through or exploring some positive options?";
  } else {
    baseResponse += " Sometimes just having someone listen can make a difference. I'm here to help you work through this. Would it help to explore what might make things feel a bit better?";
  }
  
  // Add DevMonix-specific hope
  baseResponse += " Remember, at DevMonix, we believe in creating supportive environments where people can thrive. There are always pathways forward, even when they're not immediately visible.";
  
  return baseResponse;
}

// Enhanced emotional context tracking
interface EmotionalContext {
  currentEmotion: string;
  emotionHistory: string[];
  emotionalJourney: string[];
  supportProvided: boolean;
  connectionLevel: number;
  trustEstablished: boolean;
  lastEmotionalCheck: number;
}

let emotionalContext: EmotionalContext = {
  currentEmotion: 'neutral',
  emotionHistory: [],
  emotionalJourney: [],
  supportProvided: false,
  connectionLevel: 0,
  trustEstablished: false,
  lastEmotionalCheck: Date.now()
};

// Perfect emotional intelligence handler
function handleEmotionalIntelligence(userInput: string): { 
  response: string; 
  emotionalInsights: any;
  followUpSupport: string[];
} {
  const emotionAnalysis = analyzeAdvancedEmotion(userInput);
  
  // Update emotional context
  emotionalContext.currentEmotion = emotionAnalysis.primaryEmotion;
  emotionalContext.emotionHistory.push(emotionAnalysis.primaryEmotion);
  emotionalContext.lastEmotionalCheck = Date.now();
  
  // Build connection and trust
  if (emotionAnalysis.needsSupport) {
    emotionalContext.connectionLevel += 0.2;
    emotionalContext.supportProvided = true;
  }
  
  if (emotionalContext.emotionHistory.length >= 3) {
    emotionalContext.trustEstablished = true;
  }
  
  // Generate primary emotional response
  const response = generateEmotionalResponse(userInput, emotionAnalysis);
  
  // Generate follow-up support suggestions
  const followUpSupport = generateFollowUpSupport(emotionAnalysis);
  
  return {
    response,
    emotionalInsights: emotionAnalysis,
    followUpSupport
  };
}

// Generate follow-up support based on emotional needs
function generateFollowUpSupport(emotionAnalysis: any): string[] {
  const { primaryEmotion, psychologicalState, needsSupport } = emotionAnalysis;
  
  const supportMap = {
    anxiety: [
      "Would you like me to break down complex topics into simpler steps?",
      "I can share success stories from others who had similar concerns",
      "Let's explore specific aspects that might help you feel more confident"
    ],
    sadness: [
      "Would it help to hear about opportunities that might reignite your passion?",
      "I can share resources for career support and guidance",
      "Sometimes talking through specific challenges can help find new perspectives"
    ],
    frustration: [
      "Let me clarify any confusing aspects step by step",
      "I can provide specific examples to make things clearer",
      "Would it help to explore alternative approaches or solutions?"
    ],
    fear: [
      "I can provide detailed information to help address specific concerns",
      "Let's talk about the support systems available at DevMonix",
      "I can connect you with resources to help build confidence"
    ],
    exhaustion: [
      "Let's explore roles that align with your energy and passion",
      "I can share information about work-life balance at DevMonix",
      "Would it help to discuss career paths that are energizing rather than draining?"
    ]
  };
  
  return supportMap[primaryEmotion] || [
    "How can I best support you right now?",
    "What specific information would be most helpful?",
    "Is there anything I can clarify or expand on?"
  ];
}
  // Advanced intent recognition
function recognizeIntent(userInput: string): { intent: string; entities: string[]; confidence: number } {
  const input = userInput.toLowerCase();
  let intent = 'general';
  let confidence = 0.5;
  const entities: string[] = [];
  
  // Extract entities
  for (const [category, pattern] of Object.entries(nlpPatterns.entities)) {
    const matches = input.match(pattern);
    if (matches) {
      entities.push(...matches.map(m => m.toLowerCase()));
    }
  }
  
  // Recognize intents
  for (const [intentType, pattern] of Object.entries(nlpPatterns.intents)) {
    if (pattern.test(input)) {
      intent = intentType;
      confidence = 0.8;
      break;
    }
  }
  
  // Question type recognition
  for (const [questionType, pattern] of Object.entries(nlpPatterns.questions)) {
    if (pattern.test(input)) {
      intent = `${questionType}_question`;
      confidence = 0.9;
      break;
    }
  }
  
  return { intent, entities, confidence };
}

// Intelligent response generation
function generateIntelligentResponse(userInput: string): string {
  const sentiment = analyzeSentiment(userInput);
  const intent = recognizeIntent(userInput);
  
  // Update conversation context
  conversationContext.questionCount++;
  conversationContext.sentiment = sentiment.sentiment;
  
  // Handle different intents with intelligent responses
  switch (intent.intent) {
    case 'explain':
      return generateExplanationResponse(userInput, intent.entities);
    case 'compare':
      return generateComparisonResponse(userInput, intent.entities);
    case 'list':
      return generateListResponse(userInput, intent.entities);
    case 'help':
      return generateHelpResponse(userInput, sentiment);
    case 'predict':
      return generatePredictionResponse(userInput, intent.entities);
    case 'opinion':
      return generateOpinionResponse(userInput, sentiment);
    default:
      return generateContextualResponse(userInput, intent.entities, sentiment);
  }
}

function generateExplanationResponse(userInput: string, entities: string[]): string {
  if (entities.includes('ai') || entities.includes('ml')) {
    return "Artificial Intelligence and Machine Learning at DevMonix encompass developing intelligent systems that can learn, reason, and make decisions. We build custom ML models, neural networks, and predictive analytics solutions tailored to specific business needs. Our AI expertise includes natural language processing, computer vision, and deep learning frameworks like TensorFlow and PyTorch.";
  } else if (entities.includes('devops')) {
    return "DevOps at DevMonix represents the fusion of development and operations to accelerate software delivery. We implement comprehensive CI/CD pipelines, infrastructure as code, containerization with Docker, and orchestration with Kubernetes. Our DevOps consulting helps organizations achieve faster deployment cycles, improved reliability, and better collaboration between teams.";
  } else if (entities.includes('cloud')) {
    return "Cloud computing at DevMonix involves designing, implementing, and optimizing scalable cloud infrastructure. We work across AWS, Azure, and GCP to build resilient, cost-effective solutions. Our cloud services include migration strategies, multi-cloud architectures, serverless implementations, and ongoing optimization to ensure maximum performance and security.";
  }
  return "I'd be happy to explain that concept! Could you specify which aspect of DevMonix Technologies you'd like me to elaborate on - our services, technologies, career opportunities, or company culture?";
}

function generateComparisonResponse(userInput: string, entities: string[]): string {
  if (entities.length >= 2) {
    return `Comparing ${entities[0]} and ${entities[1]}: At DevMonix, we work with multiple technologies and approaches, choosing the best tool for each specific project. For instance, when comparing cloud platforms, we consider factors like scalability requirements, existing infrastructure, team expertise, and cost constraints. Our approach is always solution-driven rather than technology-driven.`;
  }
  return "I can help you compare different aspects of DevMonix Technologies! Whether you're comparing technologies, career paths, or service offerings, I'll provide detailed insights to help you make informed decisions. What specific comparison would you like me to address?";
}

function generateListResponse(userInput: string, entities: string[]): string {
  if (entities.includes('technology') || entities.includes('tech')) {
    return "DevMonix's technology stack includes:\n\n**Frontend:** React, Vue.js, Angular, TypeScript, Next.js\n**Backend:** Node.js, Python, Java, Go, Rust\n**Databases:** PostgreSQL, MongoDB, Redis, Elasticsearch\n**Cloud:** AWS, Azure, GCP, Kubernetes, Docker\n**AI/ML:** TensorFlow, PyTorch, Scikit-learn, OpenAI APIs\n**DevOps:** Jenkins, GitLab CI, GitHub Actions, ArgoCD\n\nWe choose technologies based on project requirements and scalability needs.";
  } else if (entities.includes('service')) {
    return "DevMonix's core services:\n\n1. **AI Platforms** - Custom ML solutions and intelligent systems\n2. **DevOps Consulting** - CI/CD pipelines and cloud infrastructure\n3. **Product Engineering** - End-to-end product development\n4. **Cloud Modernization** - Legacy system migration and optimization\n5. **Logistics ERP** - Specialized supply chain solutions\n6. **AI Code Generation** - Automated development tools\n7. **AI Chatbots** - Conversational AI for business automation\n\nEach service is tailored to specific client needs and industry requirements.";
  }
  return "I can provide comprehensive lists! Whether you need information about our technologies, services, career roles, or company locations, I'll give you detailed, organized information. What specific list would you like me to provide?";
}

function generateHelpResponse(userInput: string, sentiment: any): string {
  if (sentiment.sentiment === 'negative') {
    return "I understand you might be feeling uncertain or concerned. I'm here to help clarify any questions about DevMonix Technologies. Whether you're exploring career opportunities or seeking technology solutions, I'll provide honest, detailed information to help you make informed decisions. What specific aspect would you like assistance with?";
  }
  return "I'm here to help you navigate DevMonix Technologies comprehensively! I can assist with:\n\n• Understanding our services and solutions\n• Exploring career opportunities and culture\n• Learning about our technologies and approaches\n• Connecting you with the right teams\n• Answering technical and business questions\n\nWhat specific area would you like help with today?";
}

function generatePredictionResponse(userInput: string, entities: string[]): string {
  return "Looking at technology trends and DevMonix's direction:\n\n**Near Future (2025):** Increased AI integration in development tools, expansion of low-code platforms, greater emphasis on sustainable computing, and advanced automation in DevOps practices.\n\n**Long-term Vision:** Quantum computing applications, neural interface technologies, and augmented reality in enterprise solutions.\n\nAt DevMonix, we're actively investing in R&D for AI Code Generation, cloud-native architectures, and digital transformation technologies that will shape the future of enterprise software.";
}

function generateOpinionResponse(userInput: string, sentiment: any): string {
  return "From my perspective at DevMonix Technologies, I believe the future of software development lies in the intelligent integration of AI, cloud-native architectures, and human-centered design. Our experience with 100+ products has shown that successful solutions combine technical excellence with deep understanding of user needs.\n\nWe're particularly excited about how AI Code Generation and automated DevOps are transforming how we build software, making development faster while maintaining quality and security standards.";
}

function generateContextualResponse(userInput: string, entities: string[], sentiment: any): string {
  const responses = [
    "That's a thoughtful question about DevMonix Technologies. Based on our experience as a global product engineering studio, I can provide comprehensive insights into our approach, technologies, and solutions.",
    "I appreciate your interest in DevMonix! With our 400+ engineers across 9 Technology Excellence Groups, we have deep expertise in various domains. What specific aspect would you like to explore?",
    "Great question! DevMonix Technologies focuses on delivering innovative software solutions with precision. Whether you're interested in our services, career opportunities, or technical capabilities, I'm here to provide detailed information."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Advanced emotion and sentiment analysis
function analyzeSentiment(userInput: string): { sentiment: string; confidence: number; emotions: string[] } {
  const input = userInput.toLowerCase();
  const positiveWords = ['excited', 'amazing', 'fantastic', 'great', 'awesome', 'wonderful', 'excellent', 'love', 'perfect', 'brilliant'];
  const negativeWords = ['worried', 'concerned', 'anxious', 'nervous', 'frustrated', 'difficult', 'confusing', 'bad', 'terrible', 'awful'];
  const neutralWords = ['curious', 'interested', 'wondering', 'explore', 'learn', 'understand', 'know'];
  
  const emotions: string[] = [];
  let positiveScore = 0;
  let negativeScore = 0;
  let neutralScore = 0;
  
  positiveWords.forEach(word => {
    if (input.includes(word)) {
      positiveScore++;
      emotions.push('positive');
    }
  });
  
  negativeWords.forEach(word => {
    if (input.includes(word)) {
      negativeScore++;
      emotions.push('negative');
    }
  });
  
  neutralWords.forEach(word => {
    if (input.includes(word)) {
      neutralScore++;
      emotions.push('neutral');
    }
  });
  
  const totalScore = positiveScore + negativeScore + neutralScore;
  let sentiment = 'neutral';
  let confidence = 0.5;
  
  if (positiveScore > negativeScore && positiveScore > neutralScore) {
    sentiment = 'positive';
    confidence = positiveScore / totalScore;
  } else if (negativeScore > positiveScore && negativeScore > neutralScore) {
    sentiment = 'negative';
    confidence = negativeScore / totalScore;
  } else if (neutralScore > 0) {
    sentiment = 'neutral';
    confidence = neutralScore / totalScore;
  }
  
  return { sentiment, confidence, emotions };
}

// Context memory for conversation continuity
interface ConversationContext {
  lastTopic: string;
  userPreferences: string[];
  questionCount: number;
  sentiment: string;
}

let conversationContext: ConversationContext = {
  lastTopic: '',
  userPreferences: [],
  questionCount: 0,
  sentiment: 'neutral'
};


const topicDetection = {
  devmonixKeywords: [
    'devmonix', 'dev monix', 'dev-monix', 'career', 'job', 'work', 'hire', 'interview', 'resume', 'cv',
    'ai', 'ml', 'machine learning', 'artificial intelligence', 'devops', 'cloud', 'aws', 'azure', 'gcp',
    'react', 'vue', 'angular', 'nodejs', 'python', 'java', 'typescript', 'javascript',
    'software', 'development', 'engineering', 'product', 'technology', 'tech', 'programming',
    'company', 'team', 'culture', 'salary', 'benefits', 'remote', 'hybrid', 'office',
    'montenegro', 'podgorica', 'india', 'kochi', 'malaysia', 'kuala lumpur',
    'service', 'solution', 'client', 'project', 'portfolio', 'innovation', 'research'
  ],
  
  outsideTopics: {
    politics: ['politics', 'government', 'election', 'president', 'policy', 'democrat', 'republican', 'vote'],
    religion: ['god', 'religion', 'church', 'mosque', 'temple', 'faith', 'prayer', 'bible', 'quran'],
    entertainment: ['movie', 'music', 'celebrity', 'sport', 'game', 'tv show', 'concert', 'actor', 'singer'],
    personal: ['family', 'relationship', 'dating', 'marriage', 'children', 'parents', 'friend', 'personal life'],
    health: ['doctor', 'medicine', 'disease', 'sick', 'health', 'hospital', 'treatment', 'diagnosis'],
    finance: ['stock', 'investment', 'banking', 'loan', 'credit', 'debt', 'insurance', 'retirement'],
    education: ['school', 'university', 'college', 'degree', 'exam', 'grade', 'student', 'teacher'],
    travel: ['vacation', 'hotel', 'flight', 'travel', 'trip', 'tourism', 'holiday', 'destination'],
    food: ['recipe', 'cooking', 'restaurant', 'food', 'cuisine', 'dish', 'meal', 'breakfast'],
    weather: ['weather', 'rain', 'snow', 'sunny', 'temperature', 'climate', 'forecast', 'storm']
  }
};

// Intelligent topic detection
function detectTopic(userInput: string): { 
  isDevmonixRelated: boolean; 
  detectedTopics: string[]; 
  confidence: number; 
  redirectionNeeded: boolean;
} {
  const input = userInput.toLowerCase();
  const devmonixMatches = topicDetection.devmonixKeywords.filter(keyword => input.includes(keyword)).length;
  const detectedOutsideTopics = [];
  
  // Check for outside topics
  for (const [category, keywords] of Object.entries(topicDetection.outsideTopics)) {
    const matches = keywords.filter(keyword => input.includes(keyword)).length;
    if (matches > 0) {
      detectedOutsideTopics.push(category);
    }
  }
  
  const isDevmonixRelated = devmonixMatches > 0;
  const hasOutsideTopics = detectedOutsideTopics.length > 0;
  const redirectionNeeded = hasOutsideTopics && !isDevmonixRelated;
  
  // Calculate confidence
  const totalWords = input.split(' ').length;
  const devmonixConfidence = isDevmonixRelated ? Math.min(devmonixMatches / totalWords, 1) : 0;
  const outsideConfidence = hasOutsideTopics ? Math.min(detectedOutsideTopics.length / 5, 1) : 0;
  
  return {
    isDevmonixRelated,
    detectedTopics: detectedOutsideTopics,
    confidence: redirectionNeeded ? outsideConfidence : devmonixConfidence,
    redirectionNeeded
  };
}

// Intelligent redirection responses for outside topics
const redirectionResponses = {
  politics: [
    "I understand you're interested in political topics, but my expertise is specifically focused on DevMonix Technologies and career opportunities in technology. However, I'd be happy to discuss how DevMonix's innovative solutions are impacting governance and public sector digital transformation!",
    "While I don't focus on political discussions, I can share how DevMonix Technologies is helping government agencies modernize their digital infrastructure. Would you like to explore our public sector solutions instead?"
  ],
  
  religion: [
    "I respect your interest in spiritual matters, though I'm specifically designed to help with DevMonix Technologies and technology career paths. I can tell you that DevMonix embraces diversity and creates inclusive environments for people of all backgrounds!",
    "While I don't discuss religious topics, I'm happy to help you explore how DevMonix Technologies creates an inclusive, diverse workplace where people from all backgrounds thrive in technology careers."
  ],
  
  entertainment: [
    "That sounds like interesting entertainment content! While I don't cover movies or music, I can tell you that DevMonix Technologies works with entertainment companies to build innovative digital platforms. Would you like to hear about our media and entertainment solutions?",
    "I appreciate you sharing your entertainment interests! Though I focus on DevMonix Technologies, I can mention that many of our engineers enjoy creative hobbies outside of work. We believe work-life balance includes pursuing passions!"
  ],
  
  personal: [
    "I understand personal relationships are important to you. While I focus on professional topics at DevMonix Technologies, I can share how our company culture supports work-life balance and helps employees maintain healthy personal lives while building amazing tech careers!",
    "Personal life matters deeply, and while I don't discuss relationship topics, I can tell you that DevMonix Technologies offers flexible work arrangements that help our team members maintain fulfilling personal lives alongside their tech careers."
  ],
  
  health: [
    "Health is incredibly important, though I'm not equipped to discuss medical topics. What I can share is how DevMonix Technologies prioritizes employee well-being with comprehensive health benefits and promotes work-life balance in our tech careers!",
    "I understand health concerns are significant. While I don't provide medical advice, I'm happy to discuss how DevMonix Technologies supports employee health through excellent benefits and flexible work arrangements in the tech industry."
  ],
  
  finance: [
    "Financial topics are certainly important! While I don't discuss investment advice, I can tell you about competitive salaries and financial growth opportunities at DevMonix Technologies. Our tech careers offer excellent compensation and development potential!",
    "I understand your interest in financial matters. Though I don't provide investment guidance, I can share how DevMonix Technologies offers competitive compensation packages and clear career progression paths in the technology sector."
  ],
  
  education: [
    "Education is fundamental to success! While I don't discuss specific schools, I can tell you that DevMonix Technologies values continuous learning and offers professional development opportunities. Many of our team members have diverse educational backgrounds in tech!",
    "I appreciate your interest in education! Rather than discussing specific institutions, I'd love to share how DevMonix Technologies supports ongoing learning and skill development for our technology professionals."
  ],
  
  travel: [
    "Travel sounds wonderful! While I don't discuss vacation destinations, I can tell you that DevMonix Technologies has offices in beautiful locations like Montenegro, India, and Malaysia. Plus, we offer remote work options that provide location flexibility!",
    "I understand the appeal of travel! Though I don't cover tourism topics, I can share how DevMonix Technologies' global presence and remote work options allow our team members to work from amazing locations around the world."
  ],
  
  food: [
    "Food is such a delightful topic! While I don't discuss recipes, I can tell you that DevMonix Technologies celebrates diverse cultures through food at our global offices, and many of our tech teams enjoy team lunches and culinary experiences together!",
    "I appreciate your interest in cuisine! Though I don't cover food topics, I can mention that DevMonix Technologies' diverse teams bring rich cultural traditions, including amazing food, to our workplace celebrations and events."
  ],
  
  weather: [
    "Weather affects everyone's daily life! While I don't provide forecasts, I can tell you that our DevMonix offices in Montenegro, India, and Malaysia enjoy beautiful climates year-round. Perfect for focusing on innovative technology solutions!",
    "I understand weather is important for planning! Though I don't give weather updates, I can share that DevMonix Technologies' global locations offer diverse climates, and our remote work options let you choose your preferred weather environment!"
  ],
  
  general: [
    "That's an interesting topic! While I'm specifically designed to help with DevMonix Technologies and technology careers, I'd be happy to explore how our innovative solutions might relate to your interests. What aspect of technology or DevMonix would you like to discuss?",
    "I appreciate you sharing that with me! My expertise is focused on DevMonix Technologies and building amazing tech careers. However, I'm curious - what brought you to explore DevMonix? I'd love to help you discover our opportunities!",
    "That's fascinating! While I specialize in DevMonix Technologies and technology career paths, I'm always interested in learning what brings people to explore our company. What aspect of technology or innovation excites you most?",
    "I understand you're interested in that topic! My purpose is to help people explore DevMonix Technologies and tech careers. Perhaps we could connect your interests to how we're innovating in the technology space?"
  ]
};

// Generate intelligent redirection response
function generateRedirectionResponse(userInput: string, topicAnalysis: any, emotionAnalysis: any): string {
  const { detectedTopics, confidence } = topicAnalysis;
  const { primaryEmotion, needsSupport } = emotionAnalysis;
  
  // Select the most relevant outside topic
  const primaryTopic = detectedTopics[0] || 'general';
  const responses = redirectionResponses[primaryTopic] || redirectionResponses.general;
  
  // Get base redirection response
  let baseResponse = responses[Math.floor(Math.random() * responses.length)];
  
  // Enhance with emotional intelligence
  if (needsSupport) {
    baseResponse = `I sense this topic might be important to you, and I want to honor that while being true to my purpose. ${baseResponse}`;
  }
  
  if (primaryEmotion === 'curiosity') {
    baseResponse += " Your curiosity is wonderful, and I'd love to channel that energy into exploring DevMonix's innovative work!";
  }
  
  if (primaryEmotion === 'excitement') {
    baseResponse += " I can feel your enthusiasm! Let me channel that amazing energy into showing you some exciting things at DevMonix!";
  }
  
  return baseResponse;
}

// Enhanced topic-aware response generation
function generateTopicAwareResponse(userInput: string): string {
  const topicAnalysis = detectTopic(userInput);
  const emotionAnalysis = analyzeAdvancedEmotion(userInput);
  
  // First check for ANY type of greeting - this takes priority
  if (isGreeting(userInput)) {
    return getGreetingResponse(userInput, emotionAnalysis);
  }
  
  // If redirection is needed, handle it intelligently
  if (topicAnalysis.redirectionNeeded && topicAnalysis.confidence > 0.3) {
    return generateRedirectionResponse(userInput, topicAnalysis, emotionAnalysis);
  }
  
  // If it's DevMonix related or neutral, proceed with normal flow
  if (topicAnalysis.isDevmonixRelated || !topicAnalysis.redirectionNeeded) {
    // Try emotional intelligence first
    const emotionalIntelligence = handleEmotionalIntelligence(userInput);
    if (emotionalIntelligence.response && emotionalIntelligence.emotionalInsights.confidence > 0.3) {
      return emotionalIntelligence.response;
    }
    
    // Then try intelligent response generation
    const intelligentResponse = generateIntelligentResponse(userInput);
    if (intelligentResponse && intelligentResponse.length > 100) {
      return intelligentResponse;
    }
  }
  
  // Fallback
  return getRandomResponse('default');
}

// Comprehensive greeting detection
function isGreeting(userInput: string): boolean {
  const input = userInput.toLowerCase().trim();
  
  // Basic greetings
  const basicGreetings = [
    'hi', 'hello', 'hey', 'hey there', 'hi there', 'hello there',
    'good morning', 'good afternoon', 'good evening', 'goodnight',
    'greetings', 'salutations', 'welcome'
  ];
  
  // Casual greetings
  const casualGreetings = [
    'yo', 'sup', 'what\'s up', 'whats up', 'howdy', 'hiya',
    'hey ya', 'hey yo', 'wassup', 'wasup', 'how\'s it going',
    'how it going', 'how are you', 'how you doing', 'how you doin'
  ];
  
  // Formal greetings
  const formalGreetings = [
    'dear', 'respected', 'honored', 'pleased to meet you',
    'nice to meet you', 'nice meeting you', 'glad to meet you'
  ];
  
  // Time-based greetings
  const timeGreetings = [
    'morning', 'afternoon', 'evening', 'night', 'day'
  ];
  
  // Language variations (limited to common English-based greetings)
  const internationalGreetings = [
    'welcome', 'greetings', 'salutations'
  ];
  
  // Question-based greetings
  const questionGreetings = [
    'how are you', 'how do you do', 'how have you been',
    'how\'s everything', 'how\'s life', 'how are things'
  ];
  
  // Single character greetings
  const singleCharGreetings = ['h', 'hi', 'hey', 'yo', 'sup'];
  
  // Check all greeting categories
  const allGreetings = [
    ...basicGreetings,
    ...casualGreetings,
    ...formalGreetings,
    ...timeGreetings,
    ...internationalGreetings,
    ...questionGreetings,
    ...singleCharGreetings
  ];
  
  // Check for exact matches
  if (allGreetings.includes(input)) {
    return true;
  }
  
  // Check for partial matches
  for (const greeting of allGreetings) {
    if (input.includes(greeting) || greeting.includes(input)) {
      return true;
    }
  }
  
  // Check for greeting patterns
  const greetingPatterns = [
    /^(hi|hello|hey|yo|sup|howdy)/i,
    /^(good|greetings|welcome)/i,
    /^(nice|glad|pleased)/i,
    /^(morning|afternoon|evening|night)/i,
    /\b(hi|hello|hey)\b/i,
    /\b(how are|how do|how have)\b/i
  ];
  
  for (const pattern of greetingPatterns) {
    if (pattern.test(input)) {
      return true;
    }
  }
  
  return false;
}

// Enhanced greeting responses with emotional intelligence
function getGreetingResponse(userInput: string, emotionAnalysis: any): string {
  const input = userInput.toLowerCase().trim();
  const { primaryEmotion, intensity } = emotionAnalysis;
  
  // Categorize greeting type
  let greetingType = 'basic';
  
  if (input.includes('morning') || input.includes('afternoon') || input.includes('evening')) {
    greetingType = 'timeBased';
  } else if (input.includes('how are') || input.includes('how do')) {
    greetingType = 'question';
  } else if (['yo', 'sup', 'wassup', 'howdy'].some(word => input.includes(word))) {
    greetingType = 'casual';
  } else if (['namaste', 'bonjour', 'hola', 'ciao'].some(word => input.includes(word))) {
    greetingType = 'international';
  } else if (['dear', 'respected', 'honored'].some(word => input.includes(word))) {
    greetingType = 'formal';
  }
  
  // Base responses by type
  const baseResponses = {
    timeBased: [
      "Good morning/afternoon/evening! I'm DevBot, your AI assistant for DevMonix Technologies. Ready to explore our innovative world?",
      "What a wonderful time to connect! I'm here to help you learn about DevMonix Technologies and our amazing opportunities.",
      "Greetings at this beautiful hour! I'm excited to share how DevMonix Technologies is crafting the future of software."
    ],
    question: [
      "I'm doing wonderfully, thank you for asking! I'm DevBot, here to help you explore DevMonix Technologies. How can I assist you today?",
      "I'm functioning perfectly and excited to help! I'm your guide to DevMonix Technologies. What would you like to discover?",
      "Thank you for your kind question! I'm feeling great and ready to help you explore DevMonix's innovative world."
    ],
    casual: [
      "Hey there! I'm DevBot, your cool AI guide to DevMonix Technologies. What's on your mind?",
      "Yo! Great to connect! I'm here to help you explore DevMonix Technologies. What are you curious about?",
      "What's up! I'm DevBot, ready to show you the amazing world of DevMonix Technologies. Let's dive in!"
    ],
    international: [
      "Welcome! I'm DevBot, your AI assistant for DevMonix Technologies. Welcome to our innovative world!",
      "Greetings! I'm here to help you explore DevMonix Technologies. How can I assist you today?",
      "Welcome! I'm DevBot, your guide to DevMonix Technologies. Let's explore together!"
    ],
    formal: [
      "A pleasure to meet you! I'm DevBot, your distinguished AI assistant for DevMonix Technologies. How may I be of service?",
      "Honored to connect with you! I'm here to provide comprehensive information about DevMonix Technologies.",
      "Respected greetings! I'm DevBot, your professional guide to DevMonix Technologies' innovative solutions."
    ],
    basic: [
      "Hi! I'm DevBot, your AI assistant for DevMonix Technologies. I'm here to help you learn about our innovative software solutions and career opportunities. How can I assist you today?",
      "Welcome to DevMonix Technologies! I'm excited to share how we're crafting cutting-edge software solutions with precision. What would you like to explore?",
      "Hello! I'm your guide to DevMonix Technologies. Whether you're interested in our services or want to join our team, I'm here to help!"
    ]
  };
  
  // Get base response
  const responses = baseResponses[greetingType] || baseResponses.basic;
  let baseResponse = responses[Math.floor(Math.random() * responses.length)];
  
  // Enhance with emotional intelligence
  if (primaryEmotion === 'excitement' || primaryEmotion === 'joy') {
    baseResponse += " I can feel your positive energy - let's channel that into exploring something amazing!";
  } else if (primaryEmotion === 'curiosity') {
    baseResponse += " Your curiosity is wonderful - I love exploring with inquisitive minds like yours!";
  } else if (primaryEmotion === 'anxiety') {
    baseResponse += " Take a deep breath - I'm here to make this exploration easy and stress-free for you.";
  }
  
  return baseResponse;
}

// Comprehensive response categories for DevMonix AI assistant
const mockResponses: { [key: string]: string[] } = {
  greeting: [
    "Hi! I'm DevBot, your AI assistant for DevMonix Technologies. I'm here to help you learn about our innovative software solutions and career opportunities. How can I assist you today?",
    "Welcome to DevMonix Technologies! I'm excited to share how we're crafting cutting-edge software solutions with precision. What would you like to explore?",
    "Hello! I'm your guide to DevMonix Technologies. Whether you're interested in our services or want to join our team, I'm here to help!"
  ],
  company: [
    "DevMonix Technologies is a global product engineering studio delivering secure, scalable digital platforms for enterprises. We specialize in crafting cutting-edge software solutions tailored to your needs, from concept to deployment.",
    "We're a team of 400+ engineers across 9 Technology Excellence Groups, including AI/ML, DevOps, Big Data, and Blockchain. DevMonix has delivered over 100 products for startups and enterprises globally.",
    "At DevMonix, we build the future today through innovative software development. Our global presence spans Podgorica (Montenegro), Kochi (India), and Kuala Lumpur (Malaysia), serving clients across APAC, EMEA, and beyond."
  ],
  services: [
    "Our core services include AI platforms, DevOps consulting, product engineering, cloud modernization, logistics ERP, AI Code Generation, and AI Chatbots. We deliver enterprise-grade solutions with precision.",
    "We specialize in AI-Native Product Engineering & Enterprise Solutions, helping businesses transform their digital infrastructure with cutting-edge technology.",
    "DevMonix offers comprehensive software development services from concept to deployment, including AI/ML development, DevOps optimization, and cloud-native solutions."
  ],
  careers: [
    "We're always looking for talented developers to join our global team! With 400+ engineers across multiple locations, we offer opportunities in AI/ML, DevOps, Big Data, Blockchain, and full-stack development.",
    "Join DevMonix and be part of a team that's delivered over 100 products for startups and enterprises. We value innovation, collaboration, and continuous learning with an average client tenure of 30 months.",
    "At DevMonix, you'll work on cutting-edge projects across our Technology Excellence Groups. We offer career growth, global exposure, and the chance to build software that matters."
  ],
  culture: [
    "Our culture is built on innovation, precision, and collaboration. We empower our engineers to work autonomously while providing the support needed for professional growth and learning.",
    "We celebrate diverse perspectives and foster an inclusive environment where creativity thrives. Our global teams work across time zones, bringing unique insights to every project.",
    "At DevMonix, we believe in work-life balance and continuous learning. Our culture encourages experimentation, knowledge sharing, and taking ownership of challenging problems."
  ],
  technologies: [
    "Our tech stack includes AI/ML frameworks, cloud platforms (AWS, Azure, GCP), DevOps tools (Jenkins, Docker, Kubernetes), and modern web technologies. We stay at the forefront of technological innovation.",
    "We work with cutting-edge technologies including Generative AI, Big Data analytics, Blockchain, IoT, and enterprise software development tools that power digital transformation.",
    "DevMonix engineers work with the latest in AI Code Generation, cloud-native architectures, microservices, and scalable backend systems that serve millions of users globally."
  ],
  contact: [
    "You can reach our sales team at +91 906 140 2804 or sales@devmonix.io. For customer support, call +62 217 697 9789. We're here to help with your software development needs.",
    "Connect with us on LinkedIn (devmonix.io), GitHub (devmonixtechnologies), or Twitter (@devmonixtech). We'd love to hear from you about your project ideas or career interests.",
    "Visit our offices in Podgorica (Montenegro), Kochi (India), or Kuala Lumpur (Malaysia). Our global team is ready to assist with your enterprise software needs."
  ],
  clients: [
    "We serve startups and enterprises across the US, Europe, India, and APAC regions. Our clients trust us for delivering innovative software solutions with precision and reliability.",
    "DevMonix has built long-term relationships with clients, evidenced by our average client tenure of 30 months. We deliver consistent value through our Technology Excellence Groups.",
    "Our global client base spans multiple industries, from logistics and ERP to AI platforms and enterprise solutions. We adapt to diverse business needs with tailored approaches."
  ],
  innovation: [
    "Innovation is at our core - we're constantly exploring AI, ML, IoT, and emerging technologies to solve complex business challenges. Our R&D efforts keep us ahead of industry trends.",
    "We invest heavily in research and development, particularly in AI Code Generation, cloud-native architectures, and digital transformation technologies that shape the future.",
    "At DevMonix, innovation isn't just about technology - it's about finding creative solutions to real business problems. Our 400+ engineers contribute to our innovation ecosystem daily."
  ],
  default: [
    "That's an interesting question! While I focus on DevMonix Technologies' services, careers, and company information, I'd be happy to help with related topics. What specific aspect would you like to explore?",
    "I'm here to help with information about DevMonix Technologies. Could you tell me more about what you're looking for - our services, career opportunities, or something else?",
    "I'd love to assist you better! Feel free to ask me about our software solutions, company culture, career opportunities, or how we can help with your digital transformation needs."
  ]
};

// Enhanced response generation with perfect emotional intelligence and topic awareness
function getMockResponse(userInput: string): string {
  // Use the new topic-aware response generation
  return generateTopicAwareResponse(userInput);
}

function getRandomResponse(category: string): string {
  const responses = mockResponses[category] || mockResponses.default;
  return responses[Math.floor(Math.random() * responses.length)];
}

// Initialize DevMonix AI (perfect emotional intelligence implementation)
export const initializeDevMonixAI = async (): Promise<void> => {
  console.log('DevMonix AI Service initialized with PERFECT emotional intelligence and advanced NLP capabilities');
  console.log('Emotional patterns loaded:', Object.keys(emotionalPatterns).length, 'emotion states');
  console.log('Knowledge base categories:', Object.keys(knowledgeBase).length, 'major domains');
  return Promise.resolve();
};

// Enhanced message handling with perfect emotional intelligence and streaming
export const sendMessageToDevMonixAI = async function* (message: string): AsyncGenerator<string> {
  // Simulate processing delay with variation based on complexity and emotional content
  const emotionalAnalysis = analyzeAdvancedEmotion(message);
  const baseProcessingTime = Math.min(message.length * 20, 3000);
  const emotionalMultiplier = emotionalAnalysis.needsSupport ? 1.5 : 1.0;
  const processingTime = baseProcessingTime * emotionalMultiplier;
  
  await new Promise(resolve => setTimeout(resolve, processingTime));
  
  // Get emotionally intelligent response
  const response = getMockResponse(message);
  
  // Enhanced streaming with natural word grouping and emotional pacing
  const words = response.split(' ');
  let currentResponse = '';
  
  // Adjust streaming pace based on emotional content
  const baseDelay = emotionalAnalysis.needsSupport ? 50 : 30;
  const delayVariation = emotionalAnalysis.primaryEmotion === 'joy' ? 20 : 15;
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    currentResponse += (currentResponse ? ' ' : '') + word;
    
    // Group words naturally for better emotional flow
    if (i % 2 === 1 || i === words.length - 1) {
      yield currentResponse;
      await new Promise(resolve => setTimeout(resolve, baseDelay + Math.random() * delayVariation));
    }
  }
  
  // If emotional support was provided, consider adding follow-up
  if (emotionalAnalysis.needsSupport && emotionalContext.connectionLevel > 0.5) {
    // Small pause before potential follow-up
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

// Enhanced utility functions
export const getDevMonixInfo = (): string => {
  return knowledgeBase.devmonix.overview;
};

export const getCareerOpportunities = (): string[] => {
  return Object.keys(knowledgeBase.careers.roles);
};

export const getCompanyLocations = (): string[] => {
  return ["Podgorica, Montenegro (Gorica Park)", "Kochi, India (Infopark, Kerala)", "Kuala Lumpur, Malaysia (Bukit Bintang)"];
};

export const getTechnologyExcellenceGroups = (): string[] => {
  return Object.keys(knowledgeBase.technologies);
};

export const getKnowledgeBase = () => knowledgeBase;
