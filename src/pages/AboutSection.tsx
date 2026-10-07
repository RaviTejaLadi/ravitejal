import { Button } from '@/components/ui/button';
import { aboutConfig } from '@/config/about-config';
const profilePic = '/images/avatar.webp';
import GitHub from '@/assets/Icons/GitHub';
import LinkedIn from '@/assets/Icons/LinkedIn';
import { FileText } from 'lucide-react';
// import { GradientBackground } from '@/components/ui/GradientBackground';

const AboutSection = () => {
  const handleGithub = () => {
    window.location.href = 'https://github.com/RaviTejaLadi';
  };
  const handleLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/in/ravi-teja-ladi-%E2%9C%A8/',
      '_blank',
      'noopener,noreferrer',
    );
  };
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">{aboutConfig.title}</h2>
          <div className="section-line" />
        </div>

        <div className="glass-card overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center gap-4 border-b border-border px-6 py-8 text-center lg:w-72 lg:border-b-0 lg:border-r lg:py-10">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  width={256}
                  height={256}
                  fetchPriority="high"
                  decoding="async"
                  className="h-36 w-36 rounded-full object-cover ring-1 ring-black/10 sm:h-40 sm:w-40 dark:ring-white/15"
                />
                <span
                  className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#0F7B0F] dark:border-[#2C2C2C] dark:bg-[#6CCB5F]"
                  title="Available"
                />
              </div>
              <div>
                <h3 className="mb-1 text-[1.75rem] font-semibold leading-tight">
                  {aboutConfig.userName}
                </h3>
                <p className="mb-1 text-sm font-semibold text-link">{aboutConfig.designation}</p>
                <p className="mb-1 text-sm text-muted-foreground">{aboutConfig.company}</p>
                <p className="text-sm text-muted-foreground">{aboutConfig.location}</p>
              </div>
              <span className="win-status">
                <span className="size-1.5 rounded-full bg-current" />
                Open to work
              </span>

              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={handleGithub}
                  size="icon"
                  aria-label="Visit GitHub profile"
                >
                  <GitHub className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleLinkedIn}
                  size="icon"
                  aria-label="Visit LinkedIn profile"
                >
                  <LinkedIn className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="flex-1 px-6 py-8 sm:px-8 lg:py-10">
              <div className="max-w-2xl space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="premium-chip">Frontend Architecture</span>
                  <span className="premium-chip">React + TypeScript</span>
                  <span className="premium-chip">Performance Engineering</span>
                </div>
                <p className="text-base sm:text-lg tracking-wide text-foreground leading-relaxed">
                  {aboutConfig.intro}
                </p>
                {aboutConfig.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                <ul className="space-y-2 pt-1">
                  {aboutConfig.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <a href="#resume">
                      <FileText className="size-4" />
                      View Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#contact-info">Get in touch</a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { label: 'Experience', value: '4+ yrs' },
                    { label: 'Focus', value: 'Frontend' },
                    { label: 'Based in', value: 'Bengaluru' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[8px] border border-border bg-[#F3F3F3] px-3 py-2.5 dark:bg-[#282828]"
                    >
                      <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-semibold sm:text-base">{stat.value}</p>
                    </div>
                  ))}
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
