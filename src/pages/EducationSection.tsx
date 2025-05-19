const EducationSection = () => {
  return (
    <section id="eud" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <div className="ml-4 h-px bg-gradient-to-r from-primary/60 to-transparent flex-grow" />
        </div>

        <div className="max-w-3xl mx-auto">
          <h4 className="font-medium">B.Tech in Mechanical Engineering</h4>
          <p className="text-muted-foreground">
            Centurion University of Technology and Management • 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
