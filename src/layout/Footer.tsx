import { React, SchadCn, Tailwind, TypeScript, Vite } from '@/assets/technologies';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t px-4 md:px-10 lg:px-20">
      <div className="text-muted-foreground text-center md:text-left">
        <p>© Designed and developed by Ravi Teja Ladi.</p>
      </div>
      <div className="text-muted-foreground text-center md:text-right">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span>Powered by</span>
          <div className="flex gap-2 items-center">
            <React className="size-4" />
            <TypeScript className="size-4" />
            <Tailwind className="size-4" />
            <SchadCn className="size-4" />
            <Vite className="size-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
