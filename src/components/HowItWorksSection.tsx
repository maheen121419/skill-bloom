import { BookOpen, Brain, Trophy, Rocket } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: "Read & Learn",
    description: "Dive into comprehensive articles covering exploratory testing concepts, techniques, and best practices.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Test Your Knowledge",
    description: "Complete interactive quizzes at the end of each module to reinforce your learning and unlock new content.",
    color: "secondary",
  },
  {
    icon: Trophy,
    title: "Unlock Achievements",
    description: "Progress through the course by passing quizzes. Each success unlocks the next level of your testing journey.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Apply Your Skills",
    description: "Take your newfound expertise to the real world and become a bug-hunting champion in your team.",
    color: "primary",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-foreground mb-4 pixel-shadow">
            How It <span className="text-primary">Works</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your journey to becoming an exploratory testing expert in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              primary: "border-primary text-primary glow-primary",
              secondary: "border-secondary text-secondary glow-secondary",
              accent: "border-accent text-accent glow-accent",
            };
            const iconBgClasses = {
              primary: "bg-primary",
              secondary: "bg-secondary",
              accent: "bg-accent",
            };
            
            return (
              <div
                key={index}
                className="group relative bg-card p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-muted border-2 border-border flex items-center justify-center font-pixel text-xs text-muted-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 flex items-center justify-center ${iconBgClasses[step.color as keyof typeof iconBgClasses]} group-hover:animate-pixel-bounce`}>
                  <Icon className={`w-8 h-8 ${step.color === 'primary' ? 'text-primary-foreground' : step.color === 'secondary' ? 'text-secondary-foreground' : 'text-accent-foreground'}`} />
                </div>
                
                {/* Content */}
                <h3 className="font-pixel text-xs sm:text-sm text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
