import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "CORPTECH Announces Revolutionary AI-Powered Analytics Platform",
      excerpt: "Our latest breakthrough in artificial intelligence brings unprecedented insights to enterprise data management, promising to transform how businesses make strategic decisions.",
      category: "Product Launch",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Sarah Johnson",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Global Tech Leader Expands Cloud Capabilities",
      excerpt: "Strategic alliance strengthens our cloud infrastructure offerings and enhances global reach for enterprise customers worldwide.",
      category: "Partnership",
      date: "2024-01-10",
      readTime: "3 min read",
      author: "Michael Chen",
      featured: false
    },
    {
      id: 3,
      title: "CORPTECH Achieves SOC 2 Type II Compliance Certification",
      excerpt: "This certification reinforces our commitment to the highest standards of security, availability, and confidentiality for our customers' data.",
      category: "Security",
      date: "2024-01-08",
      readTime: "4 min read",
      author: "Emily Rodriguez",
      featured: false
    },
    {
      id: 4,
      title: "Q4 2023 Results: Record Growth in Enterprise Subscriptions",
      excerpt: "Fourth quarter shows 150% year-over-year growth in enterprise subscriptions, driven by strong demand for our cloud solutions.",
      category: "Financial",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "David Kim",
      featured: false
    },
    {
      id: 5,
      title: "New Research Center Opens in Austin, Creating 200 Jobs",
      excerpt: "Expansion into Texas market includes state-of-the-art research facility focused on next-generation cybersecurity solutions.",
      category: "Company News",
      date: "2023-12-20",
      readTime: "4 min read",
      author: "Sarah Johnson",
      featured: false
    },
    {
      id: 6,
      title: "CORPTECH Named Leader in Gartner Magic Quadrant",
      excerpt: "Recognition in the prestigious industry report highlights our innovation in cloud infrastructure and enterprise solutions.",
      category: "Awards",
      date: "2023-12-15",
      readTime: "3 min read",
      author: "Michael Chen",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Product Launch": "bg-primary text-primary-foreground",
      "Partnership": "bg-accent text-accent-foreground",
      "Security": "bg-destructive text-destructive-foreground",
      "Financial": "bg-corporate-purple text-primary-foreground",
      "Company News": "bg-secondary text-secondary-foreground",
      "Awards": "bg-corporate-purple-dark text-primary-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-corporate-purple-dark text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Stay updated with the latest developments, product launches,
              and industry insights from CORPTECH.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Story
              </h2>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-accent to-accent/50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Badge className={getCategoryColor(featuredArticle.category)}>
                      {featuredArticle.category}
                    </Badge>
                    <div className="mt-4 text-accent-foreground/80">
                      <Calendar className="h-5 w-5 inline mr-2" />
                      {formatDate(featuredArticle.date)}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl md:text-3xl mb-4">
                      {featuredArticle.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {featuredArticle.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      <Button>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch up on the latest news and announcements from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Subscribe to our newsletter for the latest updates, product announcements,
            and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg flex-1 text-foreground"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;