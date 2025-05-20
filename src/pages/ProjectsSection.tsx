import { Card, CardContent } from '../components/ui/card';
import rue from '../assets/rue.png';
import kalkiUi from '../assets/kalkiUi.png';
import kalkiUiToast from '../assets/kalkiUiToast.png';
import ruei from '../assets/ruei.png';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Kalki UI',
      description: `Kalki UI showcases a React UI component library designed to provide developers with a collection of reusable components for building modern web applications. While specific details about the library's features, components, and documentation are not provided in the available sources, the site likely offers insights into the design philosophy, component offerings, and usage guidelines for Kalki UI.`,
      image: kalkiUi,
      tags: ['npm', 'React', 'Typescript', 'Tailwind'],
      link: 'https://kalki-ui.vercel.app/',
    },
    {
      title: 'Kalki UI Toast',
      description: `Kalki UI Toast is a beautiful toast notifications.A lightweight, customizable, and accessible toast notification system built with React and Tailwind CSS.`,
      image: kalkiUiToast,
      tags: ['npm', 'React', 'Typescript', 'Tailwind'],
      link: 'https://kalki-ui-toast-docs.vercel.app/',
    },
    {
      title: 'React UI Essentials',
      description:
        'React UI Essentials serves as a curated reference for developers working with React. It provides an organized collection of popular React UI component libraries, offering a centralized hub to explore and compare various UI frameworks.',
      image: rue,
      tags: ['npm', 'React', 'Javascript', 'Css'],
      link: 'https://react-ui-essentials.vercel.app/',
    },
    {
      title: 'React UI Essentials Icons',
      description:
        'react-ui-essentials-icons is a lightweight React library that provides a comprehensive set of icons for your React applications. Designed for ease of use and flexibility, this package allows you to quickly integrate high-quality icons into your project',
      image: ruei,
      tags: ['npm', 'React', 'Javascript', 'Css'],
      link: 'https://react-ui-essentials-icons.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Open Source Featured Projects </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-primary/60 to-transparent flex-grow" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/40 bg-muted/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground  p-2 rounded-full hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="text[--icon-color]" size={18} />
                  </a>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>
                </a>

                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant={'outline'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
