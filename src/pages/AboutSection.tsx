import { Button } from '@/components/ui/button';
import { aboutConfig } from '@/config/about-config';
import profilePic from '../assets/avatar1.jpg';
import GitHub from '@/assets/Icons/GitHub';
import LinkedIn from '@/assets/Icons/LinkedIn';
import { FileText } from 'lucide-react';
// import { GradientBackground } from '@/components/ui/GradientBackground';

const AboutSection = () => {
  const handleGithub = () => {
    window.location.href = 'https://github.com/RaviTejaLadi';
  };
  const handleLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/ravi-teja-ladi/';
  };
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">{aboutConfig.title}</h2>
          <div className="section-line" />
        </div>

        <div className="glass-card canva-gradient-soft p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 flex flex-col items-center gap-5 text-center lg:sticky lg:top-32">
            <img
              src={profilePic}
              alt="Profile"
                className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 object-cover rounded-full border-4 border-primary/30 shadow-xl shadow-secondary/20"
            />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">{aboutConfig.userName}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-1">{aboutConfig.designation}</p>
                <p className="text-sm text-muted-foreground mb-1">{aboutConfig.company}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{aboutConfig.location}</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="ghost"
                  onClick={handleGithub}
                  size="icon"
                  className="rounded-full canva-gradient text-white shadow-md shadow-secondary/30 hover:brightness-105 hover:text-white"
                >
                  <GitHub className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleLinkedIn}
                  size="icon"
                  className="rounded-full canva-gradient text-white shadow-md shadow-secondary/30 hover:brightness-105 hover:text-white"
                >
                  <LinkedIn className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <div className="max-w-2xl mx-auto space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="premium-chip">Frontend Architecture</span>
                  <span className="premium-chip">React + TypeScript</span>
                  <span className="premium-chip">Performance Engineering</span>
                </div>
                <p className="text-base sm:text-lg tracking-wide text-foreground leading-relaxed">
                  {aboutConfig.intro}
                </p>
                {aboutConfig.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <ul className="space-y-2 pt-1">
                  {aboutConfig.highlights.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href="#resume"
                    className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background/70 px-4 py-2 text-sm sm:text-base font-medium transition-colors hover:bg-primary/10"
                  >
                    <FileText className="size-4" />
                    <span>View Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
