import { React, SchadCn, Tailwind, TypeScript, Vite } from '@/assets/technologies';

const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-border py-4 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © Designed and developed by Ravi Teja Ladi.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Powered by</span>
          <div className="flex items-center gap-2">
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
