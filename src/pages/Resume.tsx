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
    certifications,
    languages,
  } = config;

  // Define icon colors for different sections
  const iconColors = {
    contact: {
      phone: '#3969e7',
      mail: '#00c4cc',
      linkedin: '#0077b5', // linkedin blue
      github: '#7d2ae7',
    },
    skills: {
      technical: '#3969e7',
      soft: '#7d2ae7',
    },
    sections: {
      languages: '#00c4cc',
      achievements: '#7d2ae7',
      summary: '#3969e7',
      work: '#7d2ae7',
      education: '#00c4cc',
      projects: '#3969e7',
    },
  };

  const renderSkillSection = (category: 'Technical' | 'Soft') => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => (
        <Badge key={skill.name} variant={'outline'} className="mb-2">
          {skill.name}
        </Badge>
      ));
  };

  return (
    <section id="resume" className="section-shell bg-muted/20">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Resume</h2>
          <div className="section-line" />
        </div>
        <div className="my-4 rounded-md flex flex-col lg:flex-row gap-4">
          <div
            className={`glass-card canva-gradient-soft lg:block w-full lg:w-1/3 p-4 md:p-7 space-y-6 rounded-lg lg:rounded-l-lg lg:rounded-r-none`}
          >
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {personalInfo.fullName}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">{personalInfo.title}</p>
              <p className="text-sm md:text-base text-muted-foreground">{personalInfo.location}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                <Phone
                  className="mr-2 w-4 h-4 flex-shrink-0"
                  style={{ color: iconColors.contact.phone }}
                />
                <span className="break-all">{contact.phone}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                <Mail
                  className="mr-2 w-4 h-4 flex-shrink-0"
                  style={{ color: iconColors.contact.mail }}
                />
                <span className="break-all">{contact.email}</span>
              </div>
              {contact.linkedin && (
                <div className="flex items-center text-muted-foreground text-sm md:text-base hover:text-sky-500 hover:underline hover:underline-offset-2">
                  <Linkedin
                    className="mr-2 w-4 h-4 flex-shrink-0"
                    style={{ color: iconColors.contact.linkedin }}
                  />
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
                <div className="flex items-center text-muted-foreground text-sm md:text-base hover:text-sky-500 hover:underline hover:underline-offset-2">
                  <Github
                    className="mr-2 w-4 h-4 flex-shrink-0"
                    style={{ color: iconColors.contact.github }}
                  />
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

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center mb-4">
                <Code
                  className="mr-2 flex-shrink-0"
                  style={{ color: iconColors.skills.technical }}
                />{' '}
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">{renderSkillSection('Technical')}</div>

              <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center mt-4 mb-4">
                <Brain className="mr-2 flex-shrink-0" style={{ color: iconColors.skills.soft }} />{' '}
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">{renderSkillSection('Soft')}</div>

              {languages && languages.length > 0 && (
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mt-4 mb-4">
                    <Languages
                      className="mr-2 flex-shrink-0"
                      style={{ color: iconColors.sections.languages }}
                    />{' '}
                    Languages
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
                    <Award
                      className="mr-2 flex-shrink-0"
                      style={{ color: iconColors.sections.achievements }}
                    />{' '}
                    Achievements
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
              {certifications && certifications.length > 0 && (
                <section>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mt-4 mb-4">
                    <Award
                      className="mr-2 flex-shrink-0"
                      style={{ color: iconColors.sections.achievements }}
                    />{' '}
                    Certifications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="mb-2">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="glass-card canva-gradient-soft w-full lg:w-2/3 p-4 md:p-7 space-y-6 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg overflow-y-auto">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Target
                  className="mr-2 flex-shrink-0"
                  style={{ color: iconColors.sections.summary }}
                />{' '}
                Professional Summary
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">{personalInfo.summary}</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Rocket
                  className="mr-2 flex-shrink-0"
                  style={{ color: iconColors.sections.work }}
                />{' '}
                Work Experience
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

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Book
                  className="mr-2 flex-shrink-0"
                  style={{ color: iconColors.sections.education }}
                />{' '}
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {edu.university}
                    {edu.duration ? ` | ${edu.duration}` : edu.yearOfCompletion ? ` | ${edu.yearOfCompletion}` : ''}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center mb-4">
                <Star
                  className="mr-2 flex-shrink-0"
                  style={{ color: iconColors.sections.projects }}
                />{' '}
                Featured Projects
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
