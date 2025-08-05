import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up glass rounded-3xl p-8 md:p-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-light bg-clip-text text-transparent">
            Hi, I'm a Creative
            <br />
            <span className="text-4xl md:text-6xl">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-light max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="glass-card text-white hover:bg-white/20 transition-all duration-300 shadow-glow border-white/20">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="glass rounded-full p-3 text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="glass rounded-full p-3 text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="glass rounded-full p-3 text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating glassmorphism elements */}
      <div className="absolute top-20 left-10 glass rounded-full w-20 h-20 animate-pulse opacity-30"></div>
      <div className="absolute top-40 right-20 glass rounded-full w-16 h-16 animate-pulse opacity-40"></div>
      <div className="absolute bottom-40 left-20 glass rounded-full w-12 h-12 animate-pulse opacity-50"></div>
      <div className="absolute bottom-60 right-10 glass rounded-full w-24 h-24 animate-pulse opacity-30"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white opacity-70" size={24} />
      </div>
    </section>
  );
};

export default Hero;