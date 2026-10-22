
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'rag-resume-matching',
    title: 'RAG-Based Resume & Job Profile Matching System',
    description:
      'Developed a resume and job-description matching approach using Retrieval-Augmented Generation (RAG). The pipeline parses PDF, DOCX, and TXT documents into section-aware chunks, creates 384-dimensional embeddings with Sentence Transformers, and stores them in ChromaDB. Hybrid retrieval combines BM25 keyword search and semantic vector similarity to identify relevant candidate information for structured LLM-based matching.',
    tags: ['Python', 'RAG', 'ChromaDB', 'BM25', 'Sentence Transformers', 'Embeddings'],
    image: '',
    link: 'https://github.com/kandukurimanjushareddy',
  },
  {
    id: 'localai',
    title: 'LocalAI — Human-in-the-Loop Hyperlocal AI Knowledge Platform',
    description:
      'Designed a hyperlocal AI knowledge platform for questions involving rapidly changing local information. The proposed workflow uses LangGraph for query classification, retrieval, and human verification when information is missing or outdated. The architecture incorporates LangChain, Sentence Transformer embeddings, ChromaDB, RAG, and LangSmith for workflow tracing and evaluation.',
    tags: ['Python', 'LangChain', 'LangGraph', 'LangSmith', 'ChromaDB', 'RAG'],
    image: '',
    link: 'https://github.com/kandukurimanjushareddy',
  },
];

export const SKILLS: Skill[] = [
  // Programming languages
  { name: 'Python', category: 'Frontend' },
  { name: 'SQL', category: 'Frontend' },
  { name: 'C++', category: 'Frontend' },
  { name: 'Java', category: 'Frontend' },

  // Data science and machine learning
  { name: 'Pandas', category: 'Backend' },
  { name: 'NumPy', category: 'Backend' },
  { name: 'Matplotlib', category: 'Backend' },
  { name: 'Scikit-learn', category: 'Backend' },
  { name: 'Data Cleaning', category: 'Backend' },
  { name: 'Feature Engineering', category: 'Backend' },
  { name: 'Regression', category: 'Backend' },
  { name: 'Classification', category: 'Backend' },
  { name: 'Decision Trees', category: 'Backend' },
  { name: 'Model Training & Validation', category: 'Backend' },

  // Generative AI and retrieval concepts
  { name: 'NLP', category: 'Design' },
  { name: 'LLMs', category: 'Design' },
  { name: 'Prompt Engineering', category: 'Design' },
  { name: 'Embeddings', category: 'Design' },
  { name: 'Semantic Search', category: 'Design' },
  { name: 'BM25', category: 'Design' },
  { name: 'RAG', category: 'Design' },
  { name: 'Vector Databases', category: 'Design' },
  { name: 'LangChain', category: 'Design' },
  { name: 'LangGraph', category: 'Design' },
  { name: 'LangSmith', category: 'Design' },

  // Tools and frameworks
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
