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
        {/* Background glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-corporate-purple-glow rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-corporate-purple rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-corporate-purple-glow rounded-full opacity-25 blur-3xl"></div>
        </div>

        {/* Curved container with glow */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Curved background box with glow */}
            <div className="absolute inset-0 transform -skew-y-1 bg-card border border-border rounded-3xl shadow-glow-purple-strong"></div>
            <div className="absolute inset-0 transform -skew-y-1 bg-gradient-to-br from-corporate-purple-light/20 to-transparent rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative text-center py-20 px-8">
              <h1 className="text-7xl md:text-9xl font-bold mb-8 text-foreground tracking-wider">
                B<span className="text-corporate-purple-glow">1</span>G
                <span className="block text-6xl md:text-8xl mt-4 text-corporate-purple-glow">
                  CORPORATION
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
                Leading the digital transformation revolution with innovative solutions
                that empower businesses to achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-corporate-purple hover:bg-corporate-purple-glow shadow-glow-purple">
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-corporate-purple text-corporate-purple hover:bg-corporate-purple hover:text-primary-foreground">
                  <Link to="/partner">
                    Become a Partner
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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