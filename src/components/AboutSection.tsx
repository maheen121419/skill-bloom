import { instructors } from '@/data/courseData';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-foreground mb-4 pixel-shadow">
            About <span className="text-secondary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Meet the experts behind PixelLearn
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border-2 border-border p-8 relative">
            <div className="absolute -top-3 left-8 bg-primary px-4 py-1">
              <span className="font-pixel text-xs text-primary-foreground">OUR MISSION</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              We believe that quality assurance is an art form. Our mission is to empower testers worldwide 
              with the skills and mindset to find bugs others miss. Through interactive learning and 
              real-world techniques, we're building the next generation of exploratory testing champions.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-pixel text-sm sm:text-base text-foreground mb-2">
            Meet Your <span className="text-accent">Instructors</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="bg-card border-2 border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="p-6">
                {/* Avatar placeholder with pixel art style */}
                <div className="w-24 h-24 mx-auto mb-6 bg-muted border-4 border-border relative overflow-hidden group-hover:border-primary transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-0.5">
                      {/* Simple pixel face */}
                      {Array.from({ length: 64 }).map((_, i) => {
                        const isEye = [18, 21, 26, 29].includes(i);
                        const isMouth = [41, 42, 43, 44, 45, 46].includes(i);
                        const isFace = i >= 8 && i <= 55 && (i % 8 !== 0 && i % 8 !== 7);
                        return (
                          <div
                            key={i}
                            className={`w-2 h-2 ${
                              isEye 
                                ? 'bg-foreground' 
                                : isMouth 
                                  ? 'bg-destructive' 
                                  : isFace 
                                    ? index === 0 ? 'bg-amber-300' : 'bg-amber-600'
                                    : 'bg-transparent'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-pixel text-xs text-foreground mb-1">
                    {instructor.name}
                  </h4>
                  <p className="text-sm text-primary mb-4">
                    {instructor.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {instructor.bio}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <button className="w-8 h-8 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
