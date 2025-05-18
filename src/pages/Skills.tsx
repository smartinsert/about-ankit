import SkillsSection from '@/components/skills-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  return (
    <div className='min-h-screen'>
      <section className='py-12'>
        <div className='container'>
          <h1 className='text-4xl font-bold mb-8'>My Skills</h1>

          <SkillsSection />

          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p>
                  With over a decade of experience in software development, I've
                  developed expertise across the full stack with particular
                  strengths in:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    <strong>Backend Development:</strong> Building
                    high-performance, scalable backend systems using Java,
                    Python, and C++
                  </li>
                  <li>
                    <strong>Database Design & Optimization:</strong> Working
                    with PostgreSQL, MongoDB, and other database technologies to
                    design efficient data storage solutions
                  </li>
                  <li>
                    <strong>System Architecture:</strong> Designing event-driven
                    architectures and microservices for complex financial
                    systems
                  </li>
                  <li>
                    <strong>Cloud Infrastructure:</strong> Deploying and
                    managing applications on AWS and Azure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Skills</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p>
                  Beyond technical abilities, I've cultivated important
                  professional skills:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    <strong>Team Leadership:</strong> Managing engineering teams
                    and mentoring junior developers
                  </li>
                  <li>
                    <strong>Project Management:</strong> Leading complex
                    technical projects from conception to deployment
                  </li>
                  <li>
                    <strong>Problem Solving:</strong> Analyzing complex
                    technical challenges and developing efficient solutions
                  </li>
                  <li>
                    <strong>Communication:</strong> Clearly explaining technical
                    concepts to both technical and non-technical stakeholders
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
