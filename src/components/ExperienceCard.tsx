
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  responsibilities 
}: ExperienceCardProps) => {
  return (
    <Card className="mb-6 hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle className="text-xl font-bold">{company}</CardTitle>
            <p className="text-primary font-medium">{position}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <time>{duration}</time>
            <p>{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-primary">→</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
