import { Card } from '@/components/ui/card';

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
    <section className="section-shell">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Open To Work</h2>
          <div className="section-line" />
        </div>

        <Card className="glass-card bg-slate-950 max-w-3xl mx-auto w-full">{renderJsonWithHighlight()}</Card>
      </div>
    </section>
  );
};

export default OpenToWork;
