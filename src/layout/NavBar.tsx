import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navConfig } from '@/config/nav-config';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className="mx-auto mt-3 max-w-6xl rounded-xl border border-primary/20 bg-background/85 shadow-lg shadow-secondary/10 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            <a
              className="badge-base__link LI-simple-link bg-gradient-to-r from-primary via-sky-500 to-secondary bg-clip-text text-transparent"
              href="https://www.linkedin.com/in/ravi-teja-ladi/"
            >
              {navConfig.user}
            </a>
          </span>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navConfig.links.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="group flex items-center gap-2 text-sm lg:text-base font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <link.icon className="size-4 group-hover:text-primary" />
                <span>{link.name}</span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="rounded-md p-2 transition-colors hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden border-t border-border/60 transition-all md:hidden',
            isMenuOpen ? 'max-h-96 py-3' : 'max-h-0 py-0',
          )}
        >
          <div className="flex flex-col gap-1 px-3 pb-2">
            {navConfig.mobileLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-primary"
              >
                <link.icon className="size-4 text-[--icon-color]" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
