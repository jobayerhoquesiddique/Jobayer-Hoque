import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart Inc",
    content: "Nexus Creative delivered our MVP in just 3 weeks. The transparent pricing and consistent communication made the entire process smooth. We're already seeing user engagement above our targets.",
    rating: 5,
    project: "SaaS MVP - $2,800"
  },
  {
    name: "Michael Rodriguez", 
    role: "CEO, LocalEats",
    content: "The restaurant booking app they built has streamlined our operations completely. On-time delivery and excellent post-launch support. Highly recommended for any food service business.",
    rating: 5,
    project: "Mobile App - $1,800"
  },
  {
    name: "David Park",
    role: "Clinic Manager, HealthFirst",
    content: "Our new website with appointment booking has reduced phone calls by 60% and improved patient satisfaction. Professional work at a fair price point.",
    rating: 5,
    project: "Healthcare Website - $1,200"
  }
];

export function Testimonials() {
  const testimonialsRef = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6" ref={testimonialsRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real clients who've seen measurable results from our work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card rounded-2xl border border-border hover-lift theme-transition"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="text-primary mr-3" size={24} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="space-y-2">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$8.5K</div>
              <div className="text-sm text-muted-foreground">Monthly Revenue</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">13</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">97%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2024</div>
              <div className="text-sm text-muted-foreground">Founded & Growing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}