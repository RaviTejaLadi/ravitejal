import { useEffect, useState } from 'react';
import { Button } from './button';
import { ArrowUp } from 'lucide-react';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <Button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-primary p-2 text-muted-foreground  transition-colors duration-200"
        variant={'ghost'}
        size="icon"
      >
        <ArrowUp className="size-4" />
      </Button>
    </div>
  );
};

export default ScrollTop;
