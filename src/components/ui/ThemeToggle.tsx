import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from './button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="size-4 text-muted-foreground" />
      ) : (
        <Sun className="size-4 text-muted-foreground" />
      )}
    </Button>
  );
};
