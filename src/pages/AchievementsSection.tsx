import { Award, Medal, Trophy } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Certificate from '../assets/Certificate of Appreciation.png';

const AchievementsSection = () => {
  const awards = [
    {
      company: 'Idexcel Technologies Private Limited',
      accolades: [
        {
          id: 1,
          title: 'Quarterly Award',
          description: 'Outstanding performance and contribution to project success',
          year: '2023',
          icon: <Trophy className="text-amber-500" />,
          image: 'https://my-dev-story.vercel.app/assets/myAward1-DaZWPjWx.jpg',
        },
        {
          id: 2,
          title: 'Award of Excellence',
          description: 'Recognition of exceptional skills and dedication to quality work',
          year: '2024',
          icon: <Award className="text-blue-500" />,
          image: 'https://my-dev-story.vercel.app/assets/myAward2-BkC0BwqC.jpg',
        },
      ],
    },
    {
      company: 'Aventisia Technologies Private Limited',
      accolades: [
        {
          id: 3,
          title: 'Certificate of Appreciation',
          description:
            'Recognition of hard work, dedication, and passion to carry out job responsibilities',
          year: '2025',
          icon: <Medal className="text-green-500" />,
          image: Certificate,
        },
      ],
    },
  ];
  return (
    <section id="achievements" className="section-shell bg-muted/20">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Achievements</h2>
          <div className="section-line" />
        </div>
        {awards.map((company, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">{company.company}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.accolades.map((award) => (
                <div
                  key={award.id}
                  className="glass-card canva-gradient-soft relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2  rounded-full">{award.icon}</div>
                        <div>
                          <h4 className="font-medium text-base sm:text-lg text-foreground">{award.title}</h4>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full text-muted-foreground">
                        {award.year}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground">{award.description}</p>

                    {award.image && (
                      <HoverCard openDelay={120} closeDelay={120}>
                        <HoverCardTrigger asChild>
                          <button
                            type="button"
                            className="mt-3 text-primary text-sm font-medium inline-flex items-center rounded-md transition-colors hover:text-secondary"
                          >
                            View certificate
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent
                          side="bottom"
                          align="start"
                          className="w-[18rem] sm:w-[22rem] border-primary/20 bg-background/95 p-2"
                        >
                          <img
                            src={award.image}
                            alt={`${award.title} Certificate`}
                            className="w-full rounded-md shadow-sm"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
