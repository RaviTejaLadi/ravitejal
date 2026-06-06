import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { technoConfig } from '@/config/techno-config';

const TechnologiesSection = () => {
  const featuredStack =
    technoConfig.tabContent.find((item) => item.value === 'mostUsed')?.content.slice(0, 6) ?? [];
  const categorizedStack = technoConfig.tabContent.filter((item) => item.value !== 'mostUsed');

  return (
    <section id="technologies" className="section-shell bg-muted/20">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">{technoConfig.title}</h2>
          <div className="section-line" />
        </div>

        <Separator className="h-px mb-6 bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent" />

        <div className="glass-card canva-gradient-soft p-4 sm:p-6 md:p-8">
          <p className="text-sm sm:text-base text-muted-foreground mb-5">
            Core technologies I rely on to build fast, scalable, and polished product experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
            {featuredStack.map((item) => (
              <Tooltip key={item.tooltip}>
                <TooltipTrigger asChild>
                  <div className="group rounded-xl border border-primary/20 bg-background/85 px-3 py-3 sm:py-4 flex flex-col items-center gap-2 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-secondary/20">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground">
                      {item.tooltip}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{item.tooltip}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categorizedStack.map((category) => (
              <div key={category.value} className="rounded-xl border border-border/80 bg-background/70 p-4">
                <h3 className="text-sm sm:text-base font-semibold mb-3 text-foreground">{category.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.content.map((item) => (
                    <Tooltip key={`${category.value}-${item.tooltip}`}>
                      <TooltipTrigger asChild>
                        <div className="rounded-lg border border-border/80 bg-background/85 p-2 transition-all hover:border-primary/60 hover:shadow-sm">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{item.tooltip}</span>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
