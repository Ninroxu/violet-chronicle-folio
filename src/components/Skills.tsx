import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Smartphone, Palette, Globe } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🎨" }
    ]
  },
  {
    category: "Backend Development", 
    icon: Server,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express", icon: "🚀" },
      { name: "GraphQL", icon: "🔗" }
    ]
  },
  {
    category: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" }
    ]
  },
  {
    category: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe XD", icon: "🎭" },
      { name: "Prototyping", icon: "📐" },
      { name: "UI/UX", icon: "✨" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Globe,
    skills: [
      { name: "Git", icon: "📊" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Testing", icon: "🧪" },
      { name: "Linux", icon: "🐧" }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="glass-card rounded-apple p-8 group">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    </div>
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

export default Skills;