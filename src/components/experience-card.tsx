import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const ExperienceCard = ({
  company,
  position,
  duration,
  location,
  responsibilities,
}: ExperienceCardProps) => {
  // Convert company name to lowercase and replace spaces with hyphens for the logo filename
  const logoPath = `/logos/${company.toLowerCase().replace(/\s+/g, '-')}.png`;

  return (
    <Card className='group hover:shadow-lg transition-all relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full' />
      <CardHeader>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-lg bg-card/50 border border-border/50 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform'>
              <img
                src={logoPath}
                alt={`${company} logo`}
                className='w-full h-full object-cover'
                onError={(e) => {
                  // If logo fails to load, show company initials
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const initials = company
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase();
                    parent.innerHTML = `<span class="text-lg font-bold text-primary">${initials}</span>`;
                  }
                }}
              />
            </div>
            <div>
              <CardTitle className='text-xl font-bold group-hover:text-primary transition-colors'>
                {company}
              </CardTitle>
              <p className='text-primary font-mono'>{position}</p>
            </div>
          </div>
          <div className='text-sm text-muted-foreground font-mono'>
            <time>{duration}</time>
            <p>{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2'>
          {responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className='flex items-start group/item'
            >
              <span className='mr-2 mt-1 text-primary font-mono group-hover/item:translate-x-1 transition-transform'>
                →
              </span>
              <span className='group-hover/item:text-primary/80 transition-colors'>
                {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
