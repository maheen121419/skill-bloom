import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Trophy } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating pixels */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 right-10 w-5 h-5 bg-primary animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded mb-8 pixel-border">
            <Sparkles className="w-4 h-4 text-accent animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Level up your testing skills</span>
          </div>
          
          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 leading-relaxed text-foreground pixel-shadow">
            Master
            <span className="text-primary"> Exploratory</span>
            <br />
            <span className="text-secondary">Testing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Learn the art of finding bugs through interactive modules, 
            hands-on quizzes, and real-world techniques. 
            Unlock your potential as a quality champion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link to="/#how-it-works">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Trophy className="w-5 h-5 mr-2" />
                How It Works
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <p className="font-pixel text-2xl text-primary">5</p>
              <p className="text-sm">Modules</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-pixel text-2xl text-secondary">15</p>
              <p className="text-sm">Quizzes</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-pixel text-2xl text-accent">∞</p>
              <p className="text-sm">Knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
