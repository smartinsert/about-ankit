
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Experienced" },
      { name: "C++", level: "Experienced" },
      { name: "TypeScript", level: "Familiar" },
      { name: "HTML", level: "Familiar" },
    ],
  },
  {
    title: "Libraries/Frameworks",
    skills: [
      { name: "Spring" },
      { name: "Quarkus" },
      { name: "Django" },
      { name: "Dash.js" },
      { name: "Node.js" },
      { name: "React" },
      { name: "Akka" },
      { name: "Kafka" },
    ],
  },
  {
    title: "Tools/Platforms",
    skills: [
      { name: "Git" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "Webpack" },
      { name: "Docker" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "DynamoDB" },
      { name: "EventStore" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant={skill.level === "Proficient" ? "default" : 
                             skill.level === "Experienced" ? "secondary" : "outline"} 
                      className="text-sm"
                    >
                      {skill.name}
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
