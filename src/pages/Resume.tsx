import React from 'react';
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  //   Globe,
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
    certifications,
    languages,
    // additionalInfo,
    // openSourceContributions,
  } = config;

  const renderSkillSection = (category: 'Technical' | 'Soft') => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => <Badge key={skill.name}>{skill.name}</Badge>);
  };

  return (
    <div className="flex min-h-screen container mx-auto my-4 rounded-md ">
      {/* Sidebar (Fixed) */}
      <div className="w-1/3 bg-background p-8 space-y-6 ">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">{personalInfo.fullName}</h1>
            <p className="text-muted-foreground">
              {personalInfo.title} | {personalInfo.location}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <div className="flex items-center text-muted-foreground">
              <Phone className="mr-2 w-4 h-4" /> {contact.phone}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Mail className="mr-2 w-4 h-4" /> {contact.email}
            </div>
            {contact.linkedin && (
              <div className="flex items-center text-muted-foreground">
                <Linkedin className="mr-2 w-4 h-4" />
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            )}
            {contact.github && (
              <div className="flex items-center text-muted-foreground">
                <Github className="mr-2 w-4 h-4" />
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-semibold text-foreground flex items-center mb-4">
              <Code className="mr-2" /> Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">{renderSkillSection('Technical')}</div>

            <h2 className="text-xl font-semibold text-foreground flex items-center mt-4 mb-4">
              <Brain className="mr-2" /> Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">{renderSkillSection('Soft')}</div>
          </div>
      </div>
      {/* Scrollable Main Content */}
      <div className="w-2/3 ml-1/3 p-8 space-y-8 overflow-y-auto max-h-screen">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
              <Target className="mr-2" /> Professional Summary
            </h2>
            <p className="text-muted-foreground">{personalInfo.summary}</p>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
              <Rocket className="mr-2" /> Work Experience
            </h2>
            {workExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.company} | {exp.title}
                </h3>
                <p className="text-muted-foreground">{exp.duration}</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
              <Star className="mr-2" /> Projects
            </h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <p className="text-muted-foreground">
                  Technologies: {project.technologies.join(', ')}
                </p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
              <Book className="mr-2" /> Education
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.university} | {edu.yearOfCompletion}
                </p>
              </div>
            ))}
          </section>

          {/* Languages */}
          {languages && languages.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
                <Languages className="mr-2" /> Languages
              </h2>
              {languages.map((lang, index) => (
                <p key={index} className="text-muted-foreground">
                  {lang.language} - {lang.proficiency}
                </p>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground flex items-center mb-4">
                <Award className="mr-2" /> Certifications
              </h2>
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-muted-foreground">
                    {cert.issuedBy} | {cert.year}
                  </p>
                </div>
              ))}
            </section>
          )}
      </div>
    </div>
  );
};

export default Resume;
