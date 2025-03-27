import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { technoConfig } from '@/config/techno-config';

const TechnologiesSection = () => {
  return (
    <section id="about" className="py-28 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold tracking-wide mb-8">{technoConfig.title}</h2>
        <Separator className="h-[0.5px] mb-8" />
        <Tabs defaultValue="mostUsed" className="w-full">
          <TabsList className="w-full">
            {technoConfig.tabTriggers.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {technoConfig.tabContent.map((tab) => (
            <TabsContent
              value={tab.value}
              key={tab.value}
              className="w-full border rounded-md p-10"
            >
              <div className="flex items-center gap-4 justify-center">
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
