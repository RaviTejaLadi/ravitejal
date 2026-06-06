import { Separator } from '@/components/ui/separator';
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
  Node,
  OpenAi,
  PostMan,
  React,
  ReduxToolKit,
  SchadCn,
  Tailwind,
  TypeScript,
  Zustand,
} from '@/assets/technologies';

const ExperienceSection = () => {
  const FluidFitExp = [
    'Own and drive the frontend architecture at FluidFit.ai, building scalable, high-performance web applications.',
    'Own the entire frontend codebase architecture, performance, scalability, and maintainability.',
    'Design and build complex UI workflows using React.js, TypeScript, and modern frontend tooling.',
    'Translate product and AI requirements into clean, reusable, production-ready components.',
    'Optimize rendering, state management, and bundle size for real-world performance.',
    'Collaborate directly with backend, AI, and product teams to ship features end-to-end.',
    'Lead frontend decisions, set coding standards, and fix hard problems — performance bottlenecks, rendering issues, and edge cases.',
    "Take responsibility for how the product feels, performs, and scales as the company grows.",
  ];

  const AventisiaExp = [
    'Led the development of a digital trade financing platform, enabling seamless transactions between stakeholders in short-term trade finance.',
    'The project architecture follows a micro-frontend approach, where each feature is developed and deployed as an independent micro-frontend.',
    'Owned 90% of the frontend responsibilities, including new feature development, enhancements, and bug fixes.',
    'Built and maintained key features such as user authentication, interactive dashboards, data-driven UI components and core features like trade, trade partner, etc.',
    'Collaborated closely with cross-functional teams (backend and design) to define, design, and deliver high-quality features.',
    'Integrated RESTful APIs and third-party libraries to enhance platform functionality and streamline the user experience.',
    'Established and enforced frontend coding standards, implemented best practices, and led code review processes to ensure code quality and maintainability.',
  ];

  const IdexcelExp = [
    'Created responsive web applications using React and JavaScript.',
    'Managed multiple environments (dev, test, demo, sandbox) for InferIQ, ensuring smooth deployment across all development stages.',
    'Developed high-performance services including Extraction, Bank Statement Analysis, and Financial Statement Processing, achieving 90% improvement in speed and performance.',
    'Handled 98% of frontend work, including enhancements and bug fixes.',
    'Collaborated with cross-functional teams to define, design, and ship new features.',
    'Implemented state management solutions with Redux Toolkit and Zustand.',
    'Worked with RESTful APIs and integrated third-party libraries.',
    'Established coding standards, best practices, and code review processes.',
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Sr. Software Developer</h4>
                <p className="text-muted-foreground">FluidFit.ai • July 2025 - Present</p>
                <p className="my-2 font-medium text-muted-foreground">About Product:</p>
                <p className="text-base text-muted-foreground">
                  FluidFit.ai is an AI-powered platform where I own and drive the frontend
                  architecture, building scalable, high-performance web applications that translate
                  product and AI requirements into production-ready user experiences.
                </p>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>My Responsibilities at FluidFit.ai</AccordionTrigger>
                    <AccordionContent>
                      {FluidFitExp.map((item, index) => {
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
                  Tech stack:
                  <React className="w-h h-4" />
                  <TypeScript className="w-h h-4" />
                  <Tailwind className="w-h h-4" />
                  <Zustand className="w-h h-4" />
                  <SchadCn className="w-h h-4" />
                  <Git className="w-h h-4" />
                  <JavaScript className="w-h h-4" />
                  etc...
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium">Senior Software Engineer</h4>
                <p className="text-muted-foreground">
                  Aventisia • September 2024 - June 2025
                </p>
                <p className="my-2 font-medium text-muted-foreground">About Product:</p>
                <p className="text-base text-muted-foreground">
                  Grapes Capital is a fintech firm focused on transforming global commerce by
                  providing innovative trade finance solutions. Their platform aims to empower
                  businesses of all sizes to unlock liquidity, mitigate risks, and accelerate growth
                  through trust, transparency, and cutting-edge technology.
                </p>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>My Responsibilities at Aventisia</AccordionTrigger>
                    <AccordionContent>
                      {AventisiaExp.map((item, index) => {
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
                  Tech stack:
                  <Css className="w-h h-4" />
                  <Git className="w-h h-4" />
                  <JavaScript className="w-h h-4" />
                  <OpenAi className="w-h h-4" />
                  <PostMan className="w-h h-4" />
                  <React className="w-h h-4" />
                  <Tailwind className="w-h h-4" />
                  <TypeScript className="w-h h-4" />
                  <SchadCn className="w-h h-4" />
                  <Zustand className="w-h h-4" />
                  etc...
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-muted-foreground">Idexcel • October 2022 - August 2024</p>
                <p className="my-2 font-medium text-muted-foreground">About Product:</p>
                <p className="text-muted-foreground">
                  InferIQ is a Generative AI-powered Intelligent Document Processing (IDP) platform
                  developed by Idexcel Inc., designed to automate the extraction and processing of
                  unstructured data from various document types, including PDFs, handwritten forms,
                  images, and scanned documents.
                </p>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>My Responsibilities at Idexcel</AccordionTrigger>
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
                  Tech stack:
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
              <Separator />
              <div>
                <h4 className="font-medium">Software Engineer Intern</h4>
                <p className="text-muted-foreground">Test Yantra • April 2022 - October 2022</p>
                <p className="mt-2 tracking-wide text-muted-foreground flex items-center gap-2">
                  Tech stack:
                  <React className="w-h h-4" />
                  <Css className="w-h h-4" />
                  <Bootstrap className="w-h h-4" />
                  <Git className="w-h h-4" />
                  <JavaScript className="w-h h-4" />
                  <Node className="w-h h-4" />
                  etc...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
