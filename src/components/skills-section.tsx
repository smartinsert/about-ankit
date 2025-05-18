import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 'Proficient' },
      { name: 'Python', level: 'Experienced' },
      { name: 'C++', level: 'Experienced' },
      { name: 'TypeScript', level: 'Familiar' },
      { name: 'HTML', level: 'Familiar' },
    ],
  },
  {
    title: 'Libraries/Frameworks',
    skills: [
      { name: 'Spring' },
      { name: 'Quarkus' },
      { name: 'Django' },
      { name: 'Dash.js' },
      { name: 'Node.js' },
      { name: 'React' },
      { name: 'Akka' },
      { name: 'Kafka' },
    ],
  },
  {
    title: 'Tools/Platforms',
    skills: [
      { name: 'Git' },
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'Webpack' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'DynamoDB' },
      { name: 'EventStore' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className='py-12 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5' />
      <div className='container relative'>
        <div className='code-block mb-4'>
          <span className='text-muted-foreground'>// Tech Stack & Skills</span>
        </div>
        <h2 className='text-3xl font-bold mb-6 gradient-text'>Skills</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className='h-full group hover:shadow-lg transition-all relative overflow-hidden'
            >
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full' />
              <CardHeader>
                <CardTitle className='group-hover:text-primary transition-colors'>
                  <span className='text-muted-foreground'>&lt;</span>
                  {category.title}
                  <span className='text-muted-foreground'>/&gt;</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant={
                        skill.level === 'Proficient'
                          ? 'default'
                          : skill.level === 'Experienced'
                          ? 'secondary'
                          : 'outline'
                      }
                      className='text-sm font-mono group-hover:scale-105 transition-transform'
                    >
                      {skill.name}
                      {skill.level && (
                        <span className='ml-1 text-xs opacity-75'>
                          ({skill.level})
                        </span>
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
