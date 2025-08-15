import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, Star, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SX</span>
            </div>
            <span className="text-xl font-bold">StartxLaunch</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#program" className="text-muted-foreground hover:text-foreground transition-colors">Program</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#mentors" className="text-muted-foreground hover:text-foreground transition-colors">Mentors</a>
            <a href="#apply" className="text-muted-foreground hover:text-foreground transition-colors">Apply</a>
          </div>
          <Button>Join Program</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            Now Accepting Applications for 2024
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Launch Your <span className="text-primary">Startup</span> with StartX
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Stanford's premier startup accelerator. Get access to world-class mentors, 
            funding opportunities, and a network of successful entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1200+</div>
              <div className="text-muted-foreground">Companies Founded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$12B+</div>
              <div className="text-muted-foreground">Total Valuation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Mentors & Advisors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section id="program" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose StartxLaunch?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive program provides everything you need to transform your idea into a thriving business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Expert Mentorship</CardTitle>
              <CardDescription>
                Get guidance from successful entrepreneurs, VCs, and industry leaders who've built billion-dollar companies.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Funding Access</CardTitle>
              <CardDescription>
                Connect with our network of VCs and angel investors. Over 80% of our graduates secure funding within 12 months.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Rapid Growth</CardTitle>
              <CardDescription>
                Accelerate your development with our proven methodologies, workshops, and peer learning from fellow founders.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section id="portfolio" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Meet some of our most successful alumni</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: "TechFlow", valuation: "$2.5B", description: "AI-powered workflow automation" },
              { company: "GreenWave", valuation: "$1.8B", description: "Sustainable energy solutions" },
              { company: "DataVault", valuation: "$950M", description: "Enterprise data security" }
            ].map((story, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Badge variant="secondary">{story.valuation}</Badge>
                  </div>
                  <CardTitle>{story.company}</CardTitle>
                  <CardDescription>{story.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group p-0">
                    Read Story
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Future?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the next cohort of innovative founders and transform your startup idea into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Application
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Info Session
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">SX</span>
              </div>
              <span className="font-semibold">StartxLaunch</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 StartxLaunch. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
