import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Code, 
  Award, 
  Globe, 
  Shield,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock
} from "lucide-react";

const businessMetrics = [
  {
    title: "Monthly Recurring Revenue",
    current: 8500,
    target: 10000,
    unit: "$",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
    trend: "+12%",
    description: "Consistent growth in monthly revenue"
  },
  {
    title: "Active Clients", 
    current: 13,
    target: 15,
    unit: "clients",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    trend: "+18%",
    description: "Growing client base since launch"
  },
  {
    title: "Projects Completed",
    current: 28,
    target: 30,
    unit: "projects",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    trend: "+24%",
    description: "Successfully delivered projects"
  },
  {
    title: "Client Satisfaction",
    current: 97,
    target: 100,
    unit: "%",
    icon: Award,
    color: "from-orange-500 to-red-500",
    trend: "+3%",
    description: "Average satisfaction rating"
  },
  {
    title: "Average Project Value",
    current: 2800,
    target: 5000,
    unit: "$",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    trend: "+15%",
    description: "Growing project complexity"
  },
  {
    title: "On-Time Delivery",
    current: 94,
    target: 100,
    unit: "%",
    icon: Clock,
    color: "from-pink-500 to-rose-500",
    trend: "+8%",
    description: "Reliable project delivery"
  }
];

const monthlyGrowth = [
  { month: "Jan 2024", revenue: 2400, clients: 3, projects: 4 },
  { month: "Feb 2024", revenue: 3200, clients: 4, projects: 6 },
  { month: "Mar 2024", revenue: 4100, clients: 6, projects: 8 },
  { month: "Apr 2024", revenue: 5300, clients: 8, projects: 11 },
  { month: "May 2024", revenue: 6200, clients: 9, projects: 14 },
  { month: "Jun 2024", revenue: 7100, clients: 11, projects: 18 },
  { month: "Jul 2024", revenue: 7800, clients: 12, projects: 22 },
  { month: "Aug 2024", revenue: 8500, clients: 13, projects: 28 }
];

const milestones = [
  { date: "January 2024", event: "Nexus Creative Studio Founded", icon: Calendar },
  { date: "March 2024", event: "First $5K Month Achieved", icon: DollarSign },
  { date: "May 2024", event: "10+ Active Clients Acquired", icon: Users },
  { date: "July 2024", event: "Multi-Brand Portfolio Launch", icon: Globe },
  { date: "August 2024", event: "$8.5K Monthly Revenue Milestone", icon: TrendingUp }
];

export default function Metrics() {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: { [key: string]: number } = {};
      businessMetrics.forEach(metric => {
        animated[metric.title] = metric.current;
      });
      setAnimatedValues(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Business Metrics & Growth
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transparent insights into our journey since launching in 2024. Real numbers, real growth.
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {businessMetrics.map((metric, index) => (
                <Card key={metric.title} className="bg-card rounded-2xl border border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}>
                        <metric.icon className="text-white" size={24} />
                      </div>
                      <Badge variant="secondary" className="text-green-600">
                        {metric.trend}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-end space-x-2">
                        <span className="text-3xl font-bold">
                          {metric.unit === "$" ? "$" : ""}{animatedValues[metric.title]?.toLocaleString() || 0}
                          {metric.unit !== "$" ? ` ${metric.unit}` : ""}
                        </span>
                        <span className="text-muted-foreground">
                          / {metric.unit === "$" ? "$" : ""}{metric.target.toLocaleString()}{metric.unit !== "$" ? ` ${metric.unit}` : ""}
                        </span>
                      </div>
                      
                      <Progress 
                        value={(animatedValues[metric.title] || 0) / metric.target * 100} 
                        className="h-2"
                      />
                      
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Timeline */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Growth Timeline</h2>
              <p className="text-xl text-muted-foreground">
                Our journey from startup to sustainable business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Monthly Growth Chart */}
              <Card className="bg-card rounded-2xl">
                <CardHeader>
                  <CardTitle>Monthly Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyGrowth.slice(-4).map((month, index) => (
                      <div key={month.month} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                        <div>
                          <div className="font-semibold">{month.month}</div>
                          <div className="text-sm text-muted-foreground">
                            {month.clients} clients • {month.projects} projects
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">
                            ${month.revenue.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">revenue</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Milestones */}
              <Card className="bg-card rounded-2xl">
                <CardHeader>
                  <CardTitle>Key Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <div key={milestone.date} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <milestone.icon className="text-white" size={16} />
                        </div>
                        <div>
                          <div className="font-semibold">{milestone.event}</div>
                          <div className="text-sm text-muted-foreground">{milestone.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We believe in open communication about our business journey. These metrics represent our actual performance as we build a sustainable, client-focused agency.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">Founded & Growing</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">$500 - $5K</div>
                <div className="text-sm text-muted-foreground">Project Range</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">97%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}