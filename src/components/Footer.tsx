import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-light">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Passionate developer creating beautiful digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-light transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-light transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-light transition-colors">Home</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-purple-light transition-colors">Timeline</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-purple-light transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-purple-light transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-light transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-light">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>your.email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Portfolio. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;