import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navConfig } from '@/config/nav-config';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(navConfig.links[0]?.href ?? '#about');

  useEffect(() => {
    const ids = navConfig.links.map((link) => link.href.replace('#', ''));

    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < 88) current = id;
      }
      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderLinks = (onNavigate?: () => void) =>
    navConfig.links.map((link) => (
      <a
        href={link.href}
        key={link.name}
        onClick={onNavigate}
        className={cn('win-nav-item', active === link.href && 'is-active')}
      >
        <link.icon className="size-4 shrink-0" />
        <span>{link.name}</span>
      </a>
    ));

  return (
    <>
      <header className="win-titlebar">
        <button
          className="grid size-8 place-items-center rounded-[4px] hover:bg-black/[0.037] md:hidden dark:hover:bg-white/[0.06]"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
        <a href="#about" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-[4px] bg-primary text-[10px] font-semibold text-primary-foreground">
            RT
          </span>
          <span className="truncate text-sm font-semibold">{navConfig.user}</span>
        </a>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <nav className="win-nav hidden md:flex" aria-label="Sections">
        <p className="px-3 pb-1 pt-1 text-xs font-semibold text-muted-foreground">Portfolio</p>
        {renderLinks()}
        <a href="#open-to-work" className="win-status mx-3 mt-auto">
          <span className="size-1.5 rounded-full bg-current" />
          Open to work
        </a>
      </nav>

      {isMenuOpen && (
        <div className="win-flyout fixed inset-x-3 top-14 z-50 rounded-lg p-2 md:hidden">
          <nav className="flex flex-col gap-0.5" aria-label="Sections">
            {renderLinks(() => setIsMenuOpen(false))}
            <a
              href="#open-to-work"
              onClick={() => setIsMenuOpen(false)}
              className="win-status mx-3 my-2"
            >
              <span className="size-1.5 rounded-full bg-current" />
              Open to work
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
