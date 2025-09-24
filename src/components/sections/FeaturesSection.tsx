import {
  BookOpen,
  Heart,
  GraduationCap,
  BarChart3,
  Target,
  Calendar,
  CheckCircle,
  Users,
  Bell,
  MessageSquare,
} from "lucide-react";

export function FeaturesSection() {
  const studentFeatures = [
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Multi-modal content to suit diverse learning preferences",
    },
    {
      icon: BarChart3,
      title: "Personalized Progress Dashboards",
      description: "Track your achievements and learning milestones",
    },
    {
      icon: Target,
      title: "Adaptive Skill Building",
      description: "Practice and assessments that match your pace",
    },
  ];

  const educatorFeatures = [
    {
      icon: Calendar,
      title: "Flexible Curriculum Planner",
      description: "Design, assign, and manage learning paths with ease",
    },
    {
      icon: CheckCircle,
      title: "Automated Grading & Feedback",
      description: "Streamline assessments and provide timely input",
    },
    {
      icon: Users,
      title: "Class & Assignment Scheduling",
      description: "Organize group lessons and track student submissions",
    },
  ];

  const parentFeatures = [
    {
      icon: BarChart3,
      title: "Comprehensive Progress Reports",
      description: "Detailed insights into learning activities and achievements",
    },
    {
      icon: Bell,
      title: "Timely Notifications & Alerts",
      description:
        "Stay updated on assignments, progress, and important announcements",
    },
    {
      icon: MessageSquare,
      title: "Secure Communication Tools",
      description: "Direct messaging with educators and co-op members",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 text-balance">
            Built for Every Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform adapts to the unique needs of students, teachers, and parents
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* For Students */}
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group hover:bg-accent/20 transition-colors">
              <GraduationCap className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">For Students</h3>
            <p className="text-muted-foreground mb-8">Engaging lessons and tools for independent learning</p>

            <div className="space-y-6 text-left">
              {studentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Educators & Co-ops */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group hover:bg-primary/20 transition-colors">
              <BookOpen className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">For Educators & Co-ops</h3>
            <p className="text-muted-foreground mb-8">Robust tools for curriculum design and student management</p>

            <div className="space-y-6 text-left">
              {educatorFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Parents */}
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group hover:bg-accent/20 transition-colors">
              <Heart className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">For Parents</h3>
            <p className="text-muted-foreground mb-8">Stay connected and informed about your child's education</p>

            <div className="space-y-6 text-left">
              {parentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


