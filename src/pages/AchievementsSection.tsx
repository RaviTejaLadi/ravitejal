import { Award, ChevronDown, Medal, Trophy } from 'lucide-react';
import { useState } from 'react';
import Certificate from '../assets/Certificate of Appreciation.png';

const AchievementsSection = () => {
  const [activeAward, setActiveAward] = useState<number | null>(null);

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
    <section id="achievements" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Achievements</h2>
          <div className="ml-4 h-px bg-gradient-to-r from-primary/60 to-transparent flex-grow" />
        </div>
        {awards.map((company, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">{company.company}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.accolades.map((award) => (
                <div
                  key={award.id}
                  className="relative overflow-hidden  rounded-lg  transition-all duration-300 border "
                >
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() => setActiveAward(activeAward === award.id ? null : award.id)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2  rounded-full">{award.icon}</div>
                        <div>
                          <h4 className="font-medium text-lg text-foreground">{award.title}</h4>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full text-muted-foreground">
                        {award.year}
                      </span>
                    </div>

                    <p className="text-muted-foreground">{award.description}</p>

                    {award.image && (
                      <div className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center">
                        {activeAward === award.id ? 'Hide certificate' : 'View certificate'}
                        <ChevronDown
                          className={` w-4 h-4 ml-1 transition-transform ${activeAward === award.id ? 'rotate-180' : ''}`}
                        />
                      </div>
                    )}
                  </div>

                  {activeAward === award.id && award.image && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                      <img
                        src={award.image}
                        alt={`${award.title} Certificate`}
                        className="w-full rounded-md shadow-sm"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* <div className="max-w-3xl mx-auto p-4 ">
          <p className="text-foreground mb-4">Idexcel Technologies Private Limited</p>
          <ul className="space-y-3">
            <li className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                  <span>
                    Received Quarterly Award for outstanding performance and contribution to project
                    success • 2023
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-muted border p-2 rounded-lg">
                  <img src="https://my-dev-story.vercel.app/assets/myAward1-DaZWPjWx.jpg" alt="" />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <HoverCard>
                <HoverCardTrigger>
                  <span>
                    Honored with the Award of Excellence in recognition of exceptional skills and
                    dedication to quality work • 2024
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-muted border p-2 rounded-lg">
                  <img src="https://my-dev-story.vercel.app/assets/myAward2-BkC0BwqC.jpg" alt="" />
                </HoverCardContent>
              </HoverCard>
              <span></span>
            </li>
          </ul>
          <p className="text-foreground my-4">Aventisia Technologies Private Limited</p>
          <ul className="space-y-3">
            <li className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <HoverCard>
                <HoverCardTrigger>
                  <span>
                    Honored with the certifications of appreciation in recognition of hard work,
                    dedication, and passion to carry out your job responsibilities. • 2025
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-muted">
                  The React Framework – created and maintained by @vercel.
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;
