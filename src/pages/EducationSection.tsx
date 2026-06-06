const education = [
  {
    degree: 'Bachelor of Technology, Mechanical Engineering',
    institution: 'Centurion University of Technology and Management',
    duration: 'June 2016 - April 2020',
  },
  {
    degree: '+2, MPC',
    institution: 'Sri Chaitanya Junior College',
    duration: '2015 - 2016',
  },
  {
    degree: '4th Class to 10th Class',
    institution: 'Alluri Sita Ramaraju Public School, Araku Valley',
    duration: '2008 - 2014',
  },
];

const EducationSection = () => {
  return (
    <section id="eud" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item) => (
            <div key={item.institution}>
              <h4 className="font-medium">{item.degree}</h4>
              <p className="text-muted-foreground">
                {item.institution} • {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
