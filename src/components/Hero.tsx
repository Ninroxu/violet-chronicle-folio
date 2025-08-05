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
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-light bg-clip-text text-transparent">
            Hi, I'm a Creative
            <br />
            <span className="text-4xl md:text-6xl">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-light max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-purple-dark hover:bg-purple-light transition-all duration-300 shadow-glow">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-dark transition-all duration-300">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-white hover:text-purple-light transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white opacity-70" size={24} />
      </div>
    </section>
  );
};

export default Hero;