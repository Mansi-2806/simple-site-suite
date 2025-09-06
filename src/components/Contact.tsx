import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with Odoo? Let's discuss your requirements and create a solution that works for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  amanjain125@example.com
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="h-6 w-6 mr-3 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  +1 (555) 123-4567
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  123 Business Avenue<br />
                  Technology District<br />
                  Innovation City, IC 12345
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Github className="h-6 w-6 mr-3 text-primary" />
                  GitHub Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  amanjain125/odooproject
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your Company Name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px]"
                />
              </div>
              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;