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
    <section id="education" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((item) => (
            <div key={item.institution} className="glass-card p-4 sm:p-5">
              <h4 className="text-base sm:text-lg font-semibold">{item.degree}</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
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
