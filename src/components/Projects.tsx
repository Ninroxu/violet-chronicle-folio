import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, forecasting, and location-based recommendations.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and optimized performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Express"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "AI Chat Application",
    description: "Intelligent chat application with natural language processing and machine learning capabilities.",
    technologies: ["Python", "TensorFlow", "React", "WebSocket"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A showcase of recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="glass-card rounded-apple overflow-hidden group">
              <div className="aspect-video bg-gradient-primary rounded-t-apple" />
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="rounded-lg bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-lg border-border/50 hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-lg border-border/50 hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;