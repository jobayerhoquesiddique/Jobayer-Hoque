import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Code, Bitcoin, Plus, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Starter Package",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Landing Page Design", "Basic Branding", "Contact Forms"],
    price: "$500 - $1,500",
    timeline: "1-2 weeks",
    tier: "starter"
  },
  {
    icon: Code,
    title: "Growth Package",
    description: "Comprehensive solutions for businesses ready to scale with advanced functionality.",
    gradient: "from-green-500 to-emerald-500", 
    features: ["Full Website/App", "Custom Features", "Content Management"],
    price: "$1,500 - $3,500",
    timeline: "2-4 weeks",
    tier: "growth"
  },
  {
    icon: Bitcoin,
    title: "Premium Package",
    description: "Enterprise-grade solutions with advanced integrations and custom development.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Complex MVP/SaaS", "API Integrations", "Custom Backend"],
    price: "$3,500 - $5,000",
    timeline: "4-6 weeks",
    tier: "premium"
  },
  {
    icon: Plus,
    title: "Enterprise Package",
    description: "Complete digital transformation with ongoing support and strategic guidance.",
    gradient: "from-orange-500 to-red-500",
    features: ["Multi-platform Solution", "DevOps Setup", "6 Months Support"],
    price: "Starting at $5,000",
    timeline: "6+ weeks",
    tier: "enterprise"
  }
];

export function Services() {
  const servicesRef = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6" ref={servicesRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="services-title">
            Service Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Transparent pricing for proven results. Choose the package that fits your business stage and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift bg-card rounded-2xl border border-border theme-transition"
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Price Range</span>
                      <span className="text-sm font-bold text-primary">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Timeline</span>
                      <span className="text-sm font-bold text-primary">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-sm text-muted-foreground"
                        data-testid={`service-feature-${index}-${featureIndex}`}
                      >
                        <Check className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
