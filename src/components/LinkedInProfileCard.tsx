import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const profilePic = '/images/avatar.webp';
import { cn } from '@/lib/utils';
import { contactInfo } from '@/config/contact-config';

export default function LinkedInProfileCard() {
  return (
    <Card className="overflow-hidden bg-muted/30 m-0 border-primary/20">
      {/* LinkedIn Header */}
      <CardHeader className="bg-[#0A66C2] py-3">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold text-white">Linked</div>
          <div className="rounded-[4px] bg-white/15 px-1.5 py-0.5 text-sm font-semibold text-white">
            in
          </div>
        </div>
      </CardHeader>

      {/* Profile Content */}
      <CardContent className="p-4 sm:p-6 bg-inherit space-y-4">
        {/* Profile Picture */}
        <div className="flex justify-start">
          <Avatar className="w-20 h-20">
            <AvatarImage className="object-cover" src={profilePic} alt="Profile Picture" />
            <AvatarFallback className="bg-slate-600 text-foreground text-xl">RT</AvatarFallback>
          </Avatar>
        </div>

        <div className="text-start">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Ravi Teja</h2>
        </div>

        {/* Job Title and Skills */}
        <div className="text-start space-y-1">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Sr. Software Engineer | 4+ yrs React.js, Next.js | TypeScript, Zustand, Redux, Hooks |
            Node.js, Express, MongoDB | Full-Stack JS Developer
          </p>
        </div>

        {/* Education */}
        <div className="text-start">
          <p className="text-sm text-muted-foreground">
            FluidFit.ai | Centurion University of Technology and Management
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
