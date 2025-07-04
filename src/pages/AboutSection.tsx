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
    window.location.href = 'https://www.linkedin.com/in/ravi-teja-2a2989145/';
  };
  return (
    <section id="about" className="py-28 px-4 bg-muted/50">
      {/* <GradientBackground /> */}
      <div className="relative container mx-auto">
        <div className="flex items-center mb-12">
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {aboutConfig.title}
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1 flex flex-col items-center mx-auto gap-6">
            <img
              src={profilePic}
              alt="Profile"
              className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-full"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-1">{aboutConfig.userName}</h3>
              <p className="text-lg text-muted-foreground mb-1">{aboutConfig.designation}</p>
              <p className="text-sm md:text-base text-muted-foreground">Bangalore/Hyderabad</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center  bg-gradient-to-r from-purple-500 to-pink-300 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Button variant="ghost" onClick={handleGithub} size="icon">
                  <GitHub className="h-5 w-5 " />
                </Button>
              </div>
              <div className="flex items-center justify-center  bg-gradient-to-r from-purple-500 to-pink-300 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Button variant="ghost" onClick={handleLinkedIn} size="icon">
                  <LinkedIn className="h-5 w-5 " />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4 items-center">
              <div>
                {aboutConfig.description.map((desc, index) => (
                  <p className="text-lg tracking-wide mb-4" key={index}>
                    {desc}
                  </p>
                ))}
              </div>
              <div>
                <a
                  href="#resume"
                  className="flex items-center gap-2 hover:underline underline-offset-2 border border-border py-2 px-3 rounded-md"
                >
                  <FileText className="size-4" />
                  <span>My Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
