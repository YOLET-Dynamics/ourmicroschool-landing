import { Card } from "@/components/ui/card";
import { Target, GraduationCap, Smile } from "lucide-react";

export function WhyChooseSection() {
  const whyChooseFeatures = [
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description:
        "Our platform adapts to each student's pace and learning style, ensuring effective and engaging education.",
    },
    {
      icon: GraduationCap,
      title: "All-In-One Homeschooling Hub",
      description:
        "Manage curriculum, assignments, progress, and communication seamlessly in one intuitive platform.",
    },
    {
      icon: Smile,
      title: "User-Friendly for the Whole Family",
      description:
        "Designed for ease of use by students, parents, and educators of all technical skill levels.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 lg:px-8 scroll-mt-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 text-balance">
              Why Choose Us for Your Homeschooling?
            </h2>

            <div className="space-y-8">
              {whyChooseFeatures.map((feature, index) => {
                const Icon = feature.icon as any;
                return (
                  <Card
                    key={index}
                    className="p-6 border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Adaptive Learning</h3>
              <p className="text-muted-foreground text-lg">
                Our platform adapts to each student's pace and learning style, ensuring effective and engaging
                education.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


