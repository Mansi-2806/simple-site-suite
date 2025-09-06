import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              OdooProject
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Empowering businesses with innovative Odoo ERP solutions. 
              We transform operations, enhance productivity, and drive sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">ERP Implementation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support & Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 OdooProject by amanjain125. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;