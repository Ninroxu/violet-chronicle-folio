import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Co.",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc.",
    description: "Developed and maintained multiple client projects, focusing on modern web technologies and user experience optimization.",
    technologies: ["React", "Next.js", "Python", "PostgreSQL", "Tailwind CSS"]
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "Creative Agency",
    description: "Specialized in creating responsive, interactive user interfaces and collaborating with design teams to bring creative visions to life.",
    technologies: ["React", "JavaScript", "SCSS", "Figma", "Git"]
  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "StartUp Ventures",
    description: "Started my professional journey building web applications and learning industry best practices in an agile environment.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Timeline = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            My journey through the world of software development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
          
          {timelineData.map((item, index) => (
            <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2`}>
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-auto md:right-[-0.25rem] top-8 w-2 h-2 bg-primary rounded-full md:transform md:translate-x-1/2" />
              
              <Card className="ml-12 md:ml-0 glass-card rounded-apple p-8 group">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm px-3 py-1 rounded-lg font-medium">
                      {item.year}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-lg font-medium text-primary">
                      {item.company}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="rounded-lg border-border/50 hover:border-primary hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;