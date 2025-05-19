import { Code, FileCode2, LucideIcon, User, UserCheck } from 'lucide-react';

export interface NavLinks {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface UserLinks {
  user: string;
  links: NavLinks[];
  mobileLinks: NavLinks[];
}

export const navConfig: UserLinks = {
  user: 'Ravi Teja',
  links: [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: UserCheck },
    { name: 'Resume', href: '#resume', icon: FileCode2 },
  ],
  mobileLinks: [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: UserCheck },
    { name: 'Resume', href: '#resume', icon: FileCode2 },
  ],
};
