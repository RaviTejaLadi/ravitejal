import { React, SchadCn, Tailwind, TypeScript, Vite } from '@/assets/technologies';

const Footer = () => {
  return (
    <footer className="px-3 sm:px-6 pb-6 sm:pb-8 pt-2">
      <div className="mx-auto max-w-6xl rounded-xl border border-primary/20 bg-background/85 shadow-lg shadow-secondary/10 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm sm:text-base text-muted-foreground text-center md:text-left">
            <p>© Designed and developed by Ravi Teja Ladi.</p>
          </div>
          <div className="text-sm sm:text-base text-muted-foreground text-center md:text-right">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="bg-gradient-to-r from-primary via-sky-500 to-secondary bg-clip-text text-transparent font-medium">
                Powered by
              </span>
              <div className="flex gap-2 items-center">
                <React className="size-4" />
                <TypeScript className="size-4" />
                <Tailwind className="size-4" />
                <SchadCn className="size-4" />
                <Vite className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
