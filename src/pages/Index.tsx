import Hero from '@/components/hero';
import SkillsSection from '@/components/skills-section';
import ExperienceCard from '@/components/experience-card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const experiences = [
    {
      company: 'Goldman Sachs',
      position: 'Vice President - Marquee',
      duration: 'November 2022 - Present',
      location: 'Bengaluru, India',
      responsibilities: [
        'Optimized MarketFeed performance, reducing load time for 40 items per page from 4s to 200ms, significantly improving user experience.',
        'Revamped MarketFeed UI with hero images, embedded interactives, and smooth/follow features, leading to a measurable increase in 5 day average active users by 103% over a period of a year.',
        'Spearheaded initiatives to boost feed engagement, launching Marquee MarketPoll and Marquee Minute, driving increase in MAU to 153% in a span of a year.',
        'Implemented a MongoDB-based Quarkus caching solution, replacing Caffeine after a thorough cost-benefit analysis of alternatives like Redis.',
      ],
    },
    {
      company: 'Morgan Stanley',
      position: 'Senior Manager',
      duration: 'June 2020 - November 2022',
      location: 'Mumbai, India',
      responsibilities: [
        'Contributed in migrating and scaling the global settlements platforms BFF component to handle the extraordinary volume of daily transactions and 3K users on average. Implemented CORS pattern on an event-driven architecture, designing a high read-to-write ratio of 8:1 effectively.',
        'Developed a new settlement function for the global settlements platform, enabling efficient handling of transactions worth billions from existing and newly acquired sources.',
      ],
    },
  ];

  return (
    <div className='min-h-screen'>
      <Hero />

      <section className='py-12 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background' />
        <div className='container relative'>
          <div className='code-block mb-8'>
            <p className='text-muted-foreground'>// Featured Experience</p>
          </div>
          <h2 className='text-3xl font-bold mb-6 gradient-text'>
            Featured Experience
          </h2>
          <div className='space-y-6'>
            {experiences.slice(0, 2).map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                position={exp.position}
                duration={exp.duration}
                location={exp.location}
                responsibilities={exp.responsibilities}
              />
            ))}
          </div>
          <div className='mt-8 text-center'>
            <Button
              variant='outline'
              className='hover:bg-primary hover:text-primary-foreground transition-colors group'
              asChild
            >
              <Link
                to='/experience'
                className='flex items-center gap-2'
              >
                View All Experience
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className='py-12 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background' />
        <div className='container relative'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='max-w-xl'>
              <div className='code-block mb-4'>
                <p className='text-muted-foreground'>// Let's Connect</p>
              </div>
              <h2 className='text-3xl font-bold mb-4 gradient-text'>
                Let's Connect
              </h2>
              <p className='text-muted-foreground mb-6'>
                Whether you want to discuss a project, have a question, or just
                want to say hello, feel free to reach out. I'm always open to
                new opportunities and collaborations.
              </p>
              <Button
                className='bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group'
                asChild
              >
                <Link
                  to='/contact'
                  className='flex items-center gap-2'
                >
                  Contact Me
                  <span className='group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </Link>
              </Button>
            </div>
            <div className='terminal w-full max-w-sm group hover:shadow-lg transition-all'>
              <div className='terminal-header'>
                <div className='terminal-dot terminal-dot-red'></div>
                <div className='terminal-dot terminal-dot-yellow'></div>
                <div className='terminal-dot terminal-dot-green'></div>
              </div>
              <div className='space-y-2 font-mono'>
                <p className='text-blue-400'>
                  $ npm install @ankitthakur/portfolio
                </p>
                <p className='text-green-400'>✓ Successfully installed!</p>
                <p className='text-blue-400'>$ npm run connect</p>
                <p className='text-blue-400'>→ Opening connection...</p>
                <p className='text-green-400'>✓ Connected successfully!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
