import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    email: 'ladi.ravi884781@gmail.com',
    phone: '8847819634',
    LinkedIn: 'https://www.linkedin.com/in/ravi-teja-2a2989145/',
    github: 'https://github.com/RaviTejaLadi',
  };

  return (
    <section id="contact-info" className="py-12 md:py-28 px-4 bg-muted/30">
      <div className="container mx-auto ">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Information
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="group">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[--icon-color]" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">Email</h3>
                <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  {contactInfo.email}
                </p>
              </div>
            </a>
          </div>

          {/* Phone */}
          <div className="group">
            <a
              href={`tel:+91${contactInfo.phone}`}
              className="flex items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[--icon-color]" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">Phone</h3>
                <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  +91 {contactInfo.phone}
                </p>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group">
            <a
              href={contactInfo.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-[--icon-color]" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">LinkedIn</h3>
                <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  View Profile
                </p>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="group">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-[--icon-color]" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-1">GitHub</h3>
                <p className="text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                  View Repositories
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
