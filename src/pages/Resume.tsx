import React from 'react';
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Code,
  Brain,
  Award,
  Book,
  Languages,
  Star,
  Target,
  Rocket,
} from 'lucide-react';
import { ResumeConfig, resumeConfig } from '@/config/resumeConfig';
import { Badge } from '@/components/ui/badge';

interface ResumeProps {
  config?: ResumeConfig;
}

const Resume: React.FC<ResumeProps> = ({ config = resumeConfig }) => {
  const {
    personalInfo,
    contact,
    skills,
    workExperience,
    projects,
    education,
    Achievements,
    languages,
  } = config;

  const renderSkillSection = (category: 'Technical' | 'Soft') => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => (
        <Badge key={skill.name} className="mb-2">
          {skill.name}
        </Badge>
      ));
  };

  return (
    <section id="resume" className="py-12 md:py-28 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Resume</h2>
          <div className="ml-4 h-px bg-gradient-to-r from-primary/60 to-transparent flex-grow" />
        </div>
        <div className="container mx-auto my-4 rounded-md  flex flex-col lg:flex-row">
          {/* Sidebar - Hidden on mobile unless toggled, Visible on large screens */}
          <div
            className={` lg:block w-full lg:w-1/3 bg-background p-4 md:p-8 shadow-lg space-y-6 rounded-lg lg:rounded-l-lg lg:rounded-r-none`}
          >
            {/* Header Section */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {personalInfo.fullName}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">{personalInfo.title}</p>
              <p className="text-sm md:text-base text-muted-foreground">Bangalore/Hyderabad</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                <Phone className="mr-2 w-4 h-4 flex-shrink-0" />
                <span className="break-all">{contact.phone}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                <Mail className="mr-2 w-4 h-4 flex-shrink-0" />
                <span className="break-all">{contact.email}</span>
              </div>
              {contact.linkedin && (
                <div className="flex items-center text-muted-foreground text-sm md:text-base hover:underline hover:underline-offset-2">
                  <Linkedin className="mr-2 w-4 h-4 flex-shrink-0" />
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
              {contact.github && (
                <div className="flex items-center text-muted-foreground text-sm md:text-base hover:underline hover:underline-offset-2">
                  <Github className="mr-2 w-4 h-4 flex-shrink-0" />
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center mb-4">
                <Code className="mr-2 flex-shrink-0" /> Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">{renderSkillSection('Technical')}</div>

              <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center mt-4 mb-4">
                <Brain className="mr-2 flex-shrink-0" /> Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">{renderSkillSection('Soft')}</div>

              {languages && languages.length > 0 && (
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mt-4 mb-4">
                    <Languages className="mr-2 flex-shrink-0" /> Languages
                  </h2>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <p key={index} className="text-sm md:text-base text-muted-foreground">
                        <span className="font-medium">{lang.language}</span> - {lang.proficiency}
                      </p>
                    ))}
                  </div>
                </section>
              )}
              {/* Achievements */}
              {Achievements && Achievements.length > 0 && (
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mt-4 mb-4">
                    <Award className="mr-2 flex-shrink-0" /> Achievements
                  </h2>
                  {Achievements.map((cert, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="text-sm md:text-sm font-semibold text-foreground">
                        {cert.name}
                      </h5>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {cert.issuedBy} | {cert.year}
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3 p-4 md:p-8 space-y-6 bg-background rounded-b-lg shadow-lg lg:rounded-l-none lg:rounded-r-lg overflow-y-auto">
            {/* Summary */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Target className="mr-2 flex-shrink-0" /> Professional Summary
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">{personalInfo.summary}</p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Rocket className="mr-2 flex-shrink-0" /> Work Experience
              </h2>
              {workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {exp.company} | {exp.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{exp.duration}</p>
                  <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mt-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mt-1">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Book className="mr-2 flex-shrink-0" /> Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {edu.university} | {edu.yearOfCompletion}
                  </p>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Star className="mr-2 flex-shrink-0" /> Projects
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-medium">Technologies:</span>{' '}
                    {project.technologies.join(', ')}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
