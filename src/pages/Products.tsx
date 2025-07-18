import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  Database, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Cloud,
      title: "CloudSync Enterprise",
      category: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure management platform for enterprise-scale operations.",
      features: [
        "Multi-cloud orchestration",
        "Auto-scaling capabilities",
        "99.99% uptime SLA",
        "Advanced monitoring"
      ],
      comingSoon: false
    },
    {
      icon: Shield,
      title: "SecureGuard Pro",
      category: "Cybersecurity",
      description: "Advanced threat detection and prevention system with AI-powered security analytics.",
      features: [
        "Real-time threat detection",
        "Zero-trust architecture",
        "Compliance automation",
        "Incident response"
      ],
      comingSoon: true
    },
    {
      icon: BarChart3,
      title: "DataInsight Analytics",
      category: "Business Intelligence",
      description: "Powerful business intelligence platform for data-driven decision making.",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization"
      ],
      comingSoon: false
    },
    {
      icon: Users,
      title: "TeamFlow Collaboration",
      category: "Productivity",
      description: "Integrated collaboration suite designed for modern distributed teams.",
      features: [
        "Video conferencing",
        "Project management",
        "File sharing",
        "Team messaging"
      ],
      comingSoon: true
    },
    {
      icon: Database,
      title: "DataVault Backup",
      category: "Data Management",
      description: "Enterprise-grade backup and disaster recovery solution with military-grade encryption.",
      features: [
        "Automated backups",
        "Point-in-time recovery",
        "Cross-region replication",
        "Encryption at rest"
      ],
      comingSoon: false
    },
    {
      icon: Smartphone,
      title: "MobileFirst Platform",
      category: "Mobile Solutions",
      description: "Complete mobile application development and management platform.",
      features: [
        "Cross-platform development",
        "App store deployment",
        "Performance monitoring",
        "Push notifications"
      ],
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-corporate-purple-dark text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Cutting-edge technology solutions designed to transform your business
              operations and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive suite of enterprise-grade solutions,
              each designed to address specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{product.category}</Badge>
                      {product.comingSoon && (
                        <Badge className="bg-corporate-purple text-primary-foreground">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="w-full"
                    variant={product.comingSoon ? "outline" : "default"}
                  >
                    <Link to="/support">
                      {product.comingSoon ? "Get Notified" : "Learn More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Custom Solutions Available
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't see exactly what you need? Our expert team can develop
            custom solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/support">
                Discuss Custom Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/partner">
                Become a Partner
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;