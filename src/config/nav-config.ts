import {
  Award,
  Code,
  FileText,
  GraduationCap,
  Layers,
  LucideIcon,
  PhoneCall,
  User,
  UserCheck,
} from 'lucide-react';

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
    { name: 'Tech Stack', href: '#technologies', icon: Layers },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: UserCheck },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact-info', icon: PhoneCall },
  ],
  mobileLinks: [
    { name: 'About', href: '#about', icon: User },
    { name: 'Tech Stack', href: '#technologies', icon: Layers },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: UserCheck },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact-info', icon: PhoneCall },
  ],
};
