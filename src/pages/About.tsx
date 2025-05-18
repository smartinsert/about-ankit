import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
    <div className='min-h-screen'>
      <section className='py-12'>
        <div className='container'>
          <div className='code-block mb-8'>
            <p className='text-muted-foreground'>// About Me</p>
          </div>
          <h1 className='text-4xl font-bold mb-8 gradient-text'>About Me</h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 space-y-8'>
              <Card className='relative overflow-hidden group hover:shadow-lg transition-shadow'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full' />
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <span className='text-primary'>{'<'}</span>
                    <h2 className='text-2xl font-semibold'>
                      Professional Summary
                    </h2>
                    <span className='text-primary'>{'/>'}</span>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p>
                    I am a Full Stack Software Engineer and Engineering Manager
                    with extensive experience in the financial technology
                    sector. With a career spanning over a decade, I've honed my
                    skills across various technologies and domains, focusing on
                    building scalable, high-performance systems that handle
                    billions in transaction volumes.
                  </p>
                  <p>
                    My expertise includes optimizing application performance,
                    revamping user interfaces, and implementing robust backend
                    solutions. I've worked with a variety of programming
                    languages including Java, Python, and C++, and have
                    experience with frameworks such as Spring, Quarkus, Django,
                    and Node.js.
                  </p>
                  <p>
                    In my current role at Goldman Sachs, I lead engineering
                    efforts for the Marquee platform, focusing on MarketFeed
                    performance optimization and UI enhancements. Prior to this,
                    I worked at Morgan Stanley where I contributed to migrating
                    and scaling their global settlements platform.
                  </p>
                </CardContent>
              </Card>

              <Card className='relative overflow-hidden group hover:shadow-lg transition-shadow'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full' />
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <span className='text-primary'>{'<'}</span>
                    <h2 className='text-2xl font-semibold'>
                      Personal Interests
                    </h2>
                    <span className='text-primary'>{'/>'}</span>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p>
                    Beyond my professional life, I'm passionate about technology
                    trends, travel, and continuous learning. I enjoy exploring
                    new programming languages and frameworks, and I frequently
                    watch tech conferences videos to stay updated with the
                    latest industry developments.
                  </p>
                  <p>
                    In my free time, I love traveling to new places,
                    experiencing different cultures, and documenting my
                    journeys. I also enjoy reading technical books and articles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className='space-y-8'>
              <Card className='overflow-hidden group hover:shadow-lg transition-shadow'>
                <div className='relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center p-4'>
                      <div className='w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform'>
                        <span className='text-4xl font-bold text-white font-mono'>
                          AT
                        </span>
                      </div>
                      <p className='text-sm text-muted-foreground font-mono'>
                        // Photo coming soon
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent' />
                </div>
                <CardContent className='p-4'>
                  <div className='flex justify-center space-x-4'>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary font-mono'>
                        10+
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Years Experience
                      </p>
                    </div>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary font-mono'>
                        50+
                      </p>
                      <p className='text-sm text-muted-foreground'>Projects</p>
                    </div>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary font-mono'>
                        3
                      </p>
                      <p className='text-sm text-muted-foreground'>Companies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='mb-8 group hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <span className='text-primary'>{'<'}</span>
                    <h2 className='text-2xl font-semibold'>Education</h2>
                    <span className='text-primary'>{'/>'}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='mb-4'>
                    <h3 className='text-lg font-medium'>
                      Indian Institute of Technology, Bombay
                    </h3>
                    <p className='text-primary font-mono'>
                      Bachelor's in Chemical Engineering
                    </p>
                    <p className='text-sm text-muted-foreground font-mono'>
                      June 2008 - August 2012 | Mumbai, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='group hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <span className='text-primary'>{'<'}</span>
                    <h2 className='text-2xl font-semibold'>Recognition</h2>
                    <span className='text-primary'>{'/>'}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    <li className='flex items-start'>
                      <span className='mr-2 mt-1 text-primary font-mono'>
                        →
                      </span>
                      <div>
                        <p>CEO Special Team Award 2022 (Morgan Stanley)</p>
                      </div>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2 mt-1 text-primary font-mono'>
                        →
                      </span>
                      <div>
                        <p>Outstanding Delivery Feb 2022 (Morgan Stanley)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
