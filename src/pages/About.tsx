import { Users, Target, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "To empower businesses worldwide with innovative technology solutions that drive sustainable growth and operational excellence."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible, developing cutting-edge solutions for tomorrow's challenges."
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "Our success is measured by our customers' success. We build lasting partnerships through exceptional service and support."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From startups to Fortune 500 companies, we serve businesses across industries and continents with equal dedication."
    }
  ];

  const stats = [
    { number: "500+", label: "Global Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-corporate-purple-dark text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About CORPTECH
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Leading the digital transformation revolution with innovative solutions
              that empower businesses to achieve extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2009, CORPTECH began as a vision to bridge the gap between 
                  cutting-edge technology and practical business solutions. What started 
                  as a small team of passionate engineers has grown into a global leader 
                  in corporate technology.
                </p>
                <p>
                  Today, we serve over 500 clients worldwide, from emerging startups to 
                  Fortune 500 enterprises. Our commitment to innovation, quality, and 
                  customer success has earned us recognition as an industry pioneer.
                </p>
                <p>
                  We believe that technology should enhance human potential, not replace it. 
                  Every solution we develop is designed to empower teams, streamline processes, 
                  and unlock new possibilities for growth.
                </p>
              </div>
            </div>
            <div className="bg-corporate-purple-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Leadership Team</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                  <p className="text-muted-foreground">Chief Executive Officer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Michael Chen</h4>
                  <p className="text-muted-foreground">Chief Technology Officer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Emily Rodriguez</h4>
                  <p className="text-muted-foreground">Chief Operations Officer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">David Kim</h4>
                  <p className="text-muted-foreground">Chief Financial Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Our impact speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;