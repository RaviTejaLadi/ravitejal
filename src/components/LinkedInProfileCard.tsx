import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profilePic from '../assets/avatar1.jpg';
import { cn } from '@/lib/utils';
import { contactInfo } from '@/config/contact-config';

export default function LinkedInProfileCard() {
  return (
    <Card className="overflow-hidden bg-muted/30 m-0">
      {/* LinkedIn Header */}
      <CardHeader className="bg-slate-700 py-3">
        <div className="flex items-center gap-2">
          <div className="text-white font-bold text-lg">Linked</div>
          <div className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-sm font-bold">in</div>
        </div>
      </CardHeader>

      {/* Profile Content */}
      <CardContent className="p-6 bg-inherit space-y-4">
        {/* Profile Picture */}
        <div className="flex justify-start">
          <Avatar className="w-20 h-20">
            <AvatarImage className="object-cover" src={profilePic} alt="Profile Picture" />
            <AvatarFallback className="bg-slate-600 text-foreground text-xl">RT</AvatarFallback>
          </Avatar>
        </div>

        {/* Name with Sparkle */}
        <div className="text-start">
          <h2 className="text-xl font-bold flex items-center text-foreground justify-start gap-2">
            RAVI TEJA
            <span className="text-yellow-400">✨</span>
          </h2>
        </div>

        {/* Job Title and Skills */}
        <div className="text-start space-y-1">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Software Engineer | 3+ yrs ReactJs | Zustand, Redux, Hooks | NodeJs, Express, MongoDB |
            Full-Stack JS Developer
          </p>
        </div>

        {/* Education */}
        <div className="text-start">
          <p className="text-sm text-muted-foreground">
            Aventisia | Centurion University of Technology and Management
          </p>
        </div>

        {/* View Profile Button */}
        <div className="flex justify-start pt-2">
          <a
            href={contactInfo.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'rounded-full')}
          >
            View profile
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
