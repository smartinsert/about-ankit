
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Professional Summary</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I am a Full Stack Software Engineer and Engineering Manager with extensive experience
                    in the financial technology sector. With a career spanning over a decade, I've
                    honed my skills across various technologies and domains, focusing on building
                    scalable, high-performance systems that handle billions in transaction volumes.
                  </p>
                  <p>
                    My expertise includes optimizing application performance, revamping user interfaces,
                    and implementing robust backend solutions. I've worked with a variety of programming
                    languages including Java, Python, and C++, and have experience with frameworks
                    such as Spring, Quarkus, Django, and Node.js.
                  </p>
                  <p>
                    In my current role at Goldman Sachs, I lead engineering efforts for the Marquee
                    platform, focusing on MarketFeed performance optimization and UI enhancements.
                    Prior to this, I worked at Morgan Stanley where I contributed to migrating and
                    scaling their global settlements platform.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Education</h2>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Indian Institute of Technology, Bombay</h3>
                    <p className="text-primary">Bachelor's in Chemical Engineering</p>
                    <p className="text-sm text-muted-foreground">June 2008 - August 2012 | Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Recognition</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">→</span>
                      <div>
                        <p>CEO Special Team Award 2022 (Morgan Stanley)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">→</span>
                      <div>
                        <p>Outstanding Delivery Feb 2022 (Morgan Stanley)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Personal Interests</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Beyond my professional life, I'm passionate about technology trends, travel, and
                  continuous learning. I enjoy exploring new programming languages and frameworks,
                  and I frequently attend tech conferences and workshops to stay updated with the
                  latest industry developments.
                </p>
                <p>
                  In my free time, I love traveling to new places, experiencing different cultures,
                  and documenting my journeys. I also enjoy reading technical books and articles,
                  and occasionally contribute to open-source projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
