import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Video, Brain, BarChart3, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TrainWise</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-hero shadow-primary">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-success-light text-success text-sm font-medium">
                Transform Training Into Growth
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Turn Training Videos Into
              <span className="block text-primary mt-2">Engaging Micro-Lessons</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TrainWise converts your corporate training videos into structured, bite-sized courses with AI-powered summaries, adaptive quizzes, and personalized learning paths.
            </p>
            <div className="flex gap-4">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-hero shadow-primary text-lg">
                  Start Learning <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">500+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">95% Completion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Save 60% Time</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Team learning together" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-success flex items-center justify-center">
                  <Brain className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Knowledge Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Everything You Need for Effective Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to transform passive video watching into active, engaging learning experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Smart Video Processing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Upload training videos and watch as AI automatically segments them into focused 1-5 minute micro-lessons with key summaries.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Adaptive Quizzes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-generated questions that adapt to performance. Get instant feedback and targeted revision for concepts you're still learning.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-warning" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Spaced Repetition
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Smart reminders based on your performance ensure long-term retention. Review at optimal intervals for maximum impact.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Visual Progress Tracking
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Interactive skill graphs show what you've mastered, what you're learning, and what needs revision at a glance.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Skill Tracks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize learning into structured paths: Leadership, Technical Skills, Workplace Culture, and more.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-warning" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Team Analytics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track completion rates, quiz performance, and skill development across your entire organization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero p-12 text-center border-0 shadow-primary">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-primary-foreground">
                Ready to Transform Your Training?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join hundreds of companies creating engaging, effective learning experiences with TrainWise.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link to="/auth">
                  <Button size="lg" variant="secondary" className="text-lg">
                    Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">TrainWise</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TrainWise. Building better learning experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
