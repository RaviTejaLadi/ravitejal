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
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>
        {awards.map((company, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold  mb-4 text-foreground">{company.company}</h3>

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
      </div>
    </section>
  );
};

export default AchievementsSection;
