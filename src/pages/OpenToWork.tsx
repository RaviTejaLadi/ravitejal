import { Card } from '@/components/ui/card';
import ReactJson from 'react-json-view';

const OpenToWork = () => {
  const openToWorkData = {
    name: 'Ravi Teja',
    openToWork: true,
    jobTitles: ['React Developer', 'Frontend Developer', 'Senior Frontend Developer'],
    locations: ['Bengaluru', 'Hyderabad', 'Vishakapatanam'],
    employmentType: 'Full Time',
    startDate: 'Immediately, I am actively applying',
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

        <Card className="mx-auto bg-inherit p-5 w-1/2">
          <ReactJson
            src={openToWorkData}
            theme="ocean"
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
            collapsed={false}
            name={null}
            style={{
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              fontSize: '14px',
              lineHeight: '1.5',
              backgroundColor: 'inherit',
              padding: '5px',
              border: '5px',
            }}
          />
        </Card>
      </div>
    </section>
  );
};

export default OpenToWork;
