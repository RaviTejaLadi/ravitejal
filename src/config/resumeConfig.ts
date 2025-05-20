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

export interface Achievements {
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
  Achievements?: Achievements[];
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
    summary: `Experienced Software Developer with more than 3 years of experience and specializing in modern web development,
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
    { name: 'TypeScript', category: 'Technical' },
    { name: 'JavaScript', category: 'Technical' },
    { name: 'React', category: 'Technical' },
    { name: 'Tailwind', category: 'Technical' },
    { name: 'Node js', category: 'Technical' },
    { name: 'Express js', category: 'Technical' },
    { name: 'Mongo DB', category: 'Technical' },
    { name: 'Vs Code', category: 'Technical' },
    { name: 'Git', category: 'Technical' },
    { name: 'GitHub', category: 'Technical' },

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
        'Led the development of a digital trade financing platform, enabling seamless transactions between stakeholders in short-term trade finance.',
        'The project architecture follows a micro-frontend approach, where each feature is developed and deployed as an independent micro-frontend.',
        'Owned 90% of the frontend responsibilities, including new feature development, enhancements, and bug fixes.',
        'Built and maintained key features such as user authentication, interactive dashboards, data-driven UI components. and come core features like trade, trade partner etc...',
        'Collaborated closely with cross-functional teams (backend, product, and design) to define, design, and deliver high-quality features.',
        'Integrated RESTful APIs and third-party libraries to enhance platform functionality and streamline the user experience.',
        'Established and enforced frontend coding standards, implemented best practices, and led code review processes to ensure code quality and maintainability.',
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
      name: 'Kalki UI - open source component library',
      technologies: ['React', 'Typescript', 'Tailwind'],
      description: `Component library built with React and Tailwind CSS, providing reusable UI components for developers.`,
    },
    {
      name: 'Kalki UI Toast - open source component library',
      technologies: ['React', 'Typescript', 'Tailwind'],
      description: 'Built a customizable toast notification component for React applications',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Mechanical Engineering',
      university: 'Centurion University of Technology and Management',
      yearOfCompletion: 2020,
    },
  ],
  Achievements: [
    {
      name: 'Quarterly Award',
      issuedBy: 'Idexcel Technologies Private Limited',
      year: 2023,
    },
    {
      name: 'AWS Certified Developer - Associate',
      issuedBy: 'Idexcel Technologies Private Limited',
      year: 2024,
    },
    {
      name: 'Certificate of Appreciation',
      issuedBy: 'Aventisia Technologies Private Limited',
      year: 2025,
    },
  ],
  languages: [
    { language: 'Telegu', proficiency: 'Native' },
    { language: 'English', proficiency: 'Full Professional Proficiency' },
    { language: 'Hindi', proficiency: 'Speak' },
  ],
};
