import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { technoConfig } from '@/config/techno-config';

const TechnologiesSection = () => {
  return (
    <section id="about" className="py-28 px-4 bg-muted/50">
      <div className=" container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">{technoConfig.title}</h2>
          <div className="ml-4 h-px bg-gradient-to-r from-primary/60 to-transparent flex-grow" />
        </div>
        <Separator className="h-[0.5px] mb-8" />
        <Tabs defaultValue="mostUsed" className="w-full">
          <TabsList className="w-full">
            {technoConfig.tabTriggers.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.value} className="w-full">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {technoConfig.tabContent.map((tab) => (
            <TabsContent
              value={tab.value}
              key={tab.value}
              className="w-full border rounded-md overflow-x-auto p-10"
            >
              <p className="text-muted-foreground mb-5">{tab.label}</p>
              <div className="flex items-center flex-wrap gap-4 justify-start">
                {tab.content.map((content) => (
                  <div key={content.tooltip}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="border p-2 rounded-md hover:border-green-400">
                          <content.icon className="w-12 h-12" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{content.tooltip}</span>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologiesSection;
