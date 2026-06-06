import LinkedInProfileCard from '@/components/LinkedInProfileCard';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/config/contact-config';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const cardClassName =
    'glass-card flex items-center p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10';

  return (
    <section id="contact-info" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Contact Information</h2>
          <div className="section-line" />
        </div>

        <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Open to full-time frontend opportunities and impactful product teams. Reach out through
            email, phone, LinkedIn, or GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="group">
            <a
              href={`mailto:${contactInfo.email}`}
              className={cardClassName}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 canva-gradient rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">Email</h3>
                <p className="text-sm sm:text-base text-primary hover:text-secondary hover:underline transition-colors break-all">
                  {contactInfo.email}
                </p>
              </div>
            </a>
          </div>

          <div className="group">
            <a
              href={`tel:+91${contactInfo.phone}`}
              className={cardClassName}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 canva-gradient rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">Phone</h3>
                <p className="text-sm sm:text-base text-primary hover:text-secondary hover:underline transition-colors">
                  +91 {contactInfo.phone}
                </p>
              </div>
            </a>
          </div>

          <HoverCard openDelay={120} closeDelay={120}>
            <HoverCardTrigger asChild>
              <div className="group">
                <div className={cardClassName}>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 canva-gradient rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground mb-1">LinkedIn</h3>
                    <p className="text-primary hover:text-secondary hover:underline transition-colors">
                      View Profile
                    </p>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              side="bottom"
              align="start"
              className="bg-muted border-none p-0 w-[calc(100vw-2rem)] max-w-[30rem]"
            >
              <LinkedInProfileCard />
            </HoverCardContent>
          </HoverCard>

          <div className="group">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClassName}
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 canva-gradient rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">GitHub</h3>
                <p className="text-sm sm:text-base text-primary hover:text-secondary hover:underline transition-colors">
                  View Repositories
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={`mailto:${contactInfo.email}`}>Hire Me</a>
          </Button>
          <Button asChild variant="outline">
            <a href={contactInfo.LinkedIn} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
