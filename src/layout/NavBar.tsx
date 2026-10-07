import { Menu, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { navConfig } from '@/config/nav-config';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const NAV_COLLAPSED_KEY = 'nav-collapsed';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem(NAV_COLLAPSED_KEY) === 'true',
  );
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches);
  const [active, setActive] = useState(navConfig.links[0]?.href ?? '#about');

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('nav-collapsed', collapsed);
    localStorage.setItem(NAV_COLLAPSED_KEY, String(collapsed));
  }, [collapsed]);

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

  const renderLinks = (onNavigate?: () => void, compact = false) =>
    navConfig.links.map((link) => {
      const item = (
        <a
          href={link.href}
          key={link.name}
          onClick={onNavigate}
          className={cn('win-nav-item', active === link.href && 'is-active')}
          aria-label={compact ? link.name : undefined}
        >
          <link.icon className="size-4 shrink-0" />
          <span className="win-nav-label">{link.name}</span>
        </a>
      );

      if (!compact) return item;

      return (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>{item}</TooltipTrigger>
          <TooltipContent side="right">{link.name}</TooltipContent>
        </Tooltip>
      );
    });

  return (
    <>
      <header className="win-titlebar">
        <button
          className="grid size-8 place-items-center rounded-[4px] hover:bg-black/[0.037] dark:hover:bg-white/[0.06]"
          onClick={() => {
            if (isDesktop) {
              setCollapsed((open) => !open);
              return;
            }
            setIsMenuOpen((open) => !open);
          }}
          aria-label={
            isDesktop ? (collapsed ? 'Expand navigation' : 'Collapse navigation') : 'Toggle menu'
          }
          aria-expanded={isDesktop ? !collapsed : isMenuOpen}
        >
          <span className="md:hidden">{isMenuOpen ? <X size={16} /> : <Menu size={16} />}</span>
          <Menu size={16} className="hidden md:block" />
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
        <p className="win-nav-heading px-3 pb-1 pt-1 text-xs font-semibold text-muted-foreground">
          Portfolio
        </p>
        {renderLinks(undefined, collapsed)}
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="#open-to-work" className="win-status mx-3 mt-auto" aria-label="Open to work">
              <span className="win-status-dot size-1.5 shrink-0 rounded-full bg-current" />
              <span className="win-nav-label">Open to work</span>
            </a>
          </TooltipTrigger>
          {collapsed ? <TooltipContent side="right">Open to work</TooltipContent> : null}
        </Tooltip>
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
