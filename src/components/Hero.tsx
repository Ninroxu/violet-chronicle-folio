import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Floating elements with subtle effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Full Stack Developer
            </p>
            <h1 className="text-display md:text-display font-bold text-foreground leading-tight tracking-tight">
              Building the future<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                one line at a time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about creating exceptional digital experiences through 
              clean code, innovative design, and cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-apple text-lg px-8 py-4 h-auto rounded-apple shadow-apple hover:shadow-apple-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto rounded-apple border-border/50 hover:border-border hover:bg-secondary/50 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;