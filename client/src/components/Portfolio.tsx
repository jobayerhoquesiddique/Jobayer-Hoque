import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Coins, Smartphone, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Complete admin dashboard redesign for growing online retailer with improved analytics.",
    icon: Laptop,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Web Development", "Analytics"],
    year: "2024",
    price: "$2,500",
    timeline: "3 weeks",
    category: "web design"
  },
  {
    title: "DeFi Staking Platform",
    description: "Secure staking platform with automated yield distribution and governance features.",
    icon: Coins,
    gradient: "from-green-500 to-emerald-500",
    tags: ["Blockchain", "DeFi"],
    year: "2024",
    price: "$4,200",
    timeline: "4 weeks",
    category: "SaaS MVP"
  },
  {
    title: "Restaurant Booking App",
    description: "Mobile-first reservation system with real-time availability and customer management.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    tags: ["Mobile App", "MVP"],
    year: "2024",
    price: "$1,800",
    timeline: "2 weeks",
    category: "automation"
  },
  {
    title: "Healthcare Clinic Website",
    description: "Professional medical practice website with appointment booking and patient portal.",
    icon: Laptop,
    gradient: "from-orange-500 to-red-500",
    tags: ["Healthcare", "Booking"],
    year: "2024",
    price: "$1,200",
    timeline: "2 weeks",
    category: "web design"
  },
  {
    title: "Real Estate CRM",
    description: "Custom CRM solution for property management with automated lead tracking.",
    icon: Laptop,
    gradient: "from-indigo-500 to-purple-500",
    tags: ["CRM", "Automation"],
    year: "2024",
    price: "$3,500",
    timeline: "4 weeks",
    category: "automation"
  },
  {
    title: "NFT Marketplace",
    description: "Complete NFT trading platform with minting, royalties, and secondary market features.",
    icon: Coins,
    gradient: "from-pink-500 to-rose-500",
    tags: ["NFT", "Marketplace"],
    year: "2024",
    price: "$5,000",
    timeline: "6 weeks",
    category: "SaaS MVP"
  },
  {
    title: "Fitness Studio Brand",
    description: "Complete branding package including logo design, color palette, and marketing materials.",
    icon: Smartphone,
    gradient: "from-cyan-500 to-blue-500",
    tags: ["Branding", "Design"],
    year: "2024",
    price: "$800",
    timeline: "1 week",
    category: "branding"
  },
  {
    title: "Invoice Management System",
    description: "Streamlined invoicing tool for freelancers with payment tracking and client management.",
    icon: Laptop,
    gradient: "from-yellow-500 to-orange-500",
    tags: ["SaaS", "Finance"],
    year: "2024",
    price: "$2,200",
    timeline: "3 weeks",
    category: "SaaS MVP"
  },
  {
    title: "Learning Platform",
    description: "Educational platform with course management, progress tracking, and certification system.",
    icon: Laptop,
    gradient: "from-green-400 to-emerald-500",
    tags: ["Education", "Platform"],
    year: "2024",
    price: "$4,800",
    timeline: "5 weeks",
    category: "SaaS MVP"
  },
  {
    title: "Coffee Shop Website",
    description: "Modern website for local coffee shop with online ordering and loyalty program integration.",
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-500",
    tags: ["Restaurant", "E-commerce"],
    year: "2024",
    price: "$950",
    timeline: "2 weeks",
    category: "web design"
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Personal finance app for tracking cryptocurrency investments with real-time pricing.",
    icon: Coins,
    gradient: "from-violet-500 to-purple-500",
    tags: ["Crypto", "Finance"],
    year: "2024",
    price: "$1,500",
    timeline: "3 weeks",
    category: "automation"
  },
  {
    title: "Event Planning Platform",
    description: "Comprehensive event management tool with vendor coordination and guest communication.",
    icon: Laptop,
    gradient: "from-rose-500 to-pink-500",
    tags: ["Events", "Management"],
    year: "2024",
    price: "$3,200",
    timeline: "4 weeks",
    category: "SaaS MVP"
  }
];

const clientLogos = [
  { name: "Client 1", width: "w-32" },
  { name: "Client 2", width: "w-32" },
  { name: "Client 3", width: "w-32" },
  { name: "Client 4", width: "w-32" },
  { name: "Client 5", width: "w-32" },
  { name: "Client 6", width: "w-32" }
];

export function Portfolio() {
  const portfolioRef = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6" ref={portfolioRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="portfolio-title">
            Recent Client Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-description">
            Real projects delivered in 2024. From $800 branding packages to $5,000 MVP builds - transparent pricing for proven results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover-lift bg-card rounded-2xl overflow-hidden border border-border theme-transition"
              data-testid={`project-card-${index}`}
            >
              <div className={`aspect-video bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <project.icon className="text-white" size={48} />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      data-testid={`project-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span data-testid={`project-price-${index}`}>
                    {project.price}
                  </span>
                  <span data-testid={`project-timeline-${index}`}>
                    {project.timeline}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground" data-testid={`project-year-${index}`}>
                    {project.year}
                  </span>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:underline p-0"
                    data-testid={`project-case-study-${index}`}
                  >
                    View Case Study <ArrowRight className="ml-1" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4" data-testid="clients-title">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground" data-testid="clients-description">
              Companies that trust us to deliver exceptional results
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-pulse-slow justify-center">
              {clientLogos.map((client, index) => (
                <div 
                  key={client.name}
                  className={`flex-shrink-0 ${client.width} h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg`}
                  data-testid={`client-logo-${index}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
