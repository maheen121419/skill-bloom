import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Quiz } from '@/components/Quiz';
import { Button } from '@/components/ui/button';
import { modules } from '@/data/courseData';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ModulePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateProgress } = useAuth();
  const [showQuiz, setShowQuiz] = useState(false);
  const [articleRead, setArticleRead] = useState(false);

  const moduleId = parseInt(id || '1');
  const module = modules.find(m => m.id === moduleId);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Check if module is unlocked
    if (moduleId > 1 && user) {
      const prevProgress = user.progress.find(p => p.moduleId === moduleId - 1);
      if (!prevProgress?.completed) {
        toast.error('Complete the previous module first!');
        navigate('/dashboard');
      }
    }
  }, [isAuthenticated, moduleId, user, navigate]);

  if (!module || !user) {
    return null;
  }

  const progress = user.progress.find(p => p.moduleId === moduleId);
  const isCompleted = progress?.completed || false;

  const handleQuizComplete = (passed: boolean, score: number) => {
    if (passed) {
      updateProgress(moduleId, true, score);
      toast.success('Module completed! You can now proceed to the next level.');
    }
  };

  const handleScrollToQuiz = () => {
    setArticleRead(true);
    setShowQuiz(true);
    setTimeout(() => {
      document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          {/* Module header */}
          <div className="bg-card border-2 border-border p-6 mb-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 font-pixel text-xs">
                    Module {String(moduleId).padStart(2, '0')}
                  </span>
                  {isCompleted && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>
                <h1 className="font-pixel text-sm sm:text-base md:text-lg text-foreground">
                  {module.title}
                </h1>
              </div>
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
          </div>

          {/* Article content */}
          <div className="bg-card border-2 border-border p-6 md:p-8 mb-8">
            <article className="prose prose-invert max-w-none">
              {module.articleContent.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="font-pixel text-lg text-primary mb-6">{line.replace('# ', '')}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="font-pixel text-sm text-secondary mt-8 mb-4">{line.replace('## ', '')}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="font-pixel text-xs text-accent mt-6 mb-3">{line.replace('### ', '')}</h3>;
                } else if (line.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4 list-disc mb-2">
                      {line.replace('- ', '')}
                    </li>
                  );
                } else if (line.match(/^\d+\./)) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4 list-decimal mb-2">
                      {line.replace(/^\d+\.\s*/, '')}
                    </li>
                  );
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={index} className="text-foreground font-bold my-2">{line.replace(/\*\*/g, '')}</p>;
                } else if (line.trim()) {
                  return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
                }
                return null;
              })}
            </article>

            {/* Take quiz button */}
            {!showQuiz && (
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to test your knowledge?
                </p>
                <Button variant="hero" size="lg" onClick={handleScrollToQuiz}>
                  Take the Quiz
                </Button>
              </div>
            )}
          </div>

          {/* Quiz section */}
          {showQuiz && (
            <div id="quiz-section" className="mb-8">
              <div className="text-center mb-6">
                <h2 className="font-pixel text-sm text-foreground mb-2">Quiz Time!</h2>
                <p className="text-muted-foreground text-sm">
                  Score {module.quiz.passingScore} or more to unlock the next module
                </p>
              </div>
              <Quiz quiz={module.quiz} onComplete={handleQuizComplete} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModulePage;
