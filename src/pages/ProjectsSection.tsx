import { Card, CardContent } from '../components/ui/card';
import rue from '../assets/rue.png';
import kalkiUi from '../assets/kalkiUi.png';
import kalkiUiToast from '../assets/kalkiUiToast.png';
import ruei from '../assets/ruei.png';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Css, JavaScript, React, Tailwind, TypeScript } from '@/assets/technologies';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Kalki UI',
      description: `Kalki UI showcases a React UI component library designed to provide developers with a collection of reusable components for building modern web applications. While specific details about the library's features, components, and documentation are not provided in the available sources, the site likely offers insights into the design philosophy, component offerings, and usage guidelines for Kalki UI.`,
      image: kalkiUi,
      tags: [
        <React className="w-4 h-4" />,
        <Tailwind className="w-4 h-4" />,
        <TypeScript className="w-4 h-4" />,
        <Css className="w-4 h-4" />,
        'npm',
      ],
      link: 'https://kalki-ui.vercel.app/',
    },
    {
      title: 'Kalki UI Toast',
      description: `Kalki UI Toast is a beautiful toast notifications.A lightweight, customizable, and accessible toast notification system built with React and Tailwind CSS.`,
      image: kalkiUiToast,
      tags: [
        <React className="w-4 h-4" />,
        <Tailwind className="w-4 h-4" />,
        <TypeScript className="w-4 h-4" />,
        <Css className="w-4 h-4" />,
        'npm',
      ],
      link: 'https://kalki-ui-toast-docs.vercel.app/',
    },
    {
      title: 'React UI Essentials',
      description:
        'React UI Essentials serves as a curated reference for developers working with React. It provides an organized collection of popular React UI component libraries, offering a centralized hub to explore and compare various UI frameworks.',
      image: rue,
      tags: [
        <React className="w-4 h-4" />,
        <JavaScript className="w-4 h-4" />,
        <Css className="w-4 h-4" />,
        'npm',
      ],
      link: 'https://react-ui-essentials.vercel.app/',
    },
    {
      title: 'React UI Essentials Icons',
      description:
        'react-ui-essentials-icons is a lightweight React library that provides a comprehensive set of icons for your React applications. Designed for ease of use and flexibility, this package allows you to quickly integrate high-quality icons into your project',
      image: ruei,
      tags: [
        <React className="w-4 h-4" />,
        <JavaScript className="w-4 h-4" />,
        <Css className="w-4 h-4" />,
        'npm',
      ],
      link: 'https://react-ui-essentials-icons.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Open Source Featured Projects</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/15 group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <span className="text-white/90 p-2 rounded-full bg-black/20 group-hover:text-primary transition-colors">
                      <ExternalLink className="text-current" size={18} />
                    </span>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div>
                    <p className="text-xs text-muted-foreground">Tech stack:</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant={'outline'}
                          className="border-primary/30 bg-primary/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>{' '}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
