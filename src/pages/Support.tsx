import { Phone, Mail, MapPin, Clock, MessageCircle, FileText, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our expert support team",
      contact: "+1 (555) 123-4567",
      availability: "24/7 Premium Support",
      primary: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive responses",
      contact: "support@corptech.com",
      availability: "Response within 4 hours",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help through our live chat system",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST",
      primary: false
    }
  ];

  const supportCategories = [
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive guides, API docs, and troubleshooting resources"
    },
    {
      icon: Users,
      title: "Training & Onboarding",
      description: "Professional training sessions and implementation support"
    },
    {
      icon: Clock,
      title: "Emergency Support",
      description: "Critical issue resolution with guaranteed response times"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-corporate-purple-dark text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              We're here to help you succeed. Get the support you need,
              when you need it, from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the support method that works best for you.
              Our team is standing by to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${
                method.primary ? 'ring-2 ring-primary' : ''
              }`}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    method.primary ? 'bg-primary' : 'bg-accent'
                  }`}>
                    <method.icon className={`h-8 w-8 ${
                      method.primary ? 'text-primary-foreground' : 'text-accent-foreground'
                    }`} />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-lg font-semibold text-primary">
                    {method.contact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Location */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <MapPin className="h-6 w-6" />
                <span>Visit Our Office</span>
              </CardTitle>
              <CardDescription>
                Drop by our headquarters for in-person consultations
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <div className="font-semibold text-lg">CORPTECH Headquarters</div>
                <div className="text-muted-foreground">
                  123 Business Avenue<br />
                  Suite 500<br />
                  New York, NY 10001<br />
                  United States
                </div>
              </div>
              <div>
                <div className="font-semibold">Business Hours</div>
                <div className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 4:00 PM EST<br />
                  Sunday: Closed
                </div>
              </div>
              <Button className="mt-4">
                Schedule a Visit
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services designed to ensure your success
              with our products and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Emergency Support Available
          </h2>
          <p className="text-lg mb-6 text-destructive-foreground/90">
            Critical system issues? Our emergency support team is available 24/7
            for immediate assistance with mission-critical problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
            >
              Emergency Hotline: +1 (555) 911-TECH
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive"
            >
              Priority Email: emergency@corptech.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;