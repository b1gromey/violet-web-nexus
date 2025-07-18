import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols to protect your business data and operations."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your business growth."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration tools for enhanced team productivity."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Award-winning solutions trusted by Fortune 500 companies."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-corporate-purple-dark/20 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-corporate-purple/10 to-transparent"></div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-corporate-purple/30 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-corporate-purple-glow/20 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-corporate-purple/25 rounded-full opacity-35 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-foreground tracking-wider">
            <span className="bg-gradient-to-r from-corporate-purple-glow to-primary bg-clip-text text-transparent">
              B1G CORPORATION
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Elevate your site's visibility effortlessly with AI, where
            smart technology meets user-friendly SEO tools.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-background text-foreground border border-border hover:bg-muted transition-all duration-300 px-8 py-3 text-lg font-medium"
          >
            <Link to="/partner">
              JOIN US
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose CORPTECH?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver cutting-edge solutions that transform how businesses operate
              in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-purple text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of companies that trust CORPTECH for their technology needs.
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/partner">
                Get Started Today
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/support">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;