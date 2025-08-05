import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-apple p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-apple p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="mt-2 rounded-lg border-border/50 focus:border-primary" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-2 rounded-lg border-border/50 focus:border-primary" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="mt-2 rounded-lg border-border/50 focus:border-primary resize-none" 
                  />
                </div>
              </div>
              
              <Button className="w-full btn-apple">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;