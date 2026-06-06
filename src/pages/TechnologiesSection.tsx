import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { technoConfig } from '@/config/techno-config';

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="section-shell bg-muted/20">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">{technoConfig.title}</h2>
          <div className="section-line" />
        </div>
        <Separator className="h-px mb-6 bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent" />
        <Tabs defaultValue="mostUsed" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0">
            {technoConfig.tabTriggers.map((tab) => (
              <TabsTrigger
                value={tab.value}
                key={tab.value}
                className="w-full rounded-md border border-border bg-card/90 px-3 py-2 text-xs sm:text-sm data-[state=active]:canva-gradient data-[state=active]:text-white"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {technoConfig.tabContent.map((tab) => (
            <TabsContent
              value={tab.value}
              key={tab.value}
              className="glass-card canva-gradient-soft w-full p-4 sm:p-6 md:p-8 mt-4"
            >
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{tab.label}</p>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-3 sm:gap-4">
                {tab.content.map((content) => (
                  <div key={content.tooltip} className="flex justify-center">
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="rounded-xl border border-border/80 bg-background/85 p-2 sm:p-3 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md hover:shadow-primary/20">
                          <content.icon className="w-8 h-8 sm:w-10 sm:h-10" />
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
