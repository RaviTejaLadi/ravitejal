import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navConfig } from '@/config/nav-config';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-auto fixed w-[85%] left-[7.5%] my-3 bg-background/80 border backdrop-blur-sm z-50 border-b shadow-sm rounded-lg transition-all">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary tracking-wide">
            <a
              className="badge-base__link LI-simple-link"
              href="https://in.linkedin.com/in/ravi-teja-%E2%9C%A8-2a2989145?trk=profile-badge"
            >
              {navConfig.user}
            </a>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navConfig.links.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="group tracking-wide flex gap-2 items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <link.icon className="size-4 group-hover:text-primary " />
                <span> {link.name}</span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden transition-all overflow-hidden bg-background shadow-md',
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0',
        )}
      >
        <div className="flex flex-col gap-2 px-4">
          {navConfig.mobileLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="flex items-center tracking-wide gap-2 px-3 py-2 text-base hover:bg-accent rounded-sm transition-colors duration-200"
            >
              <link.icon className="size-4 group-hover:text-primary text-[--icon-color]" />
              <span> {link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
