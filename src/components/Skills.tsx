import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Server, Smartphone, Globe, Database } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "HTML5", "JavaScript ES6+"],
    color: "text-blue-500"
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    skills: ["Node.js", "Python", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
    color: "text-green-500"
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-8 h-8" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
    color: "text-purple-500"
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-8 h-8" />,
    skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps", "Responsive Design"],
    color: "text-orange-500"
  },
  {
    category: "Design & UX",
    icon: <Palette className="w-8 h-8" />,
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    color: "text-pink-500"
  },
  {
    category: "DevOps & Tools",
    icon: <Globe className="w-8 h-8" />,
    skills: ["Linux", "Nginx", "Jenkins", "Terraform", "Monitoring", "Testing", "Agile/Scrum"],
    color: "text-indigo-500"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary to-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillSet, index) => (
            <Card key={index} className="group glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-primary text-white group-hover:animate-glow transition-all duration-300`}>
                  {skillSet.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {skillSet.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm glass-card text-foreground rounded-full border border-border/30 hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">20+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;