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
  yearOfCompletion?: number;
  duration?: string;
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
  certifications?: string[];
  openSourceContributions?: OpenSourceContribution[];
  languages?: { language: string; proficiency: string }[];
  additionalInfo?: {
    awards?: string[];
    interests?: string[];
  };
}

export const resumeConfig: ResumeConfig = {
  personalInfo: {
    fullName: 'Ravi Teja Ladi',
    title:
      'Sr. Software Engineer | 4+ yrs React.js, Next.js | TypeScript, Zustand, Redux, Hooks | Node.js, Express, MongoDB | Full-Stack JS Developer',
    location: 'Bengaluru, Karnataka, India',
    summary: `Passionate software engineer specializing in scalable front-end solutions with JavaScript, React.js, and Node.js to deliver seamless user experiences. I worked closely with cross-functional teams to enhance application maintainability, drive high-performance outcomes, and meet project goals. With a Bachelor of Technology in Mechanical Engineering from Centurion University, I successfully transitioned into software engineering to create impactful digital solutions. I bring strong expertise in modern frameworks like React.js and Node.js, with a focus on problem-solving, team collaboration, and building user-centric applications. I'm passionate about fostering teamwork and delivering meaningful digital experiences.`,
  },
  contact: {
    phone: '+91 8847819634',
    email: 'ladi.ravi884781@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ravi-teja-ladi/',
    github: 'https://github.com/RaviTejaLadi',
    portfolio: 'https://ravitejaladi.vercel.app/',
  },
  skills: [
    { name: 'JavaScript', category: 'Technical' },
    { name: 'TypeScript', category: 'Technical' },
    { name: 'React', category: 'Technical' },
    { name: 'Next.js', category: 'Technical' },
    { name: 'Node.js', category: 'Technical' },
    { name: 'Express', category: 'Technical' },
    { name: 'MongoDB', category: 'Technical' },
    { name: 'Tailwind CSS', category: 'Technical' },
    { name: 'React Flow', category: 'Technical' },
    { name: 'shadcn/ui', category: 'Technical' },
    { name: 'React Query', category: 'Technical' },
    { name: 'Material UI', category: 'Technical' },
    { name: 'PWAs', category: 'Technical' },
    { name: 'Web Interface Design', category: 'Technical' },
    { name: 'Front-End Design', category: 'Technical' },
    { name: 'Git', category: 'Technical' },
    { name: 'GitHub', category: 'Technical' },

    { name: 'Problem Solving', category: 'Soft' },
    { name: 'Team Collaboration', category: 'Soft' },
    { name: 'Communication', category: 'Soft' },
    { name: 'Adaptability', category: 'Soft' },
  ],
  workExperience: [
    {
      company: 'FluidFit.ai',
      title: 'Sr. Software Developer',
      duration: 'July 2025 - Present',
      responsibilities: [
        'Own and drive the frontend architecture at FluidFit.ai, building scalable, high-performance web applications.',
        'Own the entire frontend codebase architecture, performance, scalability, and maintainability.',
        'Design and build complex UI workflows using React.js, TypeScript, and modern frontend tooling.',
        'Translate product and AI requirements into clean, reusable, production-ready components.',
        'Optimize rendering, state management, and bundle size for real-world performance.',
        'Collaborate directly with backend, AI, and product teams to ship features end-to-end.',
        'Lead frontend decisions, set coding standards, and fix hard problems — performance bottlenecks, rendering issues, and edge cases.',
        "Take responsibility for how the product feels, performs, and scales as the company grows.",
      ],
    },
    {
      company: 'Aventisia',
      title: 'Senior Software Engineer',
      duration: 'September 2024 - June 2025',
      responsibilities: [
        'Led the development of a digital trade financing platform, enabling seamless transactions between stakeholders in short-term trade finance.',
        'The project architecture follows a micro-frontend approach, where each feature is developed and deployed as an independent micro-frontend.',
        'Owned 90% of the frontend responsibilities, including new feature development, enhancements, and bug fixes.',
        'Built and maintained key features such as user authentication, interactive dashboards, and data-driven UI components and core features like trade, trade partner, etc.',
        'Collaborated closely with cross-functional teams (backend and design) to define, design, and deliver high-quality features.',
        'Integrated RESTful APIs and third-party libraries to enhance platform functionality and streamline the user experience.',
        'Established and enforced frontend coding standards, implemented best practices, and led code review processes to ensure code quality and maintainability.',
      ],
    },
    {
      company: 'Idexcel',
      title: 'Software Engineer',
      duration: 'October 2022 - August 2024',
      responsibilities: [
        'Created responsive web applications using React and JavaScript.',
        'Managed multiple environments (dev, test, demo, sandbox) for InferIQ, ensuring smooth deployment across all development stages.',
        'Developed high-performance services, including Extraction, Bank Statement Analysis, and Financial Statement Processing, achieving a 90% improvement in speed and performance.',
        'Handled 98% of frontend work, including enhancements and bug fixes.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Implemented state management solutions using Redux Toolkit and Zustand.',
        'Worked with RESTful APIs and integrated third-party libraries.',
        'Established coding standards, best practices, and led code review processes.',
      ],
    },
    {
      company: 'Test Yantra',
      title: 'Software Engineer Intern',
      duration: 'April 2022 - October 2022',
      responsibilities: [
        'Completed MERN stack internship and training, building foundational full-stack development skills.',
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
      name: 'Kalki UI Toast - open source Toast library',
      technologies: ['React', 'Typescript', 'Tailwind'],
      description: 'Built a customizable toast notification component for React applications.',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology, Mechanical Engineering',
      university: 'Centurion University of Technology and Management',
      yearOfCompletion: 2020,
      duration: 'June 2016 - April 2020',
    },
    {
      degree: '+2, MPC',
      university: 'Sri Chaitanya Junior College',
      duration: '2015 - 2016',
    },
    {
      degree: '4th Class to 10th Class',
      university: 'Alluri Sita Ramaraju Public School, Araku Valley',
      duration: '2008 - 2014',
    },
  ],
  Achievements: [
    {
      name: 'Quarterly Award',
      issuedBy: 'Idexcel Technologies Private Limited',
      year: 2023,
    },
    {
      name: 'Award of Excellence',
      issuedBy: 'Idexcel Technologies Private Limited',
      year: 2024,
    },
    {
      name: 'Certificate of Appreciation',
      issuedBy: 'Aventisia Technologies Private Limited',
      year: 2025,
    },
  ],
  certifications: ['NamasteDev Node.js', 'MERN Stack', 'OWASP Proactive Controls'],
  languages: [
    { language: 'Telugu', proficiency: 'Full Professional' },
    { language: 'Hindi', proficiency: 'Professional Working' },
    { language: 'English', proficiency: 'Professional Working' },
  ],
};
