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
    <section className="py-20 px-6 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Career Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey through the world of software development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />
          
          {timelineData.map((item, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}>
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-auto md:right-[-0.5rem] top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg md:transform md:translate-x-1/2" />
              
              <Card className="ml-12 md:ml-0 glass-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="text-lg px-4 py-1">
                      {item.year}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {item.company}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;