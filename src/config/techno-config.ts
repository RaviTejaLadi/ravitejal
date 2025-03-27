import { Tailwind, OpenAi, TypeScript, claude, JavaScript } from '../assets/technologies';
export const technoConfig = {
  title: "Technologies I've worked with",
  tabTriggers: [
    { value: 'mostUsed', label: 'Most Used' },
    { value: 'languages', label: 'Languages' },
    { value: 'webDev', label: 'Web Dev' },
    { value: 'devopsTools', label: 'DevOps & Tools' },
  ],
  tabContent: [
    {
      value: 'mostUsed',
      content: [
        { icon: TypeScript, tooltip: 'TypeScript' },
        { icon: JavaScript, tooltip: 'JavaScript' },
        { icon: Tailwind, tooltip: 'Tailwind' },
        { icon: OpenAi, tooltip: 'OpenAi' },
        { icon: claude, tooltip: 'claude' },
      ],
    },
    { value: 'languages', content: [] },
    { value: 'webDev', content: [] },
    { value: 'devopsTools', content: [] },
  ],
};
