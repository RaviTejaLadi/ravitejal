import type { ComponentType } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Css, JavaScript, React, Tailwind, TypeScript } from '@/assets/technologies';

const kalkiUi = '/images/kalkiUi.webp';
const kalkiUiToast = '/images/kalkiUiToast.webp';
const rue = '/images/rue.webp';
const ruei = '/images/ruei.webp';

type TechIcon = ComponentType<{ className?: string }>;

type ProjectTag = {
  label: string;
  icon?: TechIcon;
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: ProjectTag[];
};

const projects: Project[] = [
  {
    title: 'Kalki UI',
    description: `Kalki UI showcases a React UI component library designed to provide developers with a collection of reusable components for building modern web applications. While specific details about the library's features, components, and documentation are not provided in the available sources, the site likely offers insights into the design philosophy, component offerings, and usage guidelines for Kalki UI.`,
    image: kalkiUi,
    link: 'https://kalki-ui.vercel.app/',
    tags: [
      { label: 'React', icon: React },
      { label: 'Tailwind', icon: Tailwind },
      { label: 'TypeScript', icon: TypeScript },
      { label: 'CSS', icon: Css },
      { label: 'npm' },
    ],
  },
  {
    title: 'Kalki UI Toast',
    description: `Kalki UI Toast is a beautiful toast notifications.A lightweight, customizable, and accessible toast notification system built with React and Tailwind CSS.`,
    image: kalkiUiToast,
    link: 'https://kalki-ui-toast-docs.vercel.app/',
    tags: [
      { label: 'React', icon: React },
      { label: 'Tailwind', icon: Tailwind },
      { label: 'TypeScript', icon: TypeScript },
      { label: 'CSS', icon: Css },
      { label: 'npm' },
    ],
  },
  {
    title: 'React UI Essentials',
    description:
      'React UI Essentials serves as a curated reference for developers working with React. It provides an organized collection of popular React UI component libraries, offering a centralized hub to explore and compare various UI frameworks.',
    image: rue,
    link: 'https://react-ui-essentials.vercel.app/',
    tags: [
      { label: 'React', icon: React },
      { label: 'JavaScript', icon: JavaScript },
      { label: 'CSS', icon: Css },
      { label: 'npm' },
    ],
  },
  {
    title: 'React UI Essentials Icons',
    description:
      'react-ui-essentials-icons is a lightweight React library that provides a comprehensive set of icons for your React applications. Designed for ease of use and flexibility, this package allows you to quickly integrate high-quality icons into your project',
    image: ruei,
    link: 'https://react-ui-essentials-icons.vercel.app/',
    tags: [
      { label: 'React', icon: React },
      { label: 'JavaScript', icon: JavaScript },
      { label: 'CSS', icon: Css },
      { label: 'npm' },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Open Source Featured Projects</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.link}
              className="glass-card win-card-interactive group h-full overflow-hidden"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                  />
                  <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-[4px] bg-black/55 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
                <CardContent className="flex flex-1 flex-col gap-2 p-3.5">
                  <h3 className="line-clamp-1 text-base font-semibold tracking-tight group-hover:text-link">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.label}
                        variant="outline"
                        className="h-6 gap-1 rounded-[4px] border-border bg-[#F3F3F3] px-1.5 font-medium text-foreground dark:bg-[#282828]"
                      >
                        {tag.icon ? <tag.icon className="size-3.5" /> : null}
                        <span>{tag.label}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
