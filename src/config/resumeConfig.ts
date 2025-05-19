export interface Contact {
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft';
}

export interface Experience {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  technologies: string[];
  description: string;
  role?: string;
  link?: string;
}

export interface Education {
  degree: string;
  university: string;
  yearOfCompletion: number;
}

export interface Certification {
  name: string;
  issuedBy: string;
  year: number;
}

export interface OpenSourceContribution {
  project: string;
  description: string;
  link: string;
}

export interface ResumeConfig {
  personalInfo: {
    fullName: string;
    title: string;
    location: string;
    summary: string;
  };
  contact: Contact;
  skills: Skill[];
  workExperience: Experience[];
  projects: Project[];
  education: Education[];
  certifications?: Certification[];
  openSourceContributions?: OpenSourceContribution[];
  languages?: { language: string; proficiency: string }[];
  additionalInfo?: {
    awards?: string[];
    interests?: string[];
  };
}

export const resumeConfig: ResumeConfig = {
  personalInfo: {
    fullName: 'Ravi Teja',
    title: 'Software Developer',
    location: 'India',
    summary: `Experienced Software Developer specializing in modern web development,
     with a strong focus on building scalable and efficient front-end applications using React.js.
      Proven expertise in crafting intuitive user interfaces, implementing responsive design principles,
       Adept in JavaScript, TypeScript, and associated frameworks, with hands-on experience in state management (zustand, Redux-toolkit, Context API), routing (React Router), and performance optimization. Demonstrated ability to collaborate across teams, solve complex technical problems, and deliver high-quality software solutions aligned with business goals.`,
  },
  contact: {
    phone: '+91 8847819634',
    email: 'ladi.ravi884781@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ravi-teja-2a2989145/',
    github: 'https://github.com/RaviTejaLadi',
  },
  skills: [
    // Technical Skills
    { name: 'JavaScript', category: 'Technical' },
    { name: 'TypeScript', category: 'Technical' },
    { name: 'React', category: 'Technical' },
    { name: 'Tailwind', category: 'Technical' },
    { name: 'Next.js', category: 'Technical' },
    { name: 'AWS', category: 'Technical' },
    { name: 'Azure', category: 'Technical' },
    { name: 'Python', category: 'Technical' },

    // Soft Skills
    { name: 'Problem Solving', category: 'Soft' },
    { name: 'Team Collaboration', category: 'Soft' },
    { name: 'Communication', category: 'Soft' },
    { name: 'Adaptability', category: 'Soft' },
  ],
  workExperience: [
    {
      company: 'Aventisia Technologies Private Limited',
      title: 'Senior Software Developer',
      duration: 'Sep 2024 - Present',
      responsibilities: [
        'Developed microservices using Python and GoLang',
        'Integrated AI-driven solutions into existing applications',
        'Optimized cloud infrastructure reducing operational costs by 20%',
      ],
    },
    {
      company: 'Idexcel Technologies private ltd',
      title: 'Software Developer',
      duration: 'Oct 2022 - Aug 2024',
      responsibilities: [
        'Created responsive web applications using React and JavaScript',
        'Managed multiple environments (dev, test, demo, sandbox) for InferIQ, ensuring smooth deployment across all development stages.',
        'Developed high-performance services including Extraction, Bank statement analysis, and Financial statement processing, achieving 90% improvement in speed and performance.',
        'Handled 98% of frontend work, including enhancements and bug fixes.',
        'Collaborated with cross-functional teams to define, design, and ship new features',
        'Implemented state management solutions with Redux-toolkit and Zustand',
        'Worked with RESTful APIs and integrated third-party libraries',
        'Established coding standards, best practices, and code review processes',
      ],
    },
  ],
  projects: [
    {
      name: 'FlowPandas',
      technologies: ['Python', 'Microservices'],
      description: 'Developed a data processing microservice to streamline workflow management',
      role: 'Lead Developer',
    },
    {
      name: 'AI Voice Assistant',
      technologies: ['Python', 'Machine Learning', 'NLP'],
      description:
        'Built an intelligent voice-based assistant with natural language processing capabilities',
      role: 'Full Stack Developer',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Mechanical Engineering',
      university: 'Centurion University of Technology and Management',
      yearOfCompletion: 2020,
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer - Associate',
      issuedBy: 'Amazon Web Services',
      year: 2022,
    },
  ],
  languages: [
    { language: 'Telegu', proficiency: 'Native' },
    { language: 'English', proficiency: 'Full Professional Proficiency' },
    { language: 'Hindi', proficiency: 'Speak' },
    { language: 'Odia', proficiency: 'Speak' },
  ],
  additionalInfo: {
    awards: ['Best Innovative Project - University Hackathon 2018'],
    interests: ['Open Source Contribution', 'Machine Learning', 'Tech Innovation'],
  },
};
