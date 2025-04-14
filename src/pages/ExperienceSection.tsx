import { Separator } from '@/components/ui/separator';
import Resume from './Resume';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Bootstrap,
  Css,
  Git,
  JavaScript,
  OpenAi,
  PostMan,
  React,
  ReduxToolKit,
} from '@/assets/technologies';

const ExperienceSection = () => {
  const IdexcelExp = [
    'Lead Frontend Developer for InferIQ, a finance product developed from scratch over 2 years.',
    'Managed multiple environments (dev, test, demo, sandbox) for InferIQ, ensuring smooth deployment across all development stages.',
    'Developed high-performance services including Extraction, Bank statement analysis, and Financial statement processing, achieving 90% improvement in speed and performance.',
    'Handled 98% of frontend work, including enhancements and bug fixes.',
    'Designed and developed efficient React.js components, ensuring seamless integration with backend services.',
    'Established coding standards, best practices, and code review processes.',
    'Implemented responsive and accessible user interfaces, focusing on performance optimization.',
  ];

  return (
    <section id="resume" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Senior Developer</h4>
                <p className="text-muted-foreground">
                  Aventisia Technologies Private Limited • sep.2024 - Present
                </p>
                <p className="mt-2">
                  Led the development of multiple high-impact web applications.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-muted-foreground">
                  Idexcel Technologies Private Limited • oct.2022 - aug.2024 • 1year 10 months
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>My Responsibilities</AccordionTrigger>
                    <AccordionContent>
                      {IdexcelExp.map((item, index) => {
                        return (
                          <p className="mt-2 tracking-wide text-muted-foreground" key={index}>
                            • {item}
                          </p>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="mt-2 tracking-wide text-muted-foreground flex items-center gap-2">
                  Technologies used:
                  <React className="w-h h-4" />
                  <ReduxToolKit className="w-h h-4" />
                  <Css className="w-h h-4" />
                  <Bootstrap className="w-h h-4" />
                  <Git className="w-h h-4" />
                  <JavaScript className="w-h h-4" />
                  <OpenAi className="w-h h-4" />
                  <PostMan className="w-h h-4" /> etc...
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div>
              <h4 className="font-medium">B.Tech in Mechanical Engineering</h4>
              <p className="text-muted-foreground">
                Centurion University of Technology and Management • 2019 - 2020
              </p>
            </div>
          </div>
        </div>
      </div>
      <Resume />
    </section>
  );
};

export default ExperienceSection;
