import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-cli',
    title: 'AI-Assisted CLI',
    description: 'An AI-assisted Command Line Interface tool that interprets natural language input and converts it into executable system commands using NLP APIs.',
    tags: ['Python', 'OpenAI API', 'CLI', 'NLP'],
    image: '',
  },
  {
    id: 'herbal-garden',
    title: 'Herbal Garden Platform',
    description: 'A full-stack educational management system using Java backend and MySQL database following MVC architecture with role-based access control.',
    tags: ['Java', 'MySQL', 'HTML', 'CSS', 'JDBC'],
    image: '',
  },
  {
    id: 'food-spoilage',
    title: 'IoT Food Spoilage Detection',
    description: 'Real-time IoT-based food spoilage detection system integrating hardware sensors with Python-based data processing for environmental monitoring.',
    tags: ['Python', 'Raspberry Pi', 'Sensors', 'IoT'],
    image: '',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Frontend' },
  { name: 'Java', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Rust', category: 'Frontend' },
  { name: 'React', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Next.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'TensorFlow', category: 'Backend' },
  { name: 'MySQL', category: 'Tools' },
  { name: 'PostgreSQL', category: 'Tools' },
  { name: 'MongoDB', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'DSA', category: 'Design' },
  { name: 'Algorithms', category: 'Design' },
  { name: 'DBMS', category: 'Design' },
  { name: 'OS', category: 'Design' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SRM Institute of Science and Technology',
    role: 'Event Organizing Volunteer',
    period: 'Feb 2025',
    description: 'Assisted in organizing SRM Milan, coordinating logistics and event operations. Collaborated with cross-functional teams to manage schedules and registrations.',
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
  calendly: 'https://calendly.com/kandukurimanjusha/30min'
};
