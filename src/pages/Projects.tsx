
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Trading Order Book",
    description: "Developed a high-performance order book system for tracking and matching trading orders in real-time, supporting thousands of transactions per second.",
    technologies: ["Java", "Spring", "Redis", "Kafka"],
  },
  {
    title: "Online Book Store",
    description: "Built a full-stack e-commerce platform for selling books online, featuring user authentication, shopping cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Other Projects</h2>
            <p className="text-muted-foreground mb-6">
              I've worked on numerous other projects throughout my career, many of which are proprietary
              and cannot be shared in detail. These include financial trading systems, settlement
              platforms, and data analytics dashboards for major financial institutions.
            </p>
            <p className="text-muted-foreground">
              If you'd like to discuss my project experience in more detail, please feel free to
              <a href="/contact" className="text-primary hover:underline ml-1">contact me</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
