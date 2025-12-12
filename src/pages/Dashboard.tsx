import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ModuleCard } from '@/components/ModuleCard';
import { AboutSection } from '@/components/AboutSection';
import { modules } from '@/data/courseData';
import { useAuth } from '@/contexts/AuthContext';
import { Trophy, Target, Zap } from 'lucide-react';
import { useEffect } from 'react';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const getModuleStatus = (moduleId: number) => {
    const progress = user.progress.find(p => p.moduleId === moduleId);
    const isCompleted = progress?.completed || false;
    
    // First module is always unlocked
    if (moduleId === 1) return { isUnlocked: true, isCompleted };
    
    // Check if previous module is completed
    const prevProgress = user.progress.find(p => p.moduleId === moduleId - 1);
    const isUnlocked = prevProgress?.completed || false;
    
    return { isUnlocked, isCompleted };
  };

  const completedCount = user.progress.filter(p => p.completed).length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl text-foreground mb-4 pixel-shadow">
              Your <span className="text-primary">Learning</span> Journey
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete modules, pass quizzes, and unlock new levels as you master exploratory testing
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-card border-2 border-border p-4 text-center">
              <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-pixel text-lg text-primary">{completedCount}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
            <div className="bg-card border-2 border-border p-4 text-center">
              <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
              <p className="font-pixel text-lg text-secondary">{modules.length - completedCount}</p>
              <p className="text-xs text-muted-foreground">Remaining</p>
            </div>
            <div className="bg-card border-2 border-border p-4 text-center">
              <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-pixel text-lg text-foreground">{progressPercent}%</p>
              <p className="text-xs text-muted-foreground">Progress</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Overall Progress</span>
              <span className="font-pixel text-xs text-primary">{progressPercent}%</span>
            </div>
            <div className="h-4 bg-muted border-2 border-border overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((module) => {
              const { isUnlocked, isCompleted } = getModuleStatus(module.id);
              return (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isUnlocked}
                  isCompleted={isCompleted}
                  onStart={() => navigate(`/module/${module.id}`)}
                />
              );
            })}
          </div>
        </div>

        {/* About Section */}
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
