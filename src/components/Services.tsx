import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, BarChart3, Cloud, Workflow, Database, Shield } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete Odoo ERP setup and configuration tailored to your business needs."
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced reporting and analytics to drive data-driven decision making."
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure for scalability and reliability."
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect all your systems for unified data management and insights."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance management."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Odoo solutions to transform your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={servicesImage} 
              alt="Business Services Illustration" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Why Choose Our Odoo Solutions?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in delivering robust, scalable, and user-friendly Odoo implementations 
              that align perfectly with your business objectives. Our team combines deep technical 
              expertise with industry best practices to ensure your success.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Expert consultation and strategy development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Custom module development and integration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Ongoing support and maintenance
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;