import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Senior Frontend Developer</h4>
                <p className="text-muted-foreground">Tech Corp • 2021 - Present</p>
                <p className="mt-2">
                  Led the development of multiple high-impact web applications.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium">Full Stack Developer</h4>
                <p className="text-muted-foreground">StartUp Inc • 2019 - 2021</p>
                <p className="mt-2">Developed and maintained various client projects.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div>
              <h4 className="font-medium">BSc in Computer Science</h4>
              <p className="text-muted-foreground">University of Technology • 2015 - 2019</p>
            </div>
          </div>

          <Button className="mt-8" variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
