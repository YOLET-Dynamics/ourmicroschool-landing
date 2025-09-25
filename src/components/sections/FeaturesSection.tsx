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
      title: "Immersive Learning Modules",
      description: "Studio-style projects, seminars, and badges that spark curiosity every week.",
    },
    {
      icon: BarChart3,
      title: "Personalized Progress Dashboards",
      description: "Celebrate wins with insights that actually make sense to learners and families.",
    },
    {
      icon: Target,
      title: "Adaptive Skill Building",
      description: "Target the next best action for every learner with evidence-backed recommendations.",
    },
  ];

  const educatorFeatures = [
    {
      icon: Calendar,
      title: "Cadence Planning",
      description: "Run your entire term—sprints, studios, expeditions—without spreadsheets.",
    },
    {
      icon: CheckCircle,
      title: "Feedback Loops",
      description: "Automate formative feedback and reflection prompts that keep momentum high.",
    },
    {
      icon: Users,
      title: "Community Coordination",
      description: "Sync caregivers, guides, and specialists with shared calendars and nudges.",
    },
  ];

  const parentFeatures = [
    {
      icon: BarChart3,
      title: "Living Portfolios",
      description: "Share beautiful evidence of growth with families and advisory boards.",
    },
    {
      icon: Bell,
      title: "Moments That Matter",
      description:
        "Automated nudges and celebrations that keep every stakeholder engaged.",
    },
    {
      icon: MessageSquare,
      title: "Secure Communication",
      description: "Replace the text threads with AI-assisted updates that keep everyone aligned.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 text-balance">
            Build, run, and grow your microschool in one OS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            OurMicroSchool adapts to each role—learners, guides, and families—so your community can focus on what matters most.
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


