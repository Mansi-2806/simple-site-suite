import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Clients Served"
    },
    {
      icon: Award,
      value: "100+",
      label: "Projects Completed"
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: Target,
      value: "99%",
      label: "Success Rate"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About OdooProject
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a dedicated team of Odoo specialists committed to helping businesses 
              unlock their full potential through innovative ERP solutions. Our expertise 
              spans across various industries, ensuring tailored implementations that drive 
              real business value.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From initial consultation to ongoing support, we partner with you every step 
              of the way to ensure your Odoo implementation exceeds expectations and delivers 
              measurable results.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;