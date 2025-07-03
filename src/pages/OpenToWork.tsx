import { Card } from '@/components/ui/card';

const OpenToWork = () => {
  const renderJsonWithHighlight = () => {
    return (
      <div className=" text-green-400 p-6 rounded-lg overflow-x-auto font-mono text-sm">
        <div className="whitespace-pre">
          <span className="text-gray-500">{'{'}</span>
          <div className="ml-4">
            <span className="text-blue-400">"name"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Ravi Teja 👨‍💻"</span>
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
              <span className="text-yellow-300">"React Developer ⚛️"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Frontend Developer 🌐"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Senior Frontend Developer 🚀"</span>
            </div>
            <span className="text-gray-500">]</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"locations"</span>
            <span className="text-white">: </span>
            <span className="text-gray-500">[</span>
            <div className="ml-4">
              <span className="text-yellow-300">"Bengaluru 🏙️"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Hyderabad 🌆"</span>
              <span className="text-white">,</span>
            </div>
            <div className="ml-4">
              <span className="text-yellow-300">"Vishakapatanam 🌊"</span>
            </div>
            <span className="text-gray-500">]</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"employmentType"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Full Time 🕒"</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-blue-400">"startDate"</span>
            <span className="text-white">: </span>
            <span className="text-yellow-300">"Immediately, I am actively applying 📩"</span>
          </div>
          <span className="text-gray-500">{'}'}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-28 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Open To Work
          </h2>
          <div className="ml-4 h-px bg-gradient-to-r from-purple-600 to-pink-600/30 flex-grow" />
        </div>

        <Card className="bg-inherit w-1/2 mx-auto">{renderJsonWithHighlight()}</Card>
      </div>
    </section>
  );
};

export default OpenToWork;
