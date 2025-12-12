import { Lock, Unlock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Module } from '@/types/course';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  module: Module;
  isUnlocked: boolean;
  isCompleted: boolean;
  onStart: () => void;
}

export function ModuleCard({ module, isUnlocked, isCompleted, onStart }: ModuleCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card border-2 transition-all duration-300 group",
        isUnlocked 
          ? isCompleted 
            ? "border-primary glow-primary" 
            : "border-secondary hover:border-primary hover:-translate-y-1"
          : "border-muted opacity-75"
      )}
    >
      {/* Module number badge */}
      <div className={cn(
        "absolute -top-3 left-4 px-3 py-1 font-pixel text-xs",
        isUnlocked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      )}>
        {String(module.id).padStart(2, '0')}
      </div>

      {/* Status badge */}
      <div className={cn(
        "absolute -top-3 right-4 px-3 py-1 text-xs flex items-center gap-1",
        isCompleted 
          ? "bg-primary text-primary-foreground" 
          : isUnlocked 
            ? "bg-secondary text-secondary-foreground" 
            : "bg-muted text-muted-foreground"
      )}>
        {isCompleted ? (
          <>
            <CheckCircle2 className="w-3 h-3" />
            Complete
          </>
        ) : isUnlocked ? (
          <>
            <Unlock className="w-3 h-3" />
            Unlocked
          </>
        ) : (
          <>
            <Lock className="w-3 h-3" />
            Locked
          </>
        )}
      </div>

      <div className="p-6 pt-8">
        <h3 className={cn(
          "font-pixel text-xs sm:text-sm mb-3",
          isUnlocked ? "text-foreground" : "text-muted-foreground"
        )}>
          {module.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {module.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {module.quiz.questions.length} quiz questions
          </span>
          
          {isUnlocked ? (
            <Button 
              variant={isCompleted ? "outline" : "hero"}
              size="sm"
              onClick={onStart}
            >
              {isCompleted ? "Review" : "Start"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button variant="locked" size="sm" disabled>
              <Lock className="w-4 h-4 mr-1" />
              Locked
            </Button>
          )}
        </div>
      </div>

      {/* Progress indicator for locked modules */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Complete previous module to unlock</p>
          </div>
        </div>
      )}
    </div>
  );
}
