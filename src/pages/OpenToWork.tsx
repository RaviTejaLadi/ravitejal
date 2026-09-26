import { Card } from '@/components/ui/card';
import { Minus, Square, Terminal, X } from 'lucide-react';

const OpenToWork = () => {
  const renderJsonWithHighlight = () => {
    return (
      <div className="text-green-400 p-4 sm:p-6 rounded-lg overflow-x-auto font-mono text-xs sm:text-sm">
        <div className="whitespace-pre">
          <span className="text-gray-500">{'{'}</span>
          <div className="ml-4">
            <span className="text-blue-400">"name"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Ravi Teja"</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"openToWork"</span>
            <span className="text-white">: </span>
            <span className="text-orange-400">true</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"jobTitles"</span>
            <span className="text-white">: </span>
            <span className="text-gray-500">[</span>
            <div className="ml-4">
              <span className="text-yellow-300">"Senior Frontend Engineer"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"React Developer"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Frontend Developer"</span>
            </div>
            <span className="text-gray-500">]</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"locations"</span>
            <span className="text-white">: </span>
            <span className="text-gray-500">[</span>
            <div className="ml-4">
              <span className="text-yellow-300">"Bengaluru"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Hyderabad"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Visakhapatnam"</span>
            </div>
            <span className="text-gray-500">]</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"employmentType"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Full-time"</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"startDate"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Immediate"</span>
          </div>
          <span className="text-gray-500">{'}'}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="open-to-work" className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Open To Work</h2>
          <div className="section-line" />
        </div>

        <Card className="glass-card mx-auto w-full max-w-3xl overflow-hidden p-0">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-3 py-2">
            <Terminal className="size-4 text-primary" />
            <span className="text-xs text-muted-foreground">open-to-work.json</span>
            <div className="ml-auto flex items-center gap-1 text-muted-foreground">
              <span className="grid size-7 place-items-center rounded-[4px] hover:bg-foreground/10">
                <Minus className="size-3.5" />
              </span>
              <span className="grid size-7 place-items-center rounded-[4px] hover:bg-foreground/10">
                <Square className="size-3" />
              </span>
              <span className="grid size-7 place-items-center rounded-[4px] hover:bg-red-500 hover:text-white">
                <X className="size-3.5" />
              </span>
            </div>
          </div>
          <div className="bg-[#0c0c0c]">{renderJsonWithHighlight()}</div>
        </Card>
      </div>
    </section>
  );
};

export default OpenToWork;
