import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Trading Order Book',
    description:
      'Developed a high-performance order book system for tracking and matching trading orders in real-time, supporting thousands of transactions per second.',
    technologies: ['Java', 'Spring'],
    githubUrl: 'https://github.com/smartinsert/about-ankit',
  },
  {
    title: 'Online Book Store',
    description: 'Built a full-stack online book reading platform.',
    technologies: ['React', 'Node.js', 'SQLite'],
    githubUrl: 'https://github.com/smartinsert/kindle-library',
  },
  {
    title: 'High Performance Asset Service',
    description:
      'A high-performance distributed asset management system demonstrating gRPC streaming, multi-level caching, and managed channel round-robin concurrent batch requests.',
    technologies: ['Java', 'Spring', 'Redis', 'gRPC'],
    githubUrl: 'https://github.com/smartinsert/high-performance-asset-service',
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen'>
      <section className='py-12 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5' />
        <div className='container relative'>
          <div className='code-block mb-4'>
            <span className='text-muted-foreground'>// Featured Projects</span>
          </div>
          <h1 className='text-4xl font-bold mb-8 gradient-text'>Projects</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all relative overflow-hidden'
              >
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full' />
                <CardHeader>
                  <CardTitle className='text-xl group-hover:text-primary transition-colors'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1'
                    >
                      <span className='text-muted-foreground'>&lt;</span>
                      {project.title}
                      <span className='text-muted-foreground'>/&gt;</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1 text-blue-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M14 3h7m0 0v7m0-7L10 14'
                        />
                      </svg>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='mb-4 text-muted-foreground font-mono'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant='outline'
                        className='font-mono group-hover:scale-105 transition-transform'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='mt-12 relative'>
            <div className='code-block mb-4'>
              <span className='text-muted-foreground'>// Other Projects</span>
            </div>
            <h2 className='text-2xl font-bold mb-4 gradient-text'>
              Other Projects
            </h2>
            <div className='bg-card/50 p-6 rounded-lg border border-border/50'>
              <p className='text-muted-foreground mb-6 font-mono'>
                I've worked on numerous other projects throughout my career,
                many of which are proprietary and cannot be shared in detail.
                These include financial trading systems, settlement platforms,
                and data analytics dashboards for major financial institutions.
              </p>
              <p className='text-muted-foreground font-mono'>
                If you'd like to discuss my project experience in more detail,
                please feel free to{' '}
                <Link
                  to='/contact'
                  className='text-primary hover:text-primary/80 transition-colors inline-flex items-center group'
                >
                  contact me
                  <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
