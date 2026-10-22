
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'rag-resume-matching',
    title: 'RAG-Based Resume & Job Profile Matching System',
    description:
      'Built a Retrieval-Augmented Generation (RAG) system to match resumes with job descriptions. Parses PDF, DOCX, and TXT resumes into section-aware chunks, generates 384-dimensional embeddings using Sentence Transformers, and stores them in ChromaDB. Combines BM25 keyword search with semantic vector search to retrieve relevant candidate information and provide structured, LLM-based candidate-job matching.',
    tags: [
      'Python',
      'Sentence Transformers',
      'ChromaDB',
      'BM25',
      'Embeddings',
      'RAG',
    ],
    image: '',
  },
  {
    id: 'localai',
    title: 'LocalAI — Human-in-the-Loop Hyperlocal AI Knowledge Platform',
    description:
      'Designed a hyperlocal AI knowledge platform for questions involving rapidly changing local information. Uses LangGraph to orchestrate query classification, retrieval, and human verification when information is missing or outdated. Integrates LangChain-based retrieval, Sentence Transformer embeddings, ChromaDB, RAG, and LangSmith for tracing and evaluation.',
    tags: [
      'Python',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'FastAPI',
      'ChromaDB',
      'RAG',
    ],
    image: '',
  },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'Java', category: 'Programming' },

  // Data Science and Machine Learning
  { name: 'Pandas', category: 'Data Science' },
  { name: 'NumPy', category: 'Data Science' },
  { name: 'Matplotlib', category: 'Data Science' },
  { name: 'Scikit-learn', category: 'Data Science' },
  { name: 'Data Cleaning', category: 'Data Science' },
  { name: 'Feature Engineering', category: 'Data Science' },
  { name: 'Regression', category: 'Data Science' },
  { name: 'Classification', category: 'Data Science' },
  { name: 'Decision Trees', category: 'Data Science' },
  { name: 'Model Training & Validation', category: 'Data Science' },

  // Generative AI and Retrieval
  { name: 'NLP', category: 'Generative AI' },
  { name: 'LLMs', category: 'Generative AI' },
  { name: 'Prompt Engineering', category: 'Generative AI' },
  { name: 'Embeddings', category: 'Generative AI' },
  { name: 'Semantic Search', category: 'Generative AI' },
  { name: 'BM25', category: 'Generative AI' },
  { name: 'RAG', category: 'Generative AI' },
  { name: 'Vector Databases', category: 'Generative AI' },
  { name: 'LangChain', category: 'Generative AI' },
  { name: 'LangGraph', category: 'Generative AI' },
  { name: 'LangSmith', category: 'Generative AI' },

  // Tools and Frameworks
  { name: 'ChromaDB', category: 'Tools' },
  { name: 'Sentence Transformers', category: 'Tools' },
  { name: 'FastAPI', category: 'Tools' },
  { name: 'Jupyter', category: 'Tools' },
  { name: 'Google Colab', category: 'Tools' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SRM Institute of Science and Technology',
    role: 'Event Organizing Volunteer',
    period: 'Feb 2025',
    description:
      'Assisted in organizing SRM Milan, coordinating logistics and event operations. Collaborated with cross-functional teams to manage schedules and registrations.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
  },
  {
    title: 'GeeksforGeeks – DSA to Development',
    issuer: 'GeeksforGeeks',
    date: '2025',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/kandukurimanjushareddy',
  linkedin: 'https://www.linkedin.com/in/manjusha-manju-897198295/',
  email: 'km9960@srmist.edu.in',
  calendly: 'https://calendly.com/kandukurimanjusha/30min',
};
